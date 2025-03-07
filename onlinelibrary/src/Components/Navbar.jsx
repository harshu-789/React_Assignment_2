import React from 'react'
import {Link} from 'react-router-dom'
import { BookOpen } from 'lucide-react'

 function  Navbar () {


  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8" />
          <span className="font-bold text-xl">Online Library</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link to="/browse" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
            Browse Books
          </Link>
          <Link to="/add" className="hover:bg-indigo-700 px-3 py-2 rounded-md">
            Add Book
          </Link>
        </div>
      </div>
    </div>
  </nav>
    )
}

export default Navbar;