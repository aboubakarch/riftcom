import React from 'react';
import Button from '../common/Button';
import Row from '../common/Row';

const HeroSection = () => {
  return (
    <div className="w-full px-[10%] py-[90px]">
      <Row className="w-full items-center justify-between">
        <div className="w-[46%]">
          <h1 className="text-[74px] text-slate-950 font-light">Collections</h1>
          <p className="text-[30px] text-black mt-[52px]">
            You can explore and shop many products different collections from
            various brands here.
          </p>
          <Button />
        </div>
        <div className="w-[46%]">
          <div className="w-[424px] h-[542px] relative">
            <img
              className="animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px]"
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              alt="Hero"
            />
            <div className="absolute animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] -z-[1]" />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
