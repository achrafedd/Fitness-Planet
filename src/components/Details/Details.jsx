import React from "react";
import Ex1 from "../../assets/yoga-position.png";
import Ex2 from "../../assets/stretching-exercises.png";
import Ex3 from "../../assets/weightlifting.png";
import "./Details.css";

const Details = ({ exercise }) => {
    const { bodyPart, equipment, gifUrl, name, target } = exercise;

    return (
        <div className="app__details">
            <div className="container">
                <div className="gif">
                    <img src={gifUrl} alt={name} />
                </div>
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="desc">
                        Exercises keep you strong.{" "}
                        <span style={{ textTransform: "capitalize" }}>
                            {name}
                        </span>{" "}
                        bup is one of the best exercises to target your {target}
                        . It will help you improve your mood and gain energy.
                    </div>
                    <div className="body-part">
                        <img src={Ex1} alt="" />
                        {bodyPart}
                    </div>
                    <div className="target">
                        <img src={Ex2} alt="" />
                        {target}
                    </div>
                    <div className="equipment">
                        <img src={Ex3} alt="" />
                        {equipment}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
