import Link from 'next/link';
import Image from 'next/image';
import CodeBlock from '@/components/CodeBlock';
import { Box, Code, Heading } from '@chakra-ui/react';

// import ProsCard from '@/components/ProsCard';
// import ConsCard from '@/components/ConsCard';
// import Gumroad from '@/components/metrics/Gumroad';
// import Unsplash from '@/components/metrics/Unsplash';
// import Analytics from '@/components/metrics/Analytics';
// import YouTube from '@/components/metrics/Youtube';
// import Step from '@/components/Step';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  inlineCode: Code,
  h1: (props) => <Heading as='h1' size='2xl' {...props} />,
  h2: (props) => <Heading as='h2' size='xl' {...props} />,
  h3: (props) => <Heading as='h3' size='lg' {...props} />,
  h4: (props) => <Heading as='h4' size='md' {...props} />,
  h5: (props) => <Heading as='h5' size='sm' {...props} />,
  h6: (props) => <Heading as='h5' size='xs' {...props} />,
  // Analytics,
  // ConsCard,
  // Gumroad,
  // ProsCard,
  // Step,
  // Tweet,
  // Unsplash,
  // YouTube
};

export default MDXComponents;
