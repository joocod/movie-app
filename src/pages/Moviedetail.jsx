import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Moviedetail() {

    // 경로를 구성하는 url에서 값 추출
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(`/movie/${movieId}`);
            setMovie(request.data);
        }
        fetchdata()
    }, [movieId])
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
        </div>
    )
}

export default Moviedetail
