import { TextField } from "@mui/material";
import React from "react";

function SearchUser(){

    const [news, setNews] = React.useState([]);
    let [searchText, setSearchText] = React.useState("");
    let[loading, setLoading] = React.useState(false);

    const searchUser = async ()=>{
        const NEWS_API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86d91b762658476ba48f97618621c598"
        const res = await fetch(NEWS_API);
        const data = await res.json();
        setNews(data.articles);

    }

    return (
        <div>
            <h3>Search User</h3>
            <TextField fullWidth label="Search News by Title"
            value={searchText}
            margin="normal"
            />

            <button onClick={searchUser}>Search</button>
            {
                news.map((item)=>{
                    return(
                        <div>{item.title}</div>
                    );
                })
            }
        </div>
    )
}

export default SearchUser;