import React from 'react'
import { IoIosPlay } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { SlLike } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

function MovieCard({movie}) {
    const {title, backdrop_path, genredId} = movie;
    return (
        <MovieItem>
            <img src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}/>
            <Content className="addi-content">
                <p>{title}</p>
                <div className='btn-wrapper'>
                    <button className='btn1'><IoIosPlay /></button>
                    <button className='btn2'><LuPlus /></button>
                    <button className='btn3'><SlLike /></button>
                    <button className='btn4'><IoIosArrowDown /></button>
                </div>
                <div className='genres-wrapper'>
                    {genredId.map((el)=>(
                        <span key={el}>{genredId[el]}</span>
                    ))}
                </div>
            </Content>
        </MovieItem> 
    )
}

export default MovieCard
