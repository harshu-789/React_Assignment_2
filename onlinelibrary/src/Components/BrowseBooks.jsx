import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';


function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const books = useSelector((state) => state.books.books) || [];

  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim().toLowerCase());
    }, 300); 

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredBooks = books.filter((book) => {
    const matchedCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true;
    const matchSearch = debouncedSearch === '' || 
      book.title.toLowerCase().includes(debouncedSearch) ||
      book.author.toLowerCase().includes(debouncedSearch);
      
    return matchedCategory && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Books'}
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Rating: {book.rating}/5</span>
                  <Link
                    to={`/book/${book.id}`}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
