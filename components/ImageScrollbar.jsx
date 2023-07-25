import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export default function ImageScrollbar({ data }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLeftClick = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - 500, 0));
  };

  const handleRightClick = () => {
    const maxScroll = (data.length - 1) * 914; // 910px (box width) + 4px (mr)
    setScrollPosition((prevPosition) => Math.min(prevPosition + 500, maxScroll));
  };

  return (
  <>
    <Box position="absolute" top="30%" left="200px"  transform="translateY(-50%)" as={FaArrowAltCircleLeft} size="24px" cursor="pointer" onClick={handleLeftClick}  />
    <Box position="absolute" top="27%" right="200px" transform="translateY(-50%)" as={FaArrowAltCircleRight} size="24px" cursor="pointer" onClick={handleRightClick} />
    <Box position="relative" overflow="hidden"> 
      <Flex overflowX="auto" whiteSpace="nowrap" pb={4} pt={2}>
        {data.map((item) => (
          <Box
            key={item.id}
            width="910px"
            height="500px"
            mr="4"
            flexShrink={0}
            transform={`translateX(-${scrollPosition}px)`}
            transition="transform 0.3s"
          >
            <Image
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            />
          </Box>
        ))}
      </Flex>
    </Box>
    </>
  );
}
