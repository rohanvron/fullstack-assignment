import React, { useState, useEffect } from 'react';
import axios from 'axios';
import abstractLogo from '../assets/abstract-logo.png';

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get('http://localhost:5000/api/cards');
      setCards(response.data);
    };
    fetchCards();
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={abstractLogo} alt="Abstract" className="h-8 mr-2" />
            <h1 className=' mr-2 font-bold text-2xl'>Abstract</h1>
            <span className="text-2xl">| Help Center</span>
          </div>
          <button className="bg-black text-white border border-white px-8 py-2 rounded-lg">Submit a request</button>
        </div>
      </header>

      <main className="mx-auto py-12 px-4 bg-indigo-100">
        <h1 className="text-5xl font-bold text-center mb-8">How can we help?</h1>
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-4 pr-12 text-lg border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        
      </main>

      <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto py-12 px-4 mb-10 cursor-pointer">
          {filteredCards.map((card) => (
            <div key={card._id} className="bg-[#eeeeee] p-6 rounded-xl border border-gray-300">
              <h2 className="text-2xl font-bold mb-2" >{card.title}</h2>
              <hr className="border-gray-300 my-3" />
              <p className="text-gray-600 mb-4">{card.description}</p>
            </div>
          ))}
        </div>

        <footer className="bg-black text-white py-12">
  <div className="max-w-[90rem] mx-auto px-4 grid md:grid-cols-5 gap-6">
    <div>
      <h3 className="font-bold text-xl mb-4">Abstract</h3>
      <ul>
        <li><a href="#" className="hover:underline">Branches</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-xl mb-4">Resources</h3>
      <ul>
        <li><a href="#" className="hover:underline">Blog</a></li>
        <li><a href="#" className="hover:underline">Help Center</a></li>
        <li><a href="#" className="hover:underline">Release Notes</a></li>
        <li><a href="#" className="hover:underline">Status</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-xl mb-4">Community</h3>
      <ul>
        <li><a href="#" className="hover:underline">Twitter</a></li>
        <li><a href="#" className="hover:underline">LinkedIn</a></li>
        <li><a href="#" className="hover:underline">Facebook</a></li>
        <li><a href="#" className="hover:underline">Dribbble</a></li>
        <li><a href="#" className="hover:underline">Podcast</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-xl mb-4">Company</h3>
      <ul>
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Legal</a></li>
      </ul>
      <h3 className="font-bold mt-4 mb-2">Contact Us</h3>
      <a href="mailto:info@abstract.com" className="hover:underline">info@abstract.com</a>
    </div>
    <div className="flex flex-col items-start mt-40 text-xl">
      <img src={abstractLogo} alt="Abstract" className="h-8 mb-2 text-xl"/>
      <p>© Copyright 2023</p>
      <p>Abstract Studio Design, Inc.</p>
      <p>All rights reserved</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default HelpCenter;