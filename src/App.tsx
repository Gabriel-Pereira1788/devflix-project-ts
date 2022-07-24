import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "./GlobalStyles";
//pages
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Series from "./pages/Series/Series";
import Login from "./pages/Login/Login";
import SingleMedia from "./pages/SingleMedia/SingleMedia";
import Register from "./pages/Register/Register";
//context
import { useAuthContext } from "./contexts/AuthContext";
//components
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/MenuToggle/Menu";
//components
import Loading from "./components/Loading/Loading";
import ModalUser from "./components/ModalUser/ModalUser";
function App() {
  const { user } = useAuthContext();
  const [modalUserOn, setModalUserOn] = useState<boolean>(false);
  const [menuToggleOn, setMenuToggleOn] = useState<boolean>(false);
  const loadingUser: boolean = user === undefined;

  if (loadingUser) {
    return <Loading />;
  }
  return (
    <Container FlexContent="space-between">
      <HashRouter>
        <NavBar
          setModalUserOn={setModalUserOn}
          setMenuToggleOn={setMenuToggleOn}
        />
        {menuToggleOn && <Menu setMenuToggleOn={setMenuToggleOn} />}
        {modalUserOn && <ModalUser setModalUserOn={setModalUserOn} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/:media/:id"
            element={user ? <SingleMedia /> : <Navigate to="/login" />}
          />
        </Routes>
      </HashRouter>
    </Container>
  );
}

export default App;
