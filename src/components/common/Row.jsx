import React from 'react';

const Row = ({ className, children }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Row;
