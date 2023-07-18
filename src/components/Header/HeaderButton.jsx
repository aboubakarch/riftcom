import React from 'react';
import { Link } from 'react-router-dom';
import Row from '../common/Row';

const HeaderButton = ({ title, Icon, url = '/' }) => {
  return (
    <Link to={url}>
      <Row className="mx-[5px]">
        <Icon />
        <p className="text-[#1e2832] text-[18px] hover:text-slate-400 ml-[2px]">
          {title}
        </p>
      </Row>
    </Link>
  );
};

export default HeaderButton;
