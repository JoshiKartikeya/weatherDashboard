"use client";

import { useTheme } from "@/context/ThemeContext";
import { WeatherData } from "@/types/weather";
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

interface WeatherCardProps {
  weatherData: WeatherData;
  onRefresh: () => void;
}

const WeatherCard = ({ weatherData, onRefresh }: WeatherCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!weatherData) return null;

  const {
    name,
    main: { temp, humidity, feels_like },
    weather,
    wind,
    sys: { country },
  } = weatherData;

  const weatherIcon = weather[0]?.icon;
  const weatherDescription = weather[0]?.description;
  const weatherMain = weather[0]?.main;

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        maxWidth: 600,
        width: "100%",
        margin: "0 auto",
        mt: 4,
        background: isDark
          ? "linear-gradient(145deg, #1a1a1a 0%, #2d3748 100%)"
          : "linear-gradient(145deg, #ffffff 0%, #f7fafc 100%)",
        color: isDark ? "#fff" : "#000",
        borderRadius: 2,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        border: `1px solid ${isDark ? "#2d3748" : "#e2e8f0"}`,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h4" component="div">
            {name}, {country}
          </Typography>
          <Chip
            label={weatherMain}
            color="primary"
            sx={{
              backgroundColor: isDark ? "#2d3748" : "#e2e8f0",
              color: isDark ? "#fff" : "#1a202c",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt={weatherDescription}
            style={{ width: 80, height: 80 }}
          />
          <Typography variant="h2" component="div" sx={{ ml: 2 }}>
            {Math.round(temp)}°C
          </Typography>
          <Box sx={{ ml: "auto", textAlign: "right" }}>
            <Typography variant="body1" color="text.secondary">
              Feels like: {Math.round(feels_like)}°C
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textTransform: "capitalize" }}
            >
              {weatherDescription}
            </Typography>
          </Box>
        </Box>

        <Divider
          sx={{
            my: 2,
            backgroundColor: isDark
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          }}
        />

        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
          <Box
            sx={{
              flex: "1 1 calc(50% - 16px)",
              minWidth: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Humidity
            </Typography>
            <Typography variant="h6">{humidity}%</Typography>
          </Box>
          <Box
            sx={{
              flex: "1 1 calc(50% - 16px)",
              minWidth: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Wind Speed
            </Typography>
            <Typography variant="h6">{wind.speed} km/h</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Chip
            label="Refresh"
            onClick={onRefresh}
            sx={{
              cursor: "pointer",
              backgroundColor: isDark ? "#2d3748" : "#e2e8f0",
              color: isDark ? "#fff" : "#1a202c",
              "&:hover": {
                backgroundColor: isDark ? "#4a5568" : "#cbd5e0",
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
