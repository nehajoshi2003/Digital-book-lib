import React from 'react';
import book1 from "./images/book1.avif";
import book2 from "./images/book2.jpg";
import book3 from "./images/book3.webp";
import book4 from "./images/book4.jpg";

import { Link } from "react-router-dom";


const categories = [
  { name: "Romantic", books: [{ title: "The Great Gatsby", image: book1 }, { title: "To Kill a Mockingbird", image: book2 }] },
  { name: "Dystopian", books: [{ title: "1984", image: book3 }] },
  { name: "History", books: [{ title: "Sapiens", image: "https://via.placeholder.com/150" }] },
  { name: "Self-Help", books: [{ title: "Atomic Habits", image: "https://via.placeholder.com/150" }] }
];

const fantasy = () => {
  return (
    <div className="bg-[#FAF3DD] text-[#e5988b] p-6 font-[Inter]">

     {/* Categories Section */}
     <div className="mt-10 p-6 space-y-8">
        <h1 className="text-center text-3xl font-bold text-[#3F3A38]">Popular Genres</h1>
        {categories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-[#3F3A38] mb-4">{category.name}</h2>
            <div className="flex overflow-x-auto space-x-4 p-2 gap-x-10">
              {category.books.map((book, bookIndex) => (
                <div key={bookIndex} className="bg-[#f6c0c0] p-6 rounded-lg text-[#3F3A38] shadow-lg min-w-[200px]">
                  <img src={book.image} alt={book.title} className="w-32 h-40 object-cover ml-[100px] rounded-lg mb-3" />
                  <h3 className="text-xl font-semibold text-center">{book.title}</h3>
                  <button onClick={() => addToReadLater(book)} className="mt-3 px-4 py-2 bg-[#f7ba97] text-[#3F3A38] rounded-lg">
                    Add to Read Later
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default fantasy
