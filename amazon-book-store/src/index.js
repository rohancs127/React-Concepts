import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookList from './BookList';
import Header from './Header';

const Page = ()=>{
  return(
    <section className='page'>
    <Header/>
    <BookList/>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);

