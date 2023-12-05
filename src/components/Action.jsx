import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchActionmovies } from '../store/Index';
import styled from 'styled-components';

// swiper

function Action() {

    const dispatch = useDispatch(); // 생성된 action의 state에 접근
    useEffect(()=>{
        dispatch(fetchActionmovies())
    })

    const actionData = useSelector((state)=>state.action.movies,[]) || []
    return (
        <div>
            <MovieContainer>
                <MovieTitle>액션</MovieTitle>
                <MovieWrapper>
                    {actionData.results && actionData.results.map((el,index)=>(
                        <MovieItem>
                            <img src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}/>
                        </MovieItem>
                    ))}
                </MovieWrapper>
            </MovieContainer>
        </div>
    )
}

export default Action

const MovieContainer = styled.div`
    margin-bottom: 50px;
    position: relative;
`
const MovieTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
`

const MovieWrapper = styled.div`
    display: flex;
    gap: 30px;
    height: 200px;
`

const MovieItem = styled.div`
    img{
        display: block;
        max-width: 300px;
    }
`