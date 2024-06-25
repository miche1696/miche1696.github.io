import mdx from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkCapitalize from 'remark-capitalize';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkCodeTitles from 'remark-code-titles';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkMath,
      remarkCodeTitles,
      remarkCapitalize,
      remarkSlug,
      [remarkAutolinkHeadings, { behavior: 'wrap' }],
    ],
    rehypePlugins: [rehypeKatex],
    // rehypePlugins: [require('rehype-mathjax')], //mathjax doesn't seem to work
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['images.unsplash.com'],
  },
});
