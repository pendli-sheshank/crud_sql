import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialList from "./components/TutorialList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/tutorials" className="navbar-brand">
          CRUD
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Tutorials
            </Link>
          </li>
        </div>
      </nav>
      <Routes>
        <Route path="/tutorials" element={<TutorialList />} />
        <Route path="/add" element={<AddTutorial />} />
        <Route path="/tutorials/:id" element={<Tutorial />} />
      </Routes>
    </Router>
  );
}

export default App;
