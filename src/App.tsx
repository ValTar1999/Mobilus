import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Nav/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-4xl font-bold">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
