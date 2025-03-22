import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border border-orange-400 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link href={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <span className='italic text-sm'>{post.category}</span>

        {/* Optional: Show content preview (first 200 chars) */}
        <div
          className='text-sm text-gray-600 line-clamp-3'
          dangerouslySetInnerHTML={{
            __html:
              typeof post?.content === 'string'
                ? post.content.slice(0, 200) + '...'
                : '',
          }}
        />

        <Link
          href={`/post/${post.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          See Profile
        </Link>
      </div>
    </div>
  );
}
