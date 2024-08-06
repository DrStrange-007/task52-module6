import React, { useState } from 'react';
import axios from 'axios';

const DeleteBook = () => {
  const [bookId, setBookId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/books/${bookId}`);
      alert('Book deleted successfully');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book ID:
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} />
      </label>
      <button type="submit">Delete Book</button>
    </form>
  );
};

export default DeleteBook;
