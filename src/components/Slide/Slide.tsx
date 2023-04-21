import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { CustomFade } from '../CustomFade';
import { SlideBox } from './slideBox';
import { slideItems } from './slideItems';

export const Slide = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollWidth = Number(carousel?.current?.scrollWidth);
    const offSetWidth = Number(carousel?.current?.offsetWidth);

    setWidth(scrollWidth - offSetWidth);
  }, []);

  return (
    <Box p="10rem 0">
      <motion.div
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
        style={{
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{ display: 'inline-flex', gap: 40 }}
        >
          {slideItems.map(
            ({ photo, name, date, company, description, stars }, index) => (
              <CustomFade
                key={index}
                isHorizontal
                x={[400, 0]}
                duration={2 + index / 2}
              >
                <SlideBox
                  src={photo?.src}
                  name={name}
                  date={date}
                  company={company}
                  stars={stars}
                  description={description}
                />
              </CustomFade>
            ),
          )}
        </motion.div>
      </motion.div>
    </Box>
  );
};
