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
import { parseISO, format, fromUnixTime } from 'date-fns';

import PageSkeleton from '@/components/PageSkeleton';
// import Subscribe from '@/components/subscribe';
// import ViewCounter from '@/components/ViewCounter';
const CoverImage = (props) => {
  return (
    <Box
      as='figure'
      mt='25px'
      mb='50px'
      sx={{
        div: {
          borderRadius: '3px',
          // Next.js wrapps img with a few divs,
          // somehow we need to set the styling on the div to get it working
        },
        img: {
          width: '100%',
          height: 'auto',
          maxWidth: '1040px',
        },
      }}
    >
      <Image {...props} />
    </Box>
  );
};

const editUrl = (slug) =>
  `https://github.com/leerob/leerob.io/edit/master/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <PageSkeleton
      title={`${frontMatter.title} – Ran Ding`}
      description={frontMatter.summary}
      image={`${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type='article'
    >
      <article>
        <Box as='header' px='11vw' py='55px'>
          <Link
            color='blue.400'
            fontWeight='600'
            fontSize='13px'
            textTransform='uppercase'
          >
            Test
          </Link>
          <Box mb='.2em'>
            <Heading as='h1' size='2xl' mt='0' mb='0'>
              {frontMatter.title}
            </Heading>
          </Box>
          <Box mt='20px'>
            <Heading
              color='gray.500'
              size='md'
              fontWeight='300'
              fontFamily='Georgia, serif'
            >
              {frontMatter.summary}
            </Heading>
          </Box>
          <Flex
            justifyContent='space-between'
            pt='15px'
            mt='35px'
            borderTopWidth='1px'
            borderTopColor='rgb(228, 234, 237)'
          >
            <Flex flexGrow='1' alignItems='center'>
              <Box ml='4px' pr='12px'>
                <Box m='0 auto'>
                  <Avatar size='sm'></Avatar>
                </Box>
              </Box>
              <Box mt='2px'>
                <Text size='xs' mb='3px'>
                  Ran Ding
                </Text>
                <Text
                  fontSize='xs'
                  mb='3px'
                  color='gray.400'
                  style={{ textTransform: 'uppercase' }}
                >
                  {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                  {` • `} {frontMatter.readingTime.text}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <CoverImage
          src={frontMatter.image}
          alt={frontMatter.title}
          width={frontMatter.imageWidth}
          height={frontMatter.imageHeight}
        />
        <Box className='post-full-content'>{children}</Box>
        <div>{/* <Subscribe /> */}</div>
        <div>
          <a
            href={discussUrl(frontMatter.slug)}
            target='_blank'
            rel='noopener noreferrer'
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target='_blank'
            rel='noopener noreferrer'
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </PageSkeleton>
  );
}
