import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello World - About</h1>
      <Link to="/" className="text-blue-500 underline">
        Go to Home
      </Link>
    </div>
  );
};

export default About;
