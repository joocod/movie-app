import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styled/GlobalStyle';
import Main from './pages/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainVideos from './components/MainVideos';
import MovieList from './components/MovieList';
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import rootReducer from './store/reducer';
import { applyMiddleware, createStore, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main/>,
    errorElement : <NotFound/>,
    children : [
      // {path : ''}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <GlobalStyle/>
    {/* <Main/> */}
    <RouterProvider router={router}/>
    <MainVideos/>
    <Provider store={store}>
      <MovieList/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
