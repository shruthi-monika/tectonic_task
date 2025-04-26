import React from 'react';
import Look from './Look';
import { Box } from '@mui/material';

import tshirt from '../assets/tshirt.webp';
import tshirt_1 from '../assets/tshirt_1.webp';
import tshirt_2 from '../assets/tshirt_2.webp';

const looks = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/PdJq-dAQr-Y?autoplay=1&mute=1",
    products: [
      { id: 101, image: tshirt, name: 'Cool T-Shirt', price: '₹499' },
      { id: 102, image: tshirt_1, name: 'Stylish Jeans', price: '₹1299' },
      { id: 103, image: tshirt_2, name: 'Sneakers', price: '₹1999' }
    ]
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/9Pbe4DyMQYw?autoplay=1&mute=1",
    products: [
      { id: 104, image: tshirt, name: 'New T-Shirt', price: '₹599' },
      { id: 105, image: tshirt_1, name: 'New Jeans', price: '₹1499' },
      { id: 106, image: tshirt_2, name: 'New Sneakers', price: '₹2499' }
    ]
  },
  {
  id: 3,
  video: "https://www.youtube.com/embed/PdJq-dAQr-Y?autoplay=1&mute=1",
  products: [
    { id: 104, image: tshirt, name: 'New T-Shirt', price: '₹599' },
    { id: 105, image: tshirt_1, name: 'New Jeans', price: '₹1499' },
    { id: 106, image: tshirt_2, name: 'New Sneakers', price: '₹2499' }
  ]
}
];

const Lookbook = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflowY: 'auto',
        scrollSnapType: 'y mandatory',
        display: 'flex',
        flexDirection: 'column',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {looks.map((look) => (
        <Box
          key={look.id}
          sx={{
            flex: '0 0 100vh',
            scrollSnapAlign: 'start',
          }}
        >
          <Look look={look} />
        </Box>
      ))}
    </Box>
  );
};

export default Lookbook;
