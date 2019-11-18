import React, { Component } from 'react';
import './assets/style/main.min.css';
import Form from './components/form'
import BookList from './components/bookList'
import key from "./env"

const API_KEY = key;

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?key=${ API_KEY }&q=`;

export default class App extends Component {
  state = {
    searchResults: []
  }

  search = ( e ) => {
    e.preventDefault();

    const searchTerm = document.getElementById( "search-box" ).value;
    const printType = document.getElementById( "form-print-type" ).value;
    const filter = document.getElementById( "form-book-filter" ).value;

    console.log( { searchTerm, printType, filter } );

    const getResults = async () => {
      let res;

      if ( filter === "no filter" ) {
        res = await fetch( `${ BASE_URL}${ searchTerm}&printType=${ printType }` );
      } else 
        res = await fetch( `${ BASE_URL}${ searchTerm}&filter=${ filter}&printType=${ printType }` );
      
      return res.json();
    };

    getResults().then( r => {
      this.setState( { searchResults: r } );
    } );
  }

  render() {
    return ( <main className="App">
      <header className="header">
        <h1>google book search api</h1>
      </header>
      <Form search={this.search} state={this.state}/>
      <BookList state={this.state}/>
    </main> );
  }
}
