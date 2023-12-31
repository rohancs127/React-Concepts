import books from './books';
import Book from './Book';

const BookList = ()=>{
    // const getBook=(id)=>{
    //   const book = books.find((book)=> book.id===id)
    //   console.log(book);
    // }
    return(
      <section className='book-list'>
        {/* <Book image = {book1.img} name= {book1.name} author= {book1.author} ratings = {book1.ratings} price = {book1.price}>
          <button>Child button</button>
        </Book> */}
  
        {/* <Book image = {book1.img} name= {book1.name} author= {book1.author} ratings = {book1.ratings} price = {book1.price}/>
  
        <Book image = {book2.img} name= {book2.name} author= {book2.author} ratings = {book2.ratings} price = {book2.price}/>
  
        <Book image = {book3.img} name= {book3.name} author= {book3.author} ratings = {book3.ratings} price = {book3.price}/>
  
        <Book image = {book4.img} name= {book4.name} author= {book4.author} ratings = {book4.ratings} price = {book4.price}/>
  
        <Book image = {book5.img} name= {book5.name} author= {book5.author} ratings = {book5.ratings} price = {book5.price}/>
  
        <Book image = {book6.img} name= {book6.name} author= {book6.author} ratings = {book6.ratings} price = {book6.price}/>
  
        <Book image = {book7.img} name= {book7.name} author= {book7.author} ratings = {book7.ratings} price = {book7.price}/>
  
        <Book image = {book8.img} name= {book8.name} author= {book8.author} ratings = {book8.ratings} price = {book8.price}/>
  
        <Book image = {book9.img} name= {book9.name} author= {book9.author} ratings = {book9.ratings} price = {book9.price}/>
  
        <Book image = {book10.img} name= {book10.name} author= {book10.author} ratings = {book10.ratings} price = {book10.price}/>
  
        <Book image = {book11.img} name= {book11.name} author= {book11.author} ratings = {book11.ratings} price = {book11.price}/>
  
        <Book image = {book12.img} name= {book12.name} author= {book12.author} ratings = {book12.ratings} price = {book12.price}/> */}
  
        {
          books.map((book, index)=>{
            return(
              <Book book={book} key={book.id} rank = {index} />
            )
          })
        }
  
      </section>
    )
  }
  
export default BookList;  