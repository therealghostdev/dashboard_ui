import "./index.css";
import Index from "./pages/landing_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Index />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
