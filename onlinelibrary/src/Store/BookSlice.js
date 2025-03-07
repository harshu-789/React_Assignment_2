import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: { 
        books: [
            
            {
                id: 1,
                title: 'The Midnight Library',
                author: 'Matt Haig',
                category: 'fiction',
                description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
                rating: 4.5,
                imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                isPopular: true
              },
              {
                id: 2,
                title: 'Atomic Habits',
                author: 'James Clear',
                category: 'non-fiction',
                description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
                rating: 4.8,
                imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                isPopular: true
              },
              {
                id: 3,
                title: 'Project Hail Mary',
                author: 'Andy Weir',
                category: 'sci-fi',
                description: 'A lone astronaut must save the earth from disaster',
                rating: 4.7,
                imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                isPopular: true
              },
              {
                id: 4,
                title: 'The Silent Patient',
                author: 'Alex Michaelides',
                category: 'mystery',
                description: 'A psychological thriller about a woman’s act of violence against her husband.',
                rating: 4.6,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUR-4lc7fAtYhZ2OazeM0E698xNWpvQpGZGA&s',
                isPopular: false
              },
              {
                id: 5,
                title: 'Wings of Fire',
                author: ' APJ Abdul Kalam',
                category: ' AutoBiography',
                description: 'Wings of Fire, is the autobiography of the Missile Man of India and the former President of India, Dr. A. P. J. Abdul Kalam.',
                rating: 4.8,
                imageUrl: 'https://i.pinimg.com/474x/14/4e/47/144e47c797f89aa47bfb65e0eab7bba3.jpg',
                isPopular: true
              },
              
              
            
        ],
        
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        }
    }
});

export const {addBook} = bookSlice.actions
export default bookSlice.reducer