import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Weather from './components/Weather';
import Students from './components/Students';
import News from './components/News';
import StudentDetail from './components/StudentDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav style={{ marginBottom: 20, 
                      display: "flex",
                      gap: "20px",
                      padding: "10px 0",
                      backgroundColor: "#3f64ccff",
                      fontSize: "18px",
                      boxShadow: "0 2px 5px rgba(13, 196, 68, 0.1)" }}>
          <Link to="/weather" style={{ color: "#fff", textDecoration: "none", marginLeft: "20px" }}>Bài 1</Link> 
          <Link to="/students" style={{ color: "#fff", textDecoration: "none" }}>Bài 2</Link> 
          <Link to="/news" style={{ color: "#fff", textDecoration: "none" }}>Bài 3</Link>
        </nav>

        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/students" element={<Students />} />
          <Route path="/news" element={<News />} />
          <Route path="/students/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
