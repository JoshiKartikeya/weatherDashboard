import type { Metadata } from "next";
import "./globals.css";
import { WeatherProvider } from "@/context/WeatherContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Weather Dashboard",
  description: "A modern weather dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <WeatherProvider>{children}</WeatherProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
