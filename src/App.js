import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Registration from './pages/Registration/index';
import Home from './pages/Home/index';
import Login from './pages/Login/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
