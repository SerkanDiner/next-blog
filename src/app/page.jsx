import Link from 'next/link';
import CallToAction from './components/CallToAction';
import RecentPosts from './components/RecentPosts';

export default async function Home() {
  let posts = null;
  try {
    const result = await fetch(process.env.URL + '/api/post/get', {
      method: 'POST',
      body: JSON.stringify({ limit: 9, order: 'desc' }),
      cache: 'no-store',
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log('Error getting post:', error);
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Experience Book</h1>
        
        <p className='text-gray-500 text-sm sm:text-base'>
        Start your journey with the wisdom of those who have walked the path before you, 
        learning from their successes, challenges, and insights to make more informed and
         confident decisions about your future.
         
        </p>
        <Link
          href='/search'
          className='text-xs sm:text-sm text-orange-400 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-white dark:bg-gray-900'>
      <CallToAction />
      </div>
      <div className='p-3 flex flex-col gap-8 py-7'>
        <RecentPosts limit={9} />
        <Link
          href={'/search?category=null'}
          className='text-lg text-orange-400 hover:underline text-center'
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}