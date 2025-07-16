import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import book1 from "./categories/images/book1.avif";
import book2 from "./categories/images/book2.jpg";
import book3 from "./categories/images/book3.jpg";
import book4 from "./categories/images/book4.jpg";
import rbook6 from "./categories/images/rbook6.webp"

const categories = [
  { name: "Romantic", books: [{ title: "The spanish love deception", image: book1 }, { title: "The love intervention", image: book2 }, { title: "The love intervention", image: book2 },{ title: "The love intervention", image: book2 }, { title: "The love intervention", image: book2 },{ title: "The love intervention", image: book2 },{ title: "The love intervention", image: book2 },{ title: "The love intervention", image: book2 }] },
  { name: "Dystopian", books: [{ title: "Here lies Daniel Tate", image: book3 }, { title: "Here lies Daniel Tate", image: book3 },  { title: "Here lies Daniel Tate", image: book3 },  { title: "Here lies Daniel Tate", image: book3 },  { title: "Here lies Daniel Tate", image: book3 }, { title: "Here lies Daniel Tate", image: book3 }, { title: "Here lies Daniel Tate", image: book3 }] },
  { name: "History", books: [{ title: "Sapiens", image: "https://via.placeholder.com/150" }, { title: "Here lies Daniel Tate", image: book3 },{ title: "Sapiens", image: "https://via.placeholder.com/150" }, { title: "Here lies Daniel Tate", image: book3 },{ title: "Sapiens", image: "https://via.placeholder.com/150" }, { title: "Here lies Daniel Tate", image: book3 },{ title: "Sapiens", image: "https://via.placeholder.com/150" }, { title: "Here lies Daniel Tate", image: book3 }] },
  { name: "Self-Help", books: [{ title: "Atomic Habits", image: "https://via.placeholder.com/150" }, { title: "Here lies Daniel Tate", image: book3 },{ title: "Atomic Habits", image: "https://via.placeholder.com/150" }, { title: "Here lies Daniel Tate", image: book3 },{ title: "Atomic Habits", image: "https://via.placeholder.com/150" }, { title: "Here lies Daniel Tate", image: book3 },{ title: "Atomic Habits", image: "https://via.placeholder.com/150" }, { title: "Here lies Daniel Tate", image: book3 }] }
];

const quotes = [
  { text: "Fake Date. Real Sparks. Unexpected Love.", image: book1, bgColor: "#f47f6e", textColor: "#f4e597", font: "Dancing Script" },
  { text: "Three Experts. One Mission. Love Fixed.", image: book2, bgColor: "#f5419a", textColor: "#ffffff", font: "Sacramento" },
  { text: "Deception. Secrets. A Stolen Identity.", image: book3, bgColor: "#1f2837", textColor: "#ffffff", font: "Merriweather" },
  { 
    text: "Lost identity. Unsettling truths. Haunting past.", 
    image: rbook6, 
    bgColor: "linear-gradient(to top, #033761, #33517b, #856a86, #12131c)",  // Corrected
    textColor: "#e0e0e0", 
    font: "Playfair Display" 
  }
];

const topPicks = [
  {
    title: "The spanish love deception",
    image: book1,
  },
  {
    title: "The love intervention",
    image:book2,
  },
  {
    title: "Here lies Daniel Tate",
    image:book3,
  },
  {
    title: "The spanish love deception",
    image: book1,
  },
  {
    title: "The love intervention",
    image:book2,
  },
  {
    title: "Here lies Daniel Tate",
    image:book3,
  },
  {
    title: "The spanish love deception",
    image: book1,
  },
  
];

export default function Home() {
  const [readLater, setReadLater] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const savedBooks = JSON.parse(localStorage.getItem("readLater")) || [];
    setReadLater(savedBooks);
  }, []);

  const addToReadLater = (book) => {
    const updatedList = [...readLater, book];
    setReadLater(updatedList);
    localStorage.setItem("readLater", JSON.stringify(updatedList));
  };

  return (
    <div className="bg-[#FAF3DD] text-[#e5988b] p-6 font-[Poppins]">
     {/* Navbar */}
      
  

      {/* Hero Carousel */}
      <div className="pt-10 rounded-xl mt-[50px]">
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{ delay: 3000 }}
    pagination={false}
    className="w-full h-[400px] rounded-t-xl"
  >
    {quotes.map((quote, index) => (
      <SwiperSlide
        key={index}
        className="relative flex justify-center items-center"
        style={
          index === 3
          ? { background: "linear-gradient(to bottom, #033761 10%, #4b4f6d 35%, #856a86 65%, #2a2c3b 85%, #12131c 100%)" }  // Apply gradient only to the 4th slide
            : { backgroundColor: quote.bgColor } // Solid colors for others
        }
      >
        <div className="w-full h-full flex flex-row items-center justify-between p-8 md:ml-[200px]">
          <div className="w-1/2 h-full flex justify-center items-center">
            <img src={quote.image} alt="Book Cover" className="max-w-full max-h-[400px] object-contain" />
          </div>
          <div className="w-1/2 h-full flex justify-center items-center p-6 md:mr-[500px]">
            <p
              className="md:text-[50px] font-semibold text-white text-center"
              style={{ color: quote.textColor, fontFamily: quote.font }}
            >
              {quote.text}
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* Categories Section */}
     {/* Categories Section */}
<div className="mt-10 p-6 space-y-8">
  <h1 className="text-3xl font-bold text-[#3F3A38]">Top picks for you</h1>

  {/* Top Picks Books */}
  <div className="flex overflow-x-auto space-x-4 p-2 gap-x-10">
    {topPicks.map((book, index) => (
      <div
        key={index}
        className="bg-[#f6c0c0] p-6 rounded-lg text-[#3F3A38] shadow-lg min-w-[200px] flex flex-col items-center"
      >
        <img
          src={book.image}
          alt={book.title}
          className="w-32 h-50 object-cover rounded-lg mb-3 mx-auto"
        />
        <h3 className="text-xl font-semibold text-center">{book.title}</h3>
        <button
          onClick={() => addToReadLater(book)}
          className="mt-3 px-4 py-2 bg-[#f7ba97] text-[#3F3A38] rounded-lg hover:bg-[#8dc0df]"
        >
          Add to Read Later
        </button>
      </div>
    ))}
  </div>

  {/* Popular Genres Section */}
  <h1 className="text-center text-3xl font-bold text-[#3F3A38]">Popular Genres For you</h1>
  {categories.map((category, index) => (
    <div key={index}>
      <h2 className="text-2xl font-semibold text-[#3F3A38] mb-4">{category.name}</h2>
      <div className="flex overflow-x-auto space-x-4 p-2 gap-x-10">
        {category.books.map((book, bookIndex) => (
          <div
            key={bookIndex}
            className="bg-[#f6c0c0] p-6 rounded-lg text-[#3F3A38] shadow-lg min-w-[200px] flex flex-col items-center"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-[130px] h-[200px] object-cover rounded-lg mb-3 mx-auto"
            />
            <h3 className="text-xl font-semibold text-center">{book.title}</h3>
            <button
              onClick={() => addToReadLater(book)}
              className="mt-3 px-4 py-2 bg-[#f7ba97] text-[#3F3A38] rounded-lg hover:bg-[#8dc0df]"
            >
              Add to Read Later
            </button>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
