import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home.component";
import Navbar from "./routes/Navbar/Navbar.component";
import SingIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
