// import React from "react";
// import { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
// import './App.css';
// import SearchIcon from './search.svg'

import Child from "./Child"
import { useState } from "react"
import Speakers from "./pages/Speakers"
import { AuthProvider } from "./Context/AuthContext"

// //a42ee272

// const API_URL = 'http://www.omdbapi.com?apikey=a42ee272'



const App = () =>{
    // const [movies, setMovies] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('')


    // //function that helps us to get the movies
    // const searchMovies = async (title)=>{
    //     const response = await fetch(`${API_URL}&s=${title}`)
    //     const data = await response.json();

    //     setMovies(data.Search )
    // }

    // //This loads the data as soon as the component loads
    // useEffect(()=>{
    //     searchMovies('Spiderman');
    // },[]);
    // return (
    //     <div className="app">
    //         <h1>MovieLand</h1>

    //         <div className="search">
    //             <input 
    //                 placeholder="Search for movies"
    //                 value={searchTerm}
    //                 onChange={(e)=>{setSearchTerm(e.target.value)}}
    
                     
    //             />
    //             <img 
    //                 src={SearchIcon} 
    //                 alt="search"
    //                 onClick={()=>{searchMovies(searchTerm)}}
                
    //             />

    //         </div>
    //         {
    //             movies.length>0 ?(
    //                 <div className="container">
    //                     {movies.map((movie)=>(
    //                         <MovieCard movie={movie}/> 
    //                     ))}
    //                 </div>
    //             ) : (
    //                 <div className="empty">
    //                     <h2>No movies found</h2>
    //                 </div>
    //             )
    //         }



    //     </div>
    // )
    const [dataFromChild, setDataFromChild] = useState("")
    return(
        <AuthProvider initialLoggedInUser="Anita">
            <div>
                {/* <p>Child data: {dataFromChild}</p>
                <Child childData={setDataFromChild}/> */}
                <Speakers/>
            </div>
        </AuthProvider>

    )
}

export default App