import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./SearchPage.css";

export default function SearchPage() {
  



    const [searchResults, setSearchResults] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const searchTerm = query.get("q")
    console.log('searchTerm', searchTerm);
    

    useEffect(() => {
        if(searchTerm) {
            fetchSearchMovie(searchTerm);
        }
    }, [searchTerm]);


    const fetchSearchMovie = async (searchTerm) =>{
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            )
            console.log(request);
            setSearchResults(request.data.results);
        } catch(error){
            console.log("error", error);
        }
    }
   
    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className='search-container'>
                {searchResults.map((movie) => {
                    if(movie.backdrop_path !== null && movie.media_type !== "person") {
                        const movieImageUrl =
                        "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                        return(
                            <div className='movie'>
                                <div className='movie__column-poster'>
                                    <img 
                                    src={movieImageUrl}
                                    alt="movie"
                                    className='movie__poster'
                                    />
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
        ) : (
            <section className='no-results'>
                <div className='no-results__text'>
                    <p>
                        ??????????????? ????????? "{searchTerm}??? ?????? ????????? ????????????."
                    </p>
                </div>
            </section>
        )
    }
return renderSearchResults();
}
