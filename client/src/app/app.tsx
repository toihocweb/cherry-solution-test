import { Routes, Route } from 'react-router-dom';

import Login from './login';
import Home from './home';
import Products from './products';

const App = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
