import React, { useState, useRef } from "react";
import { IoIosFitness } from "react-icons/io";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./Categories.css";

const Categories = ({ categories, setCategory }) => {
    const [index, setIndex] = useState(0);
    const list = useRef();
    const nextBtn = useRef();
    const prevBtn = useRef();
    let last = 0;

    const next = () => {
        if (last < 2520) {
            last += 280;
            setTimeout(() => {
                list.current.style.transform = `translateX(-${last}px)`;
                prevBtn.current.style.opacity = "1";
            }, 0);
        } else {
            nextBtn.current.style.opacity = "0.7";
        }
    };

    const prev = () => {
        if (last > 0) {
            console.log("Prev");
            last -= 280;
            list.current.style.transform = `translateX(-${last}px)`;
            nextBtn.current.style.opacity = "1";
        } else {
            prevBtn.current.style.opacity = "0.7";
        }
    };

    return (
        <div className="app__categories" id="categories">
            <div className="container">
                <h3 className="app__categories-title">
                    Awesome Exercises You <br /> Should Know
                </h3>
                <div className="app__categories-search">
                    <input type="search" placeholder="Search Exercises" />
                    <button type="submit">Search</button>
                </div>
                <div className="app__categories-slider">
                    <div ref={list} className="app__categories-list">
                        {categories.map((category, i) => (
                            <div
                                onClick={() => {
                                    setIndex(i);
                                    setCategory(category);
                                }}
                                key={i}
                                className={
                                    i === index
                                        ? "app__categories-item active"
                                        : "app__categories-item"
                                }
                            >
                                <div className="icon">
                                    <IoIosFitness />
                                </div>
                                <div className="name">{category}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="app__categories-btns">
                    <div ref={prevBtn} onClick={prev} className="btn">
                        <BsArrowLeft />
                    </div>
                    <div ref={nextBtn} onClick={next} className="btn">
                        <BsArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
