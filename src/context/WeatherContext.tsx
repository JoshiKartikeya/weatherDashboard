"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { WeatherData, ForecastData, SearchHistory } from "@/types/weather";
import { fetchWeatherData, fetchForecastData } from "@/utils/api";
import { addToSearchHistory, getSearchHistory } from "@/utils/searchHistory";

interface WeatherContextType {
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  searchHistory: SearchHistory[];
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
  refreshWeather: () => Promise<void>;
  clearError: () => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>(() =>
    getSearchHistory()
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<string>("");

  const fetchWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const weather = await fetchWeatherData(city);
      const forecast = await fetchForecastData(city);

      setWeatherData(weather);
      setForecastData(forecast);
      setCurrentCity(city);

      // Update search history
      const updatedHistory = addToSearchHistory(city);
      setSearchHistory(updatedHistory);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch weather data"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshWeather = useCallback(async () => {
    if (currentCity) {
      await fetchWeather(currentCity);
    }
  }, [currentCity, fetchWeather]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastData,
        searchHistory,
        loading,
        error,
        fetchWeather,
        refreshWeather,
        clearError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
}
