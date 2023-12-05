import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import request from '../api/request';

function MainVideos() {

    const [movie, setMovie] = useState(null)        // 영화의 리스트가 있음을 반환
    const [videoKey, setVideoKey] = useState(null); // 영화동영상을 연결할 아이디를 반환
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        // async : 비동기식으로 데이터에 접근하는 메소드(자주 사용)

        try{            
            const res = await axios.get(request.fetchNowPlaymovie)
            // console.log(res)
            // 어떤 오류가 발생하는지 정확하게 알기 위해 에러 표시 및 예외 처리
            const movieId = res.data.results[
                Math.floor(Math.random()* res.data.results.length)
            ].id
            // console.log(movieId)
        }catch(error){
            console.error(error)
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default MainVideos
