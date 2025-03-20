


import { Button } from 'flowbite-react';
export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-6 border border-orange-400 rounded-tl-3xl rounded-br-3xl bg-white dark:bg-gray-900 shadow-lg max-w-6xl mx-auto">
  
  {/* Text Content */}
  <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left px-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      HOW TO BECOME A POLICE OFFICER
    </h2>
    <p className="text-gray-600 dark:text-gray-300 my-4 leading-relaxed">
      Ever wondered what it takes to become a police officer in the UK? 
      Learn firsthand from those who have walked the beat, faced challenges, 
      and built rewarding careers in law enforcement.
    </p>
    
    {/* CTA Button */}
    <a 
      href="https://www.met.police.uk/police-forces/metropolitan-police/areas/c/careers/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition-all duration-300"
    >
      Read More
    </a>
  </div>

  {/* Image */}
  <div className="flex-1 p-6">
    <img 
      src="images/home_page_police.jpg" 
      alt="Police Officer Career" 
      className="rounded-lg shadow-md w-full object-cover"
    />
  </div>

</div>

  )
}