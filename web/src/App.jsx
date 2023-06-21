import "./App.css";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./context/context";
import { Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";
import axios from "axios";

import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Login from "./components/login";
import Signup from "./components/signup";
import Content from "./components/content/content";
import Add from "./components/add";
import Dashboard from "./components/Dashboard";

// const baseUrl = "http://localhost:5001/api/v1";

let baseUrl = "";
if (window.location.href.split(":")[0] === "http") {
  baseUrl = `http://localhost:5001`;
} else {
  baseUrl = `https://awful-lingerie-fox.cyclic.app/`;
}

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  let { state, dispatch } = useContext(GlobalContext);

  const [products, setProducts] = useState("");

  const logoutHandler = () => {};

  // const AddProduct=()=>{
  //   document.getElementById("main-add").style.visibility = "visible";
  // }

  useEffect(() => {
    // const baseUrl = "http://localhost:5001";

    const getProfile = async () => {
      try {
        let response = await axios.get(`${baseUrl}/api/v1/products`, {
          withCredentials: true,
        });

        console.log("response: ", response);
        setProducts(response.data.data.reverse());
        dispatch({
          type: "USER_LOGIN",
        });
      } catch (error) {
        console.log("axios error: ", error);

        dispatch({
          type: "USER_LOGOUT",
        });
      }
    };
    getProfile();
  }, []);

  return (
    <div>
      

      {state.isLogin === true ? <Dashboard /> : null}
      {state.isLogin === false ? (
        <div className="togglor">
          <ul className="navBar">
            <button className="btn togglor-login">
              <Link to={`/`}>Login</Link>
            </button>

            <button className="btn togglor-signup">
              <Link to={`/signup`}>Signup</Link>
            </button>
          </ul>
        </div>
      ) : null}

      {/* {state.isLogin === true ? (
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : null} */}
      {state.isLogin === false ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      ) : null}
      {state.isLogin === null ? (
        <div className="loader">
          <img
            src="https://i.pinimg.com/originals/49/e9/d6/49e9d662d2f99e8d945c8b21bd2cde85.gif"
            alt="...loading"
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;

