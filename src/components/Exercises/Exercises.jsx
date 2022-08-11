import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Exercises.css";
import Pagination from "./Pagination/Pagination";

const Exercises = ({ exercises, title }) => {
    const [currentExercises, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + 6;
        setCurrentItems(exercises.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(exercises.length / 6));
    }, [itemOffset, exercises]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 6) % exercises.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="app__exercises" id="exercises">
            <div className="container">
                <h3 className="app__exercises-title">{title}</h3>
                <div className="app__exercises-result">
                    {currentExercises.map((exercise) => (
                        <div key={exercise.id} className="app__exercises-item">
                            <Link to={`/exercise/${exercise.id}`}>
                                <div className="gif">
                                    <img
                                        src={exercise.gifUrl}
                                        alt={exercise.name}
                                    />
                                </div>
                                <div className="body">
                                    <div className="body-part">
                                        {exercise.bodyPart}
                                    </div>
                                    <div className="target">
                                        {exercise.target}
                                    </div>
                                </div>
                                <div className="name">{exercise.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Pagination
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                />
            </div>
        </div>
    );
};

export default Exercises;
