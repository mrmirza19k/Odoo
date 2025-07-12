import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import PublicProfile from './screens/PublicProfile';
import SwapRequests from './screens/SwapRequests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<PublicProfile />} />
        <Route path="/swaps" element={<SwapRequests />} />
      </Routes>
    </Router>
  );
}

export default App;
