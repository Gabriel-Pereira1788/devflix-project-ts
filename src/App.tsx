import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./GlobalStyles";
//pages
import About from "./pages/About/About";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Movie from "./pages/Movie/Movie";
import Register from "./pages/Register/Register";
//context
import { useAuthContext } from "./contexts/AuthContext";
//components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CardUser from "./components/CardUser/CardUser";

function App() {
  const { user } = useAuthContext();

  const [cardUserOn, setCardUserOn] = useState<boolean>(false);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Container>
      <BrowserRouter>
        <NavBar setCardUserOn={setCardUserOn} />
        {cardUserOn && <CardUser setCardUserOn={setCardUserOn} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={user ? <Favorites /> : <Home />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
          <Route path="/register" element={!user ? <Register /> : <Home />} />
          <Route path="/movie:id" element={<Movie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;