import React, { useState } from 'react';
import axios from 'axios';

const SearchBook = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/books?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Search:
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((book) => (
          <li key={book.id}>{book.title} - {book.author} - {book.isbn}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBook;
