import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Moviedetail from './pages/Moviedetail';
/*
  - import시 {} 사용 / 미사용
  - 기능을 내보내기 하는 방법에 따라 차이가 발생

  - {}가 없는 import는 export default로 내보내기된 컴포넌트를 import
  - {}를 사용해서 가져올 때에는 default 값이 아닌 하나의 컴포넌트에
    여러 개의 export가 되어있는 경우 각각 가져오기 위해 사용
*/

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <NotFound/>,
    children : []
    },
  {
    path : 'movie/:movieId',  // : -> 변수 값
    element : <Moviedetail/>  // moviedetail 페이지 열기
  }     
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
