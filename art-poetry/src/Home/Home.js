import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    return (
      <>
      <NavBar />
      <div className="home-div">
        <h1 className="title">Art and Poetry </h1>
        <p className="description">Description</p>
      </div>
      </>
    );
}

export default Home;