import { SearchHistory } from '@/types/weather';

const STORAGE_KEY = 'weatherSearchHistory';
const MAX_HISTORY_ITEMS = 5;

export const getSearchHistory = (): SearchHistory[] => {
  if (typeof window === 'undefined') return [];

  const storedHistory = localStorage.getItem(STORAGE_KEY);
  if (!storedHistory) return [];

  try {
    return JSON.parse(storedHistory);
  } catch (error) {
    console.error('Error parsing search history:', error);
    return [];
  }
};

export const addToSearchHistory = (city: string): SearchHistory[] => {
  if (typeof window === 'undefined') return [];

  const history = getSearchHistory();

  // Check if city already exists in history
  const existingIndex = history.findIndex(item => item.city.toLowerCase() === city.toLowerCase());

  // If exists, remove it (to add it again at the top)
  if (existingIndex !== -1) {
    history.splice(existingIndex, 1);
  }

  // Add new search to the beginning of the array
  const newHistory = [
    { id: Date.now().toString(), city, timestamp: Date.now() },
    ...history
  ].slice(0, MAX_HISTORY_ITEMS); // Keep only the most recent searches

  // Save to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));

  return newHistory;
};

export const clearSearchHistory = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
};