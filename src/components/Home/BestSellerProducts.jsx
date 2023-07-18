import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import client from '../../apis';
import apiEndpoints from '../../apis/endpoint';
import Container from '../common/Container';
import Row from '../common/Row';
import ProductCard from '../ProductCard';

const BestSellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const responseCat = await client.get(apiEndpoints.categories);
      setCategories(responseCat.data);
      handleGetProduct();
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const handleGetProduct = async (cid) => {
    try {
      const response = await client.get(apiEndpoints.products(12, cid));
      setProducts(response.data.docs);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1 className="w-full text-center text-[30px] text-[#1e2832] font-semibold mt-[80px] mb-[40px] uppercase">
        Best Seller Products
      </h1>
      <Row className="items-center">
        <p className="text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]">
          All Products
        </p>
        {categories.map((item) => (
          <p
            onClick={() => handleGetProduct(item._id)}
            className="text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]"
            key={item._id}
          >
            {item.title}
          </p>
        ))}
      </Row>
      <Row className="flex-wrap gap-[1%] mt-[40px]">
        {products.map((item) => (
          <div className="w-[24%] mb-[20px]" key={item._id}>
            <ProductCard data={item} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellerProducts;
