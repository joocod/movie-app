import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import {styled} from 'styled-components';
import '../styled/swiperCustom.css';
import { MdClear } from "react-icons/md";

function Search() {
    const [text, setText] = useState('')    // 검색어의 상태 state
    const [visible, setVisible] = useState(false);  // input창의 기본 속성값 지정
    const [showClearBtn, setshowClearBtn] = useState('')
    // 검색어의 입력 여부를 보기 위해서 만든 상태 변수 state

    const onToggleEvent = (e)=>{
        e.preventDefault();
        setVisible((prev)=>!prev)       // true -> false / false -> true
    }

    const onClear = (e)=>{
        e.preventDefault();
        setText('');
        setshowClearBtn(false)
    }
    return (
        <>
            <SearchForm visible={`${visible}`} className={visible ? 'on' : null}>
                {/* 리액트에서의 null은 값을 비운다는 의미이기도 하다. */}
                <button className='search-btn' onClick={onToggleEvent}><BiSearch/></button>
                {visible &&(
                    <input type='text' 
                    placeholder='검색어를 입력하세요'
                    value={text}
                    onChange={(e)=>{
                        setText(e.target.value)
                        setshowClearBtn(e.target.value.trim()!=='')
                    }}>
                    </input>
                )}
                {showClearBtn && (
                    <button className='clear-btn' onClick={onClear}><MdClear /></button>
                )}

            </SearchForm>
        </>
    )
}

export default Search

const SearchForm = styled.form`
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    transition: 500ms;
    width: 30px;
    &.on{
        border: solid 1px #ffffff;
        transition: 500ms;
        width: 240px;
        border-radius: 4px;
    }
    .search-btn{
        color: #ffffff;
        font-size: 30px;
        display: flex;
        align-items: center;
    }
    input{
        width: ${({visible})=>(visible ? '200px' :'0px')};
        color: #fff;
        opacity: ${({visible})=>(visible ? 1 : 0)};
        transition: opacity 500ms;
    }
    .clear-btn{
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        font-size: 24px;
        display: flex;
        align-items: center;
    }
`