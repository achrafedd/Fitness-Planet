import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Api = (param) => {
    const [list, setList] = useState([]);
    const [exercises, setExercises] = useState([]);

    // Get Body Part List
    const getList = () => {
        const options = {
            method: "GET",
            url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_PUBLIC_KEY,
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
        };
        axios
            .request(options)
            .then(function (response) {
                setList(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    // Get Exercises from Body Part
    const getExercisesByCategory = useCallback(() => {
        const options = {
            method: "GET",
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${param.replace(
                " ",
                "%20"
            )}`,
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_PUBLIC_KEY,
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
        };
        axios
            .request(options)
            .then(function (response) {
                setExercises(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [param]);

    useEffect(() => {
        getList();
        getExercisesByCategory();
    }, [getExercisesByCategory]);

    return { list, exercises };
};

export default Api;
