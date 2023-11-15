const Book = (props)=>{
    const {image, name, author, ratings, price} = props.book;
    const handleBookClick = ()=>{
      alert(`'${name}' written by ${author}`);
    }
  
    // const handleSubmit=()=>{
    //   alert('Added to cart!')
    // }
    // console.log(props);
    return(
      <article className='book'>
        <img className='image' src={image} alt={name} onClick={handleBookClick}/>
        <h2 className='name' onClick={handleBookClick}>{name}</h2>
        <h3 className='author'>&#62; {author}</h3>
        <h5 className='rating'>Ratings: {ratings}</h5>
        <h4 className='price'>${price}</h4>
        {/* <button className='add-to-cart' onClick={handleSubmit}>Add to cart</button> */}
        {/* {children} */}
      </article>
    );
  }

  export default Book;