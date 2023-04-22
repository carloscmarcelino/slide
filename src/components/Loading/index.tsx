import { Flex, Text } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <Flex gap={10}>
      {[1, 2, 3, 4].map((item) => (
        <Text
          className="circle"
          key={item}
          as="span"
          height={50}
          width={50}
          bg="#87F"
          borderRadius={100}
        />
      ))}
    </Flex>
  );
};
