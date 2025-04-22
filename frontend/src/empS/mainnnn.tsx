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
    <div className="grid grid-cols-3">
      <div className="col-span-3 max-h-5px m-0 p-0">
        <TopBar />
      </div>

      <div className="col-span-3 flex justify-center">
        <Subs />
      </div>

      <div className="col-span-3 grid grid-cols-10">
        <div className="col-start-3 col-span-6 flex flex-col">
          <div className="border-b">
            <Hashes r1="Web D" r2="Web D2" r3="web 3" />
          </div>

          <div className="mt-4">
            {postss.slice().reverse().map((p) => (
              <Link to={`/blog/${p.id}`} key={p.id} className="block mb-4">
                <div className="p-4 border rounded shadow hover:shadow-lg transition">
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
