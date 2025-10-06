import React, { useState } from 'react';
import axios from 'axios';

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
      setError('');
    } catch {
      setError('Không tìm thấy thông tin thời tiết!');
      setWeather(null);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Thời Tiết</h2>
      <input 
        style={{ padding: "10px", marginRight: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "250px" }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố..."
      />
      <button onClick={fetchWeather} style={{ color: "#fff", 
                                            backgroundColor: "#3f64ccff", 
                                            border: "none", padding: "10px 15px", 
                                            borderRadius: "5px", 
                                            cursor: "pointer" }}
                                        > Xem </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h3>{city}</h3>
          <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Độ ẩm: {weather.current_condition[0].humidity}%</p>
          <p>Thời tiết: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
