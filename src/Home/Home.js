import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";

const Home = () => {
    return (
      <>
      <NavBar />
      <div className="home-div">
        <h1 className="title">Art and Poetry </h1>
        <p className="description">Welcome! Click on New Artwork to get started, or check the gallery for your saved images and poems. Thank you to the Cleveland Museum of Art and those who maintain their API for providing the public with such wonderful free and limitless information.</p>
      </div>
      </>
    );
}

export default Home;