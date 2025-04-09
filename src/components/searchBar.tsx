"use client";
import { useState } from "react";
import { useWeather } from "@/context/WeatherContext";
import { useTheme } from "@/context/ThemeContext";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [city, setCity] = useState("");
  const { fetchWeather, loading, error, clearError } = useWeather();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim()) {
      await fetchWeather(city.trim());
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
        mt: 4,
        px: 2,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: isDark ? "#1a1a1a" : "#fff",
            color: isDark ? "#fff" : "#000",
            "& fieldset": {
              borderColor: isDark
                ? "rgba(255,255,255,0.23)"
                : "rgba(0,0,0,0.23)",
            },
            "&:hover fieldset": {
              borderColor: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
            },
            "&.Mui-focused fieldset": {
              borderColor: isDark ? "#90caf9" : "#1976d2",
            },
          },
          "& .MuiInputLabel-root": {
            color: isDark ? "#fff" : "#000",
          },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={loading || !city.trim()}
        sx={{
          minWidth: { xs: "100%", sm: "120px" },
          height: "56px",
          backgroundColor: isDark ? "#2d3748" : "#1976d2",
          color: isDark ? "#fff" : "#fff",
          "&:hover": {
            backgroundColor: isDark ? "#4a5568" : "#1565c0",
          },
        }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <>
            <SearchIcon sx={{ mr: 1 }} />
            Search
          </>
        )}
      </Button>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={clearError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={clearError}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default SearchBar;
