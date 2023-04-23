import { Slide } from '@/components';
import { Loading } from '@/components/Loading';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading)
    return (
      <Flex alignItems="center" justifyContent="center" h="100vh" w="100%">
        <Loading />
      </Flex>
    );

  return (
    <>
      <Slide />
    </>
  );
}
