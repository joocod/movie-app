import React from 'react';
import styled from 'styled-components';
import { MdClose } from "react-icons/md";

function Overview({movie, setIsClick}) {
    return (
      <HoverContainer className='overview'>
        <HoverWrapper>
          <CloseBtn onClick={()=>setIsClick(false)}>
            <MdClose />
          </CloseBtn>  
          {/* <Link to={}> */}
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
        <HoverText>
          <h2>{movie.title}</h2>
        </HoverText>
        </HoverWrapper>
      </HoverContainer>
    )
}

export default Overview

const HoverContainer = styled.div`
  width: 100vw;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HoverWrapper = styled.div`
  max-width: 50%;
  background: gray;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`
const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: black;
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 30px;
    height: 30px;
    path{
      color: #fff;
    }
  }
`

const HoverText = styled.div`
  padding: 30px;
  box-sizing: border-box;
  height: auto;
  width: 100%;
  background: gray;
`