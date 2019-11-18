import React, { Component } from "react";
import BookItem from "./bookItem";

export default class BookList extends Component {
  render() {
    const books = this.props.state.searchResults.items || [];

    console.log(books);

    books.map(book => {
      const { title, description, authors } = book.volumeInfo;
    });

    return (
      <section>
        <BookItem />
      </section>
    );
  }
}
