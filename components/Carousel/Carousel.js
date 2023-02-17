import styles from './Carousel.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '@mui/material/Button';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const carouselRef = useRef();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 650) {
      setSlidesToShow(1);
    } else if (width <= 960) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, [width]);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(children.length - slidesToShow);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === children.length - slidesToShow) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const variants = {
    enter: (custom) => ({
      x: custom.direction > 0 ? custom.width : -custom.width,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (custom) => ({
      x: custom.direction < 0 ? custom.width : -custom.width,
      opacity: 0,
    }),
  };

  let prev = usePrevious(currentIndex);
  let direction = currentIndex > prev ? 1 : -1;

  function usePrevious(state) {
    let [tuple, setTuple] = useState([null, state]);

    if (tuple[1] !== state) {
      setTuple([tuple[1], state]);
    }

    return tuple[0];
  }

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <div className={styles['arrow-container']}>
        <div className={styles['button-container']}>
          <button className={styles['navigation']} onClick={handlePrevClick}>
            <div className={styles['inner']}>
              <div className={styles['button-text']}>
                <NavigateBeforeIcon />
              </div>
            </div>
          </button>
        </div>
        <div className={styles['button-container']}>
          <button className={styles['navigation']} onClick={handleNextClick}>
            <div className={styles['inner']}>
              <div className={styles['button-text']}>
                <NavigateNextIcon />
              </div>
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        <div>
          <motion.div 
            key={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={{ direction, width }}
            className={styles.slider}
            transition={{
              type: "tween",
              ease: [0.43, 0.13, 0.23, 0.96],
              duration: 0.5,
            }}
          >
            {children.slice(currentIndex, currentIndex + slidesToShow)}
          </motion.div>

        </div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;