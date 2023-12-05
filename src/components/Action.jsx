import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchActionmovies } from '../store/Index';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';   // swiper 적용 import
import 'swiper/css';    // swiper 기본 css 적용 import

// swiper
// yarn add swiper 설치

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
                <Swiper 
                    spaceBetween={10}   // 슬라이드와 슬라이드 사이 여백(gap);
                    slidesPerView={5}   // 한번에 보여질 슬라이드 아이템의 갯수
                    slidesPerGroup={5}  // 슬라이드 이동 시 한번에 움직일 슬라이드 아이템의 갯수
                    loop                // 무한반복
                >
                    <MovieWrapper>
                        {actionData.results && actionData.results.map((el,index)=>(
                            <SwiperSlide>
                                <MovieItem>
                                    <img src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}/>
                                </MovieItem>
                            </SwiperSlide>
                        ))}
                    </MovieWrapper>
                </Swiper>
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