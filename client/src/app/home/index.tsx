import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default Home;
