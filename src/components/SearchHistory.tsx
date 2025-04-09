"use client";

import { useTheme } from "@/context/ThemeContext";
import { useWeather } from "@/context/WeatherContext";
import { Box, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";

const SearchHistory = () => {
  const { theme } = useTheme();
  const { searchHistory, fetchWeather } = useWeather();
  const isDark = theme === "dark";

  if (!searchHistory.length) return null;

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: isDark ? "#fff" : "#000",
          textAlign: "center",
        }}
      >
        Recent Searches
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {searchHistory.map((item) => (
          <Box
            key={item.id}
            sx={{ flex: "1 1 calc(20% - 16px)", minWidth: "200px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                onClick={() => fetchWeather(item.city)}
                sx={{
                  p: 2,
                  cursor: "pointer",
                  backgroundColor: isDark ? "#1a1a1a" : "#fff",
                  color: isDark ? "#fff" : "#000",
                  transition: "all 0.3s ease",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  background: isDark
                    ? "linear-gradient(145deg, #1a1a1a 0%, #2d3748 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f7fafc 100%)",
                  border: `1px solid ${isDark ? "#2d3748" : "#e2e8f0"}`,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {item.city}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 1,
                    color: isDark ? "#a0aec0" : "#718096",
                  }}
                >
                  {new Date(item.timestamp).toLocaleDateString()}
                </Typography>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SearchHistory;
