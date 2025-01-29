import Counter from "../counter/counter";
import FetchApi from "../pages/FetchApi";
import React from "react";
import SearchUser from "../pages/SearchUser";

function Home(){
    // return (
    //     <div>
    //     <h1> Welcome to Home Page!! </h1>
    //     <Counter/>
    //     </div>
    // )
    return (
        <div>
        Welcome to Home
            <Counter/>
            <FetchApi/>
            <SearchUser/>
        </div>

    )
}

export default Home;
