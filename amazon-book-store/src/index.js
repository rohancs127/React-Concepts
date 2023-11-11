import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Page = ()=>{
  return(
    <section className='page'>
    <Header/>
    <BookList/>
    </section>
  )
}

const Header = ()=>{
  return(
    <div className='header'>
      <h1 className='title'>Amazon Best Sellers</h1>
      <p className='subtitle'>Our most popular products based on sales. Updated frequently.</p>
    </div>
  )
}

const BookList = ()=>{
  return(
    <section className='book-list'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = ()=>{
  return(
    <article className='book'>
      <Image/>
      <Name/>
      <Author/>
      <Rating/>
      <Price/>
    </article>
  );
}

  const Image = ()=> <img className='image' src='https://m.media-amazon.com/images/I/31kNMP-6n8L._SY445_SX342_.jpg' alt='The Woman in Me' />
  const Name = ()=> <h2 className='name'>The Woman in Me</h2>
  const Author = ()=> <h3 className='author'>&#62; Britney Spears</h3>
  const Rating = ()=> <h5 className='rating'>Ratings: 4.5</h5>
  const Price = ()=> <h4 className='price'>$16.99</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);

