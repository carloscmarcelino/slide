import { MotionProps, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type CustomFadeProps = {
  children: JSX.Element;
  duration?: number;
  opacity?: [number, number];
  y?: [number, number];
  isHorizontal?: boolean;
  x?: [number, number];
  onScroll?: boolean;
  bounce?: number;
  isVertical?: boolean;
  threshold?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  triggerOnce?: boolean;
  manualView?: boolean;
} & MotionProps;

export const CustomFade: React.FC<CustomFadeProps> = ({
  children,
  duration = 2,
  opacity = [0, 1],
  y = [-100, 0],
  x = [100, 0],
  isHorizontal,
  isVertical,
  onScroll = false,
  bounce = 0.3,
  threshold = 1,
  triggerOnce = true,
  manualView,
  ...rest
}) => {
  const { ref, inView } = useInView({ threshold, triggerOnce });

  const view = manualView ?? inView;

  if (onScroll && isHorizontal)
    return (
      <motion.div
        ref={ref}
        style={{ width: 'max-content' }}
        initial={{ opacity: opacity[0], x: x[0] }}
        animate={
          view
            ? { opacity: opacity[1], x: x[1] }
            : { opacity: opacity[0], x: x[0] }
        }
        transition={{ duration, type: 'spring', bounce, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );

  if (onScroll && isVertical)
    return (
      <motion.div
        ref={ref}
        style={{ width: 'max-content' }}
        initial={{ opacity: opacity[0], y: y[0] }}
        animate={
          view
            ? { opacity: opacity[1], y: y[1] }
            : { opacity: opacity[0], y: y[0] }
        }
        transition={{ duration, type: 'spring', bounce, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );

  if (isHorizontal)
    return (
      <motion.div
        style={{ width: 'fit-content' }}
        initial={{ opacity: opacity[0], x: x[0] }}
        animate={{ opacity: opacity[1], x: x[1] }}
        transition={{ duration, type: 'spring', bounce, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );

  return (
    <motion.div
      initial={{ opacity: opacity[0], y: y[0] }}
      animate={{ opacity: opacity[1], y: y[1] }}
      transition={{ duration, type: 'spring', bounce, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
