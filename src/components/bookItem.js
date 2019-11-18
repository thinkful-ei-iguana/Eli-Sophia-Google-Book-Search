import React, { Component } from "react";

export default class BookItem extends Component {
  render() {
    return ( <section>
      <h3 className="book-title">{this.props.title}</h3>
      <p className="author-title">Author: {this.props.authors}</p>
      <p className="price-tag">Price: {this.props.amount}</p>
      <p className="description">{this.props.description}</p>
      <img src={this.props.imageLinks.smallThumbnail} alt={`book cover of ${ this.props.title }`}/>
    </section> );
  }
}
