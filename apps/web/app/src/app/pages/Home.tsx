import { Link } from 'react-router-dom';

import { Typography, Button } from '@org/design-system';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello World - Home</h1>
      <Link to="/about" className="text-blue-500 underline"></Link>

      <Button.Wrapper variant="destructive" outline>
        <Button.Label>Foo</Button.Label>
      </Button.Wrapper>
    </div>
  );
};

export default Home;
