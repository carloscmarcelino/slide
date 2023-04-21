import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Feedbacksvg from '@/assets/feedback.svg';
import Starsvg from '@/assets/star.svg';
import Aspas from '@/assets/Vector.svg';

type SlideBoxProps = {
  src: string;
  name: string;
  date: string;
  company: string;
  stars: number;
  description: string;
};

export const SlideBox: React.FC<SlideBoxProps> = ({
  src,
  name,
  date,
  company,
  stars,
  description,
}) => {
  return (
    <Flex
      bgImage={Feedbacksvg.src}
      h="35rem"
      w="35rem"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="4rem"
      mt="8rem"
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          height={130}
          width={130}
          style={{ position: 'absolute', top: '-75px', right: '108px' }}
          loading="lazy"
          draggable={false}
        />
      ) : (
        <Flex
          bg="#FF5000"
          boxShadow="0px 0px 15.7589px rgba(255, 80, 0, 0.35)"
          borderRadius="100%"
          height="130px"
          width="130px"
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'absolute', top: '-75px', right: '108px' }}
        >
          <Image src={Aspas} alt="" />
        </Flex>
      )}

      <Text
        lineHeight="2.2rem"
        fontSize="1.8rem"
        fontWeight="500"
        color="#262626"
        mb="1rem"
        mt="4rem"
      >
        {name}
      </Text>

      <Text
        color="#26262666"
        lineHeight="1.6rem"
        fontSize="1.2rem"
        fontWeight="500"
        mb="2rem"
      >
        {date}-{' '}
        <Text
          as="span"
          color="#26262666"
          lineHeight="1.6rem"
          fontSize="1.2rem"
          fontWeight="500"
        >
          {company}
        </Text>
      </Text>

      <Text
        color="#413C3C"
        lineHeight="1.8rem"
        fontSize="1.4rem"
        fontWeight="400"
        mb="3rem"
        opacity="0.6"
      >
        {description}
      </Text>

      <Flex>
        {new Array(stars).fill(0).map((_, index) => (
          <Image
            key={index}
            src={Starsvg.src}
            alt="stars"
            width={25}
            height={25}
            loading="lazy"
            draggable={false}
          />
        ))}
      </Flex>
    </Flex>
  );
};
