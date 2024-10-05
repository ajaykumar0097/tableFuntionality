import React, { useState } from 'react';
import { useProductSearch } from './useProductSearch';
import './product.css'

const ProductSearchComponent = () => {
  const [query, setQuery] = useState('Nike shoes');
  const { data, error, loading } = useProductSearch(query);
  console.log("data",data);
  

  const handleSearch = (e) => {
    e.preventDefault();
    // Trigger search with new query
    setQuery(e.target.search.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search for products..." />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data?.data?.products?.map((product) => (
            <li key={product.product_title}>{product.product_title} ----- {product?.product_photos?.map(val=><img className='img' src={val} alt="" />)} </li>
            
          ))}
        </ul>
        
      )
      
      }


      {/* {data && 
       
          data?.data?.products?.map((product) => ()


            
          ))
   
        
      
      
      } */}
    </div>
  );
};

export default ProductSearchComponent;
