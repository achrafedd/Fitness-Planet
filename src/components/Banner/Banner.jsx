import React from "react";
import Hero from "../../assets/character.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="app__banner">
            <div className="container">
                <div className="app__banner-content">
                    <h1>Fitness Planet</h1>
                    <h2>
                        Sweat, Smile <br />
                        And Repeat
                    </h2>
                    <p>
                        Check out the most effective exercises personalized to
                        you
                    </p>
                    <a href="#exercises">Exeplore Exercises</a>
                    <div className="layer">EXERCISES</div>
                </div>
                <div className="app__banner-image">
                    <img src={Hero} alt="Hero" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
