'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { IProduct } from '@/redux/features/productsSlice';
import ProductCard from './ProductCard';
import FormAdmin from '../admin/Form';

interface ComponentProps {
  variant: string;
  index: number;
  item: IProduct;
}

const CardFlip: React.FC<ComponentProps> = props => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(prevState => !prevState);
  };

  const spring = {
    type: 'spring',
    stiffness: 300,
    damping: 40
  };

  return (
    <motion.div
      transition={spring}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        width: '100%',
        height: '100%'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={spring}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <div
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
            width: '100%',
            height: '100%'
          }}
        >
          <motion.div
            animate={{ rotateY: isFlipped ? -180 : 0 }}
            transition={spring}
            style={{
              width: '100%',
              height: '100%',
              zIndex: isFlipped ? 0 : 1,
              backfaceVisibility: 'hidden',
              position: 'absolute'
            }}
          >
            <ProductCard
              index={props.index}
              item={props.item}
              handleFlip={() => handleFlip()}
            />
          </motion.div>
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: isFlipped ? 0 : 180 }}
            transition={spring}
            style={{
              width: '100%',
              height: '100%',
              zIndex: isFlipped ? 1 : 0,
              backfaceVisibility: 'hidden',
              position: 'absolute'
            }}
          >
            <FormAdmin
              isAdmin
              finish={() => handleFlip()}
              id={props.item._id}
              data={props.item}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
