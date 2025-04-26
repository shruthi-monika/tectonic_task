import React from 'react';
import { useNavigate } from 'react-router-dom';

const Annotation = ({ annotation }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/product/${annotation.productId}`);
  };

  return (
    <div 
      style={{
        position: 'absolute',
        top: `${annotation.y}%`,
        left: `${annotation.x}%`,
        width: '12px',
        height: '12px',
        backgroundColor: 'red',
        borderRadius: '50%',
        cursor: 'pointer',
        transform: 'translate(-50%, -50%)'
      }}
      onClick={handleClick}
    />
  );
};

export default Annotation;
