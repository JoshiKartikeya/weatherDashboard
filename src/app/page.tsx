"use client";

import SearchBar from "@/components/searchBar";
import WeatherCard from "@/components/WeatherCard";
import SearchHistory from "@/components/SearchHistory";
import { useWeather } from "@/context/WeatherContext";
import { useTheme } from "@/context/ThemeContext";
import { Box, Container, CircularProgress } from "@mui/material";

export default function Home() {
  const { weatherData, loading, refreshWeather } = useWeather();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: isDark ? "#121212" : "#f8fafc",
          transition: "background-color 0.3s ease",
        }}
      >
        <SearchBar />
        {loading && !weatherData && (
          <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
        {weatherData && (
          <WeatherCard weatherData={weatherData} onRefresh={refreshWeather} />
        )}
        <SearchHistory />
      </Box>
    </Container>
  );
}
