export default function About() {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6'>
        <div className='max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8'>
          <h1 className='text-4xl font-bold text-gray-800 dark:text-white text-center mb-6'>
            About Experience Book
          </h1>
          
          <div className='text-lg text-gray-600 dark:text-gray-300 flex flex-col gap-6 leading-relaxed text-center md:text-left'>

            <p className='border-l-4 border-orange-400 pl-4'>
              <strong className="text-gray-800 dark:text-white">Experience Book</strong> is a platform designed to share real-world career experiences and insights. 
              We believe that learning from the experiences of others can guide individuals toward making informed career decisions. 
              Our mission is to connect professionals from different industries with those seeking advice, mentorship, 
              and a deeper understanding of various career paths.
            </p>

            <p className='border-l-4 border-orange-400 pl-4'>
              Whether you are a student exploring career options, a professional considering a career change, 
              or someone curious about different industries, <strong className="text-gray-800 dark:text-white">Experience Book</strong> provides a space where professionals 
              can share their journeys, challenges, and lessons learned. Our goal is to make career advice more accessible, 
              relatable, and practical.
            </p>

            <p className='border-l-4 border-orange-400 pl-4'>
              <strong className="text-gray-800 dark:text-white">Join Our Community:</strong>  
              Explore stories, engage with others, and even contribute your own experiences.  
              By participating in discussions, liking posts, and responding to comments,  
              you become part of a supportive learning community where insights and experiences shape meaningful career choices.
            </p>

            <p className='border-t-2 pt-4 text-center'>
              This website is powered by <strong>Next.js</strong> and{' '}
              <a
                href='https://go.clerk.com/fgJHKlt'
                target='_blank'
                className='text-orange-500 hover:underline'
              >
                Clerk
              </a>
              , ensuring a seamless and secure user experience.
            </p>
          </div>
        </div>
      </div>
    );
}
