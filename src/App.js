import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./page/Home";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import Login from "./page/Login";
import { fetchUserByLocalToken } from "./utils/checkUserByToken";
import { Modal } from "@mui/material";
import PageLoader from "./page/PageLoader";

function App() {
  const { pageLoader } = useSelector((state) => state.linkedinReducer);
  const dispatch = useDispatch();
  let [searchedUser, setSearchedUser] = useState([]);
  const navigate = useNavigate();

  // search for current logged user with local token
  useEffect(() => {
    dispatch({
      type: "setPageLoader",
      payload: true,
    });
    fetchUserByLocalToken(
      query,
      collection,
      where,
      getDocs,
      db,
      searchedUser,
      setSearchedUser,
      navigate,
      dispatch
    );

    // eslint-disable-next-line
  }, [navigate]);

  // dispatching the current logged user
  useEffect(() => {
    dispatch({
      type: "setUser",
      payload: searchedUser[0],
    });
  }, [searchedUser, dispatch]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login/" element={<Login />} />
      </Routes>
      <Modal
        open={
          pageLoader === "none" ? false : pageLoader === "app" ? true : false
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <PageLoader title="user data is fetching right now......." />
        </div>
      </Modal>
    </>
  );
}

export default App;
