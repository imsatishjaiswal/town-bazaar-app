import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
// import Dashboard from "./components/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Router>
      <nav className="flex gap-6 p-6 bg-white border-b shadow-sm">
        <Link className="hover:text-blue-500 font-medium px-4 pi-15" to="/">
          Home
        </Link>
        <Link
          className="hover:text-blue-500 font-medium px-4 pi-15"
          to="/details"
        >
          Details
        </Link>
        <Link
          className="hover:text-blue-500 font-medium px-4 pi-15 text-red-500"
          to="/dashboard"
        >
          Dashboard 🔒
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
