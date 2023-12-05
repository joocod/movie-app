import axios from "axios";

export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';

const API_KEY = '82776dd4e021405937c471b1f995902b';
const BASE_URL = 'https://api.themoviedb.org/3';

// 액션
export const fetchActiondata = (data)=>{
    return {
        type : FETCH_ACTION_MOVIES,
        data
    }
}

export const fetchActionmovies = ()=>{
    return(dispatch)=>{
        // dispatch : 외부에서 데이터를 가져올 때 사용하는 reducer 기능
        // useState의 대체

        return axios.get(`${BASE_URL}/discover`)
    }
}