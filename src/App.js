import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Api from "./API/Api";
import Exercise from "./pages/Exercise";
import "./App.css";

export const Context = createContext();

const App = () => {
    const [category, setCategory] = useState("back");
    const { list, exercises, tergetExercises } = Api(category);
    return (
        <Context.Provider
            value={{ list, exercises, setCategory, tergetExercises }}
        >
            <div className="app">
                <BrowserRouter>
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/exercise/:id"
                                element={<Exercise />}
                            />
                        </Routes>
                    </ScrollToTop>
                </BrowserRouter>
            </div>
        </Context.Provider>
    );
};

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
};

export default App;
