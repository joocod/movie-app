import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchComedymovies } from '../store';
import styled from 'styled-components';
import '../styled/swiperCustom.css';
import Overview from './Overview';

// swiper
// yarn add swiper 설치
import {Swiper, SwiperSlide} from 'swiper/react';           // swiper 적용 import
import { Navigation, Pagination } from 'swiper/modules';    // swiper 모듈 import

import 'swiper/css';                // swiper 기본 css 적용 import
import 'swiper/css/navigation';     // swiper 좌우 버튼 기본 css
import 'swiper/css/pagination';     // swiper dot-list 기본 css    


function Action() {

    const [isClick, setIsclick] = useState(false);
    const dispatch = useDispatch(); // 생성된 action의 state에 접근
    useEffect(()=>{
        dispatch(fetchComedymovies())
    }, [])

    const actionData = useSelector((state)=>state.action.movies, []) || []
    console.log(actionData.results)

    const overviewEvent = (el)=>{
        setIsclick(el);
    }

    const overviewClose = ()=>{
        setIsclick(false);
    }
    return (
        <div>
            <MovieContainer>
                <MovieTitle>코미디</MovieTitle>
                <Swiper 
                    spaceBetween={10}   // 슬라이드와 슬라이드 사이 여백(gap);
                    slidesPerView={5}   // 한번에 보여질 슬라이드 아이템의 갯수
                    slidesPerGroup={5}  // 슬라이드 이동 시 한번에 움직일 슬라이드 아이템의 갯수
                    loop                // 무한반복
                    modules={[Navigation, Pagination]}  // 모듈 적용
                    navigation          // 모듈 실제 적용
                    pagination          // 모듈 실제 적용
                >
                    <MovieWrapper>
                        {actionData.results && actionData.results.map((el,index)=>(
                            <SwiperSlide>
                                <MovieItem onClick={()=>overviewEvent(el,index)}>
                                    <img src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}/>
                                </MovieItem>
                            </SwiperSlide>
                        ))}
                    </MovieWrapper>
                </Swiper>
            </MovieContainer>
            {isClick && <Overview movie={isClick} setIsClick={overviewClose}/>}
        </div>
    )
}

export default Action

const MovieContainer = styled.div`
    margin-bottom: 50px;
    position: relative;
    box-sizing: border-box;
`
const MovieTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
`

const MovieWrapper = styled.div`
    height: 200px;
`

const MovieItem = styled.div`
    img{
        display: block;
        width: 100%;
    }
`