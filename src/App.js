import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Trending from "./pages/Trending";
import { UidContext } from './components/Log/AppContext';
import axios from 'axios'
import NavBar from './components/NavBar';
// ;
const App = () => {
  const [uid, setUid] = useState(null);
  // const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        // .catch((err) => console.log("No token"));
    };
    fetchToken()}, []);

    // if (uid) {
    //   dispatch(getUser(uid));
    // }
  
  return (
    <UidContext.Provider value={uid}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
     </UidContext.Provider>
  );
};

export default App;
