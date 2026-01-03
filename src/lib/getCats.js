const BASE_CATS = [
  { name: 'Whiskers', age: '2' },
  { name: 'Mittens', age: '2' },
  { name: 'Shadow', age: '1' },
  { name: 'Pumpkin', age: '3' },
  { name: 'Luna', age: '4' },
  { name: 'Simba', age: '2' },
];

export const BREEDS = ['Balinese', 'Birman', 'Chausie', 'Himalayan','Siamese','Sphynx','Peterbald'];

const cacheByCount = new Map();

function hashStringToIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h) % mod;
}

export async function getCats(count = BASE_CATS.length) {
 
  if (cacheByCount.has(count)) return cacheByCount.get(count);

 
  const items = Array.from({ length: count }, (_, i) => {
    const base = BASE_CATS[i % BASE_CATS.length];
    return { ...base };
  });

  try {
    const responses = await Promise.all(
      items.map(() => fetch('https://api.thecatapi.com/v1/images/search').then(r => r.json()))
    );

    const cats = items.map((cat, i) => {
      const image = responses[i] && responses[i][0] && responses[i][0].url ? responses[i][0].url : '';
      
      const breedSeed = `${cat.name}-${i}`;
      const breed = BREEDS[hashStringToIndex(breedSeed, BREEDS.length)];
      return { ...cat, image, breed };
    });

    cacheByCount.set(count, cats);
    return cats;
  } catch (e) {
    const cats = items.map((cat, i) => ({ ...cat, image: '', breed: BREEDS[hashStringToIndex(`${cat.name}-${i}`, BREEDS.length)] }));
    cacheByCount.set(count, cats);
    return cats;
  }
}
