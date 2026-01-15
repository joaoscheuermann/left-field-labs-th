import { Link } from 'react-router-dom';

import { OrgDesignSystem } from '@org/design-system';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello World - Home</h1>
      <Link to="/about" className="text-blue-500 underline">
        Go to About
      </Link>
      <OrgDesignSystem />
    </div>
  );
};

export default Home;
