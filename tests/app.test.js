const request = require('supertest');
const app = require('../src/app');

describe('Node.js API Tests', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Welcome to the Node.js API!');
  });

  it('should create a new task', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Test Task' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test Task');
  });

  it('should return all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });

  it('should return 400 if title is not provided', async () => {
    const res = await request(app).post('/tasks').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Title is required');
  });
});
