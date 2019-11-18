import React, { Component } from "react";
import BookItem from './bookItem'

export default class BookList extends Component {
    render() {
        return (
            <section>
                <BookItem />
            </section>
        );
    }
}