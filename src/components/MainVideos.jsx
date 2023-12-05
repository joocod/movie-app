import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import request from '../api/request';
import styled from 'styled-components';

function MainVideos() {

    const [movie, setMovie] = useState(null)        // 영화의 리스트가 있음을 반환
    const [videoKey, setVideoKey] = useState(null); // 영화 동영상을 연결할 아이디를 반환
    const [showimg, setShowimg] = useState(true)    // 맨 처음 썸네일 이미지를 보여줄 상태값

    useEffect(()=>{
        fetchData();
    }, [])

    useEffect(()=>{
        if(videoKey){
            changeVideo();
        }
    },[videoKey])

    const fetchData = async ()=>{
        // async : 비동기식으로 데이터에 접근하는 메소드(자주 사용)

        try{            
            const res = await axios.get(request.fetchNowPlaymovie)
            // console.log(res)
            // 어떤 오류가 발생하는지 정확하게 알기 위해 에러 표시 및 예외 처리
            const movieId = res.data.results[
                Math.floor(Math.random()* res.data.results.length)
            ].id;
            
            const {data : movieDetail} = await axios.get(`movie/${movieId}`, {
                params : {append_to_response : 'videos'},
            })
            if(movieDetail.videos && movieDetail.videos.results.length > 0){
                setMovie(movieDetail);
                setVideoKey(movieDetail.videos.results[0].key);

                setTimeout(()=>{
                    setShowimg(false)
                },2000)
            }
        }catch(error){
            console.error(error)
        }
    }

    const changeVideo = ()=>{
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoKey}?controls=0&autoplay=1&loop=1&mute=1&playlist=${videoKey}`;
        iframe.width = '100%';
        iframe.height = '100%';
        videoContainer.appendChild(iframe);
    }
    return (
        <>   
        {showimg && movie &&(
            <MainVideoimg img={movie.backdrop_path}/>
        )}  
            <MainVideoWrapper id='videoContainer'/>
        </>
    )
}

export default MainVideos;

const MainVideoimg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background: url(https://image.tmdb.org/t/p/original/${(props)=>props.img}) no-repeat center center / cover;
`

const MainVideoWrapper = styled.div`
    width: 100%;
    height: 100vh;
`
