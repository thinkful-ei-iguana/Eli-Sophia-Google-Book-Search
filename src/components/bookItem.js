import React, { Component } from "react";

export default class BookItem extends Component {
    render () {
        return (
        <section>
            <h3 className="book-title"></h3>
            <p className="author-title">Author:</p>
            <p className="price-tag">Price:</p>
            <p className="description"></p>
            <img src="" alt="book-img"/>
        </section>
        );
    }
}