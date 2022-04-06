import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/Header"
import Logo from "./components/Logo";

function App() {
  return (
    <div className="container">
      <Logo/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
