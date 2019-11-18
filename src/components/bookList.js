import React, { Component } from "react";
import BookItem from "./bookItem";

export default class BookList extends Component {
  render() {
    const books = this.props.state.searchResults.items || [];

    console.log(books);

    return books.map(book => {
      const { title, description, authors, imageLinks } = book.volumeInfo;
      const amount = book.saleInfo.listPrice?book.saleInfo.listPrice.amount:book.saleInfo.saleability;
      const bookId = book.id;
      console.log(amount);
      return (
        <section>
          <BookItem
          key={bookId} 
          title={title} 
          description={description} 
          author={authors}
          imageLinks={imageLinks}
          amount={amount}/>
        </section>
      );
    });

    
  }
}
