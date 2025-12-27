export async function fetchCatImages(list, signal) {
  const placeholder = 'https://via.placeholder.com/400x300?text=No+Image';

  async function fetchWithRetry(url, opts = {}, retries = 2, delay = 500) {
    try {
      const res = await fetch(url, opts);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    } catch (err) {
      if (opts.signal && opts.signal.aborted) throw err;
      if (retries > 0) {
        await new Promise((r) => setTimeout(r, delay));
        return fetchWithRetry(url, opts, retries - 1, Math.round(delay * 1.5));
      }
      throw err;
    }
  }

  const responses = await Promise.all(
    list.map(() =>
      fetchWithRetry('https://api.thecatapi.com/v1/images/search', { signal }).catch(
        () => null
      )
    )
  );

  return list.map((cat, index) => ({
    ...cat,
    image:
      responses[index] && responses[index][0] && responses[index][0].url
        ? responses[index][0].url
        : placeholder,
  }));
}
