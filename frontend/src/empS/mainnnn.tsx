import TopBar from '../pages/TopBar';
import Subs from '../components/Subs';
import Posts from '../pages/Posts';
import Hashes from '../components/Hashes';
import { useBlogs } from '../hooks/index';
import { Link } from 'react-router-dom';
import { MainnSkeleton } from './Mainnskelton';
import { DynamicTextProps } from '../pages/Create';

function isDynamicTextArray(data: any): data is DynamicTextProps[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === 'object' &&
        typeof item.tag === 'string' &&
        typeof item.children === 'string'
    )
  );
}

export const Mainnnn = () => {
  const { postss, loading } = useBlogs();

  if (loading) {
    return <MainnSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Top Bar */}
      <div className="shadow-sm sticky top-0 z-50 bg-white">
        <TopBar />
      </div>

      {/* Subscription Bar */}
      <div className="flex justify-center mt-4">
        <Subs />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto mt-6 px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Center Feed */}
        <div className="md:col-start-3 md:col-span-8">
          {/* Hashtags */}
          <div className="border-b pb-2 mb-4">
            <Hashes r1="Web D" r2="Web D2" r3="Web 3" />
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {postss.slice().reverse().map((p) => (
              <Link
                to={`/blog/${p.id}`}
                key={p.id}
                className="block group transition-all duration-200"
              >
                <div className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-white hover:shadow-md hover:border-gray-300 transition-all duration-300 ease-in-out">
                  <Posts
                    desc={isDynamicTextArray(p.content) ? p.content : []}
                    title={p.title}
                    author={p.author?.name || 'Unknown Author'}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
