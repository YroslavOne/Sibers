import React, { useState } from 'react';
import { Paper, Box, Button, Dialog } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './Gallery.module.css';
import House1 from '../../../public/block-gallery/house1.png';
import House2 from '../../../public/block-gallery/house2.png';
import House3 from '../../../public/block-gallery/house3.png';
import House4 from '../../../public/block-gallery/house4.png';
import Play from '../../../public/block-gallery/play.png'

const galleryItems = [
  {
    original: 'https://www.youtube.com/embed/zumJJUL_ruM',
    thumbnail: House1,
    renderItem: () => (
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/zumJJUL_ruM"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      />
    ),
  },
  {
    original: House2,
    thumbnail: House2,
  },
  {
    original: House3,
    thumbnail: House3,
  },
  {
    original: House4,
    thumbnail: House4,
  },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={styles['gallery']}>
      <div className={styles['gallery-list']} container spacing={2}>
        <div className={styles['gallery__items']}>
          <Paper
            className={styles['gallery__paper']}
            elevation={3}
            onClick={() => handleOpen(0)}
          >
            <div className={styles['gallery__play']}>
              <img src={Play} className={styles['gallery__play-img']} />
            </div>
            <img
              className={styles['gallery__img']}
              src={galleryItems[0].thumbnail}
            />
          </Paper>
        </div>
        <div className={styles['gallery__items-img']}>
          <Paper
            elevation={3}
            className={styles['gallery__paper']}
            onClick={() => handleOpen(1)}
          >
            <img
              src={galleryItems[1].thumbnail}
              className={styles['gallery__img']}
            />
          </Paper>
          <div className={styles['gallery__items-last']}>
            <Paper
              elevation={3}
              className={styles['gallery__paper']}
              onClick={() => handleOpen(2)}
            >
              <img
                src={galleryItems[2].thumbnail}
                className={styles['gallery__img']}
              />
            </Paper>
            <Paper
              elevation={3}
              className={styles['gallery__paper']}
              onClick={() => handleOpen(3)}
            >
              <img
                src={galleryItems[3].thumbnail}
                className={styles['gallery__img']}
              />
            </Paper>
          </div>
        </div>
        {/* {galleryItems.map((item, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '8px',
                '&:hover': { boxShadow: 6 },
              }}
              onClick={() => handleOpen(index)} // Открытие модального окна с выбранным индексом
            >
              <img
                src={item.thumbnail}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Paper>
          </Grid>
        ))} */}
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <Box sx={{ padding: 2 }}>
          {/* Отображение ImageGallery с выбранным изображением */}
          <ImageGallery
            items={galleryItems}
            startIndex={selectedIndex} // Параметр для начала с выбранного изображения
            showThumbnails={true} // Показывать миниатюры
            showPlayButton={false} // Скрыть кнопку воспроизведения
            showFullscreenButton={true} // Показывать кнопку полноэкранного режима
            showNav={true} // Показывать кнопки навигации
          />
          <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
            Закрыть
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Gallery;
