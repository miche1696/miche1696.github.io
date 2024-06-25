import Image from 'next/image';
import {
  Avatar,
  Box,
  Heading,
  Tag,
  Divider,
  Grid,
  GridItem,
  Link,
  Flex,
  Text,
} from '@chakra-ui/react';

import PageSkeleton from '@/components/PageSkeleton';
// import Subscribe from '@/components/subscribe';
// import ViewCounter from '@/components/ViewCounter';

export default function PageLayout({ children, frontMatter }) {
  return (
    <PageSkeleton>
      <article>
        <Box className='post-full-content'>{children}</Box>
        <div>{/* <Subscribe /> */}</div>
      </article>
    </PageSkeleton>
  );
}
