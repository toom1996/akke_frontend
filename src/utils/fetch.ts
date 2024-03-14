// utils/fetch.ts
export async function fetchData<T>(url: string, options: RequestInit = {}): Promise<T | null> {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  