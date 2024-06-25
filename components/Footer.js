import NextLink from 'next/link';
import { Box, Button, Flex, Link, HStack, Spacer } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '@/styles/Footer.module.css';

const WrappedLink = ({ url, children }) => {
  return (
    <NextLink href={url} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

export default function Footer({ children }) {
  return (
    <Box
      as='footer'
      bg='rgba(10,11,12)' // based on Casper, #0a0b0c
      color='white' // text color
      position='relative' // drop to bottom
      pt='20px'
      pb='60px'
      zIndex='1000'
      className='outer'
    >
      <Flex
        whiteSpace='nowrap' // ensure signle line
        justifyContent='space-between'
        flexWrap='wrap'
        alignItems='center'
        fontSize='13px'
        fontWeight='400'
        color='rgba(255,255,255,0.7)' // opacity seems additive, while rgba is absolute
        className={classNames(styles.navFooter, 'inner')}
        lineHeight='25.6px'
      >
        <Box>
          <Link>Ran Ding </Link> {` © 2021`}
        </Box>
        <Flex>
          <Link>Latest Post</Link>
          <Link>Twitter</Link>
          <Link>Ghost</Link>
        </Flex>
      </Flex>
    </Box>
  );
}
