import { Link } from 'react-router-dom';

import { Typography } from '@org/design-system';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello World - Home</h1>
      <Link to="/about" className="text-blue-500 underline">
        <Typography variant="title" size="xl" weight="bold">
          Hello World
        </Typography>
      </Link>
    </div>
  );
};

export default Home;
