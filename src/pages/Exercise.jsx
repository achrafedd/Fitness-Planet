import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Details, Exercises, Footer, Header } from "../components";
import { useCallback } from "react";

const Exercise = () => {
    const [exercise, setExercise] = useState({});
    const [targetExersices, setTargetExercises] = useState([]);
    const [equipmentExersices, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    // Get Exercises by Target
    const getExercisesByTarget = useCallback(() => {
        const options = {
            method: "GET",
            url: `https://exercisedb.p.rapidapi.com/exercises/target/${exercise.target}`,
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_PUBLIC_KEY,
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
        };
        axios
            .request(options)
            .then(function (response) {
                setTargetExercises(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [exercise]);

    // Get Exercises by Equipment
    const getExercisesByEquipment = useCallback(() => {
        const options = {
            method: "GET",
            url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${exercise.equipment}`,
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_PUBLIC_KEY,
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
        };
        axios
            .request(options)
            .then(function (response) {
                setEquipmentExercises(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [exercise]);

    useEffect(() => {
        const options = {
            method: "GET",
            url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_PUBLIC_KEY,
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
        };
        axios
            .request(options)
            .then(function (response) {
                setExercise(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
        getExercisesByTarget();
        getExercisesByEquipment();
    }, [id, getExercisesByTarget, getExercisesByEquipment]);

    console.log(id);

    return (
        <>
            <Header />
            <main className="app__exercise">
                <Details exercise={exercise} />
                <Exercises
                    exercises={targetExersices}
                    title={"Similar Target Muscle Exersices"}
                />
                <Exercises
                    exercises={equipmentExersices}
                    title={"Similar Equipment Exersices"}
                />
            </main>
            <Footer />
        </>
    );
};

export default Exercise;
