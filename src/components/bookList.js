import React, { Component } from "react";
import BookItem from "./bookItem";

export default class BookList extends Component {
  render() {
    const books = this.props.state.searchResults.items;
    console.log(books);

    if (books)
      books.map(book => {
        const title = book;
      });

    return (
      <section>
        <BookItem />
      </section>
    );
  }
}
