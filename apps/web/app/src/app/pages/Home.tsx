import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello World - Home</h1>
      <Link to="/about" className="text-blue-500 underline">
        Go to About
      </Link>
    </div>
  );
};

export default Home;
