import React, { Component } from "react";

const API_KEY = "AIzaSyCiavO-vNSfoKkhB4wHAtD3Byk2nTziJiU";

export default class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="form-search-box">search:</label>
          <input
            id="search-box"
            type="text"
            placeholder="search the books api"
          />
          <button type="submit">search</button>
        </div>

        <div>
          <label htmlFor="form-print-type">print type:</label>
          <select id="form-print-type">
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
          <label htmlFor="form-book-type">book type:</label>
          <select defaultValue="no filter">
            <option value="no filter" disabled>
              no filter
            </option>
            <option value="ebooks">ebooks</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="full">full</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="partial">partial</option>
          </select>
        </div>
      </form>
    );
  }
}
