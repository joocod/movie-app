import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchActionmovies } from '../store/index';

function Action() {

    const dispatch = useDispatch(); // 생성된 action의 state에 접근
    useEffect(()=>{
        dispatch(fetchActionmovies())
    })

    const actionData = useSelector((state)=>state.action.movies,[]) || []
    return (
        <div>
            
        </div>
    )
}

export default Action
