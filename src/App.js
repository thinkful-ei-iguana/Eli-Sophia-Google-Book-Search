import React from 'react';
import './assets/style/main.min.css';
import Form from './components/form'
import BookList from './components/bookList'

function App() {
  return ( <main className="App">
    <header className="header">
      <h1>google book search api</h1>
    </header>
    <Form/>
    <BookList/>
  </main> );
}

export default App;
