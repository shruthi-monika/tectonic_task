import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
  Modal,
} from '@mui/material';

const Look = ({ look }) => {
  const [openPreview, setOpenPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handleOpenPreview = (imageUrl) => {
    setPreviewImage(imageUrl);
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
    setPreviewImage('');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >

      <Box
        component="iframe"
        src={look.video}
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '30%',
          height: '100%',
          border: 'none',
        }}
      />


      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          px: 1.5,
          overflowX: 'auto',
          display: 'flex',
          gap: 1.5,
          zIndex: 2,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {look.products?.map((product) => (
          <Card
            key={product.id}
            onClick={() => handleOpenPreview(product.image)} 
            sx={{
              minWidth: 140,
              maxWidth: 160,
              borderRadius: 2,
              flexShrink: 0,
              boxShadow: 3,
              cursor: 'pointer',
            }}
          >
            <CardMedia
              component="img"
              height="100"
              image={product.image}
              alt={product.name}
            />
            <CardContent sx={{ px: 1, py: 0.5 }}>
              <Typography variant="body2" noWrap>
                {product.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {product.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      
      <Modal open={openPreview} onClose={handleClosePreview}>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            bgcolor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Look;
