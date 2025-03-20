import Link from 'next/link';

const TestimonialCard = ({ name, role, image, title, quote }) => {
    return (
      <div >
        <Link href={`/search?category=null`}>
       
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-orange-400 dark:border-orange-400 rounded-lg dark:bg-gray-800">
      
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="my-4">"{quote}"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center">
          <img className="rounded-full w-9 h-9" src={image} alt={name} />
          <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
            <div>{name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
          </div>
        </figcaption>
      </figure>
      </Link>
      </div>
    );
  };
  
  export default TestimonialCard;
  