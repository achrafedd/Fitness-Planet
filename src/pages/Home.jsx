import React, { useContext } from "react";
import { Context } from "../App";
import { Banner, Categories, Exercises, Footer, Header } from "../components";

const Home = () => {
    const { list, exercises, setCategory } = useContext(Context);
    return (
        <>
            <Header />
            <Banner />
            <main className="app__home">
                <Categories categories={list} setCategory={setCategory} />
                <Exercises exercises={exercises} title={"Showing Results"} />
            </main>
            <Footer />
        </>
    );
};

export default Home;
