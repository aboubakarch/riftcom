import React from 'react';
import QtyContainer from '../common/QtyContainer';
import Row from '../common/Row';

const CartItem = ({ data }) => {
  const getTotal = () => {
    const price = parseInt(data.price.slice(1));
    return price * data.qty;
  };
  return (
    <Row className="border-[1px] border-gray-400 rounded items-center w-full py-[10px] px-[20px] mb-[30px]">
      <Row className="w-[20%]">
        <img
          className="w-2/3 h-[150px] object-cover rounded-[6px]"
          src={data.img}
          alt={data.title}
        />
      </Row>
      <p className="w-[20%] text-[16px] text-black font-medium">{data.title}</p>
      <p className="w-[20%] text-[16px] text-black font-medium">{data.price}</p>
      <Row className="w-[20%] justify-center">
        <QtyContainer data={data} />
      </Row>
      <p className="w-[20%] text-center text-[16px] text-black font-medium">
        ${getTotal()}
      </p>
    </Row>
  );
};

export default CartItem;
