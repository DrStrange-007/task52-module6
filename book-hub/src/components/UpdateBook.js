import React, { useState } from 'react';
import axios from 'axios';

const UpdateBook = () => {
  const [bookId, setBookId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/books/${bookId}`, { title, author, isbn });
      alert('Book updated successfully');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book ID:
        <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} />
      </label>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        ISBN:
        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      </label>
      <button type="submit">Update Book</button>
    </form>
  );
};

export default UpdateBook;
