import getHealth from '../health';

// test.each(table)(name,fn,timeout);

test.each([
  [{ name: 'маг', health: 13 }, 'critical'],
  [{ name: 'маг', health: 48 }, 'wounded'],
  [{ name: 'маг', health: 92 }, 'healthy'],
])('%o', (status, expected) => {
  const result = getHealth(status);
  expect(result).toBe(expected);
});
