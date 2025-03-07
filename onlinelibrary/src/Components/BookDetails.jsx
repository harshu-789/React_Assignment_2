import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';


function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books) || [];

  const book = books.find((b) => b.id === Number(id));


  if (!book) {
    return <div className="text-center text-red-600 font-bold text-xl mt-10">Book not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={book.imageUrl} alt={book.title} />
        </div>
        <div className="p-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse
          </button>

          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {book.category}
          </div>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">{book.title}</h1>
          <p className="mt-2 text-gray-600">by {book.author}</p>

          <div className="mt-4 flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${index < book.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-2 text-gray-600">({book.rating}/5)</span>
          </div>

          <p className="mt-4 text-gray-500">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
