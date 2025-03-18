


import { Button } from 'flowbite-react';
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-orange-400 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
           HOW TO BE A POLICE OFFICER 
            </h2>
            <p className='text-gray-500 my-2'>
            Ever wondered what it takes to become a police officer in the UK? 
            Learn firsthand from those who have walked the beat, faced challenges,
             and built rewarding careers in law enforcement.
            </p>
            <Button className='flex flex-col sm:flex-row p-3 border  bg-orange-400 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center  text-white hover:bg-orange-400 hover:text-white transition-all duration-300'>
                <a href="https://www.met.police.uk/police-forces/metropolitan-police/areas/c/careers/" target='_blank' rel='noopener noreferrer'>
                    Read More
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="images/home_page_police.jpg" />
        </div>
    </div>
  )
}