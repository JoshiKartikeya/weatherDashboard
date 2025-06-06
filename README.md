<h1 align="center">Weather Dashboard</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
</p>

<p align="center">
  A modern weather dashboard application that provides real-time weather information using the OpenWeatherMap API.
</p>

<h2>Features</h2>
<ul>
  <li>Real-time weather data display</li>
  <li>Search for weather by city name</li>
  <li>Display of current conditions including temperature, humidity, and wind speed</li>
  <li>Responsive design for desktop and mobile devices</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li>Frontend: NEXT.JS , Tailwind CSS</li>
  <li>API: OpenWeatherMap API</li>
  <li>Environment Variables: .env file for configuration</li>
  <li>Responsive Design: Flexbox/CSS Grid</li>
  <li>Icons: Weather icons from OpenWeatherMap</li>
  <li>Local Storage: For saving user preferences</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/JoshiKartikeya/weatherdashboard.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd weatherdashboard</code></pre>
  </li>
  <li>Create a <code>.env</code> file with your OpenWeatherMap API key:
    <pre><code>OPENWEATHERMAP_API_KEY=your_api_key_here
OPENWEATHERMAP_BASE_URL=https://api.openweathermap.org/data/2.5</code></pre>
  </li>
  <li>Open <code>index.html</code> in your browser or set up a local server</li>
</ol>

<h2>API Integration Details</h2>
<p>This project uses the OpenWeatherMap API to fetch weather data. Here are important details about the integration:</p>

<ul>
  <li><strong>API Provider:</strong> OpenWeatherMap (https://openweathermap.org/)</li>
  <li><strong>Endpoints Used:</strong>
    <ul>
      <li>Current Weather: <code>/weather</code></li>
      <li>5-day Forecast: <code>/forecast</code></li>
    </ul>
  </li>
  <li><strong>Rate Limits:</strong>
    <ul>
      <li>Free tier: 60 calls per minute (1,000,000 calls per month)</li>
      <li>The application implements caching to minimize API calls</li>
    </ul>
  </li>
  <li><strong>API Key:</strong>
    <ul>
      <li>Required for all API calls</li>
      <li>Stored in <code>.env</code> file (not committed to version control)</li>
      <li>Sign up at OpenWeatherMap to get your own API key</li>
    </ul>
  </li>
  <li><strong>Data Format:</strong> JSON responses containing weather data</li>
  <li><strong>Units:</strong> Metric (Celsius) by default, can be changed to Imperial (Fahrenheit)</li>
</ul>

<h2>Usage</h2>
<p>Enter a city name in the search box and press Enter or click the search button to display current weather information for that location.</p>

<h2>Screenshots</h2>
<p align="center">
  <img src="path/to/screenshot.png" alt="Weather Dashboard Screenshot" width="600">
</p>

<h2>Acknowledgements</h2>
<ul>
  <li><a href="https://openweathermap.org/">OpenWeatherMap</a> for providing the weather data API</li>
</ul>
