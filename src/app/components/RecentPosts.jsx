import PostCard from './PostCard';

export default async function RecentPosts({ limit }) {
  let posts = [];

  try {
    const res = await fetch(`${process.env.URL}/api/post/get`, {
      method: 'POST',
      body: JSON.stringify({ limit: limit, order: 'desc' }),
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    posts = data?.posts || [];
  } catch (error) {
    console.error('Error fetching recent posts:', error);
  }

  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <h1 className="text-xl mt-5">Recently Added Profiles</h1>
      {posts.length === 0 && (
        <p className="text-sm text-gray-500 mt-4">No posts found.</p>
      )}
      <div className="flex flex-wrap gap-5 mt-5 justify-center">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
