import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../store/useAuth';

const Products = () => {
  const [products, setProducts] = useState([]);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  const fetchProducts = async () => {
    const res = await axios.get('https://dummyjson.com/products');
    setProducts(res.data.products);
  };

  useEffect(() => {
    // fetch products
    fetchProducts();
  }, []);

  if (!isAuthenticated) {
    return <div>Unauthorized</div>;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-10">Products List</h2>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border">
            <img
              src={product.thumbnail}
              className="w-full h-60 object-cover"
              alt=""
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-sm price font-bold">
                  {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
              </div>
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
