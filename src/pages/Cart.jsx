import React from 'react';
import { useContext } from 'react';
import CartItem from '../components/Cart/CartItem';
import Container from '../components/common/Container';
import Layout from '../components/common/Layout';
import Row from '../components/common/Row';
import { CartContext } from '../contextAPIs';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Layout>
      <Container className="my-[40px]">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-semibold">
            Cart Details
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px-[20px] items-center">
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Image
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Qty
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Total
            </h6>
          </Row>
          {cartItems.map((item) => (
            <CartItem data={item} key={item._id} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
