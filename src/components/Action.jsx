import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { fetchActionmovies } from '../store/index';

function Action() {

    const dispatch = useDispatch(); // 생성된 action의 state에 접근
    useEffect(()=>{
        dispatch(fetchActionmovies())
    })
    return (
        <div>
            
        </div>
    )
}

export default Action
