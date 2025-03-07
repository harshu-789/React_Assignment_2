import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Store/Index';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import BrowseBooks from './Components/BrowseBooks';
import BookDetails from './Components/BookDetails';
import AddBook from './Components/AddBook';
import NotFound from './Components/NotFound';


function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<BrowseBooks />} />
              <Route path="/browse/:category" element={<BrowseBooks />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
