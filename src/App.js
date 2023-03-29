import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import Navbar from "./routes/Navbar/Navbar.component";
import Authantication from "./routes/authentication/authantication.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authantication />} />
      </Route>
    </Routes>
  );
};

export default App;
