import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../data/books';


function Home() {
  const books = useSelector((state) => state.books?.books || []);
  const popularBooks = books.filter((book) => book.isPopular);

  return (
    <div className="space-y-8">
  
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Online Library
        </h1>
        <p className="text-xl text-gray-600">
          Discover thousands of books across various categories
        </p>
      </section>


      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className={`grid gap-4 ${categories.length > 4 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' : 'grid-cols-2 md:grid-cols-3'}`}>
          {categories?.map((category) => (
            <Link
              key={category.id}
              to={`/browse/${category.slug}`}
              className="p-4 bg-indigo-50 rounded-lg text-center hover:bg-indigo-100 transition-colors"
            >
              <span className="font-medium text-indigo-700">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

     
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-8">Popular Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularBooks.length > 0 ? (
            popularBooks.map((book) => (
              <div key={book.id} className="border rounded-lg overflow-hidden">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-2">by {book.author}</p>
                  <Link
                    to={`/book/${book.id}`}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No popular books available.</p>
          )}
        </div>
      </section>

     
    </div>
  );
}

export default Home;
