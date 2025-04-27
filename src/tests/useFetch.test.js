import { renderHook, waitFor } from '@testing-library/react';
import useFetch from '../hooks/useFetch';

test('useFetch fetches data successfully', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ id: 1, title: 'Test' }),
    })
  );

  const { result } = renderHook(() => useFetch('https://example.com'));

  expect(result.current.loading).toBe(true);
  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.data).toEqual({ id: 1, title: 'Test' });
});