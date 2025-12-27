import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  getPostFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomImage from '../../components/CustomImage';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  img: CustomImage,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
  slug,
}) {
  return (
    <Layout>
    <div className="mx-auto w-full max-w-2xl">
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0" data-sb-object-id={`posts/${slug}.mdx`}>
        <header>
          <h1
            className="mb-12 text-3xl text-center md:text-5xl dark:text-white"
            data-sb-field-path="title"
          >
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="mb-4 text-xl" data-sb-field-path="description">
              {frontMatter.description}
            </p>
          )}
        </header>
        <main>
          <article
            className="prose dark:prose-invert overflow-x-auto"
            data-sb-field-path="markdown_content"
          >
            <MDXRemote {...source} components={components} />
          </article>
        </main>
<div className="grid mt-12 md:grid-cols-2 lg:-mx-24 not-prose">
  {prevPost && (
    <Link
      href={`/posts/${prevPost.slug}`}
      className="flex flex-col px-10 py-8 text-center transition border border-gray-800/10 bg-white/10 md:text-right backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10"
    >
      <p className="mb-4 text-xs uppercase opacity-60 font-sans tracking-widest">
        Previous
      </p>

      <h4 className="mb-6 text-xl font-sans font-semibold leading-snug">
        {prevPost.title}
      </h4>

      <ArrowIcon className="mx-auto mt-auto transform rotate-180 md:mr-0" />
    </Link>
  )}

  {nextPost && (
    <Link
      href={`/posts/${nextPost.slug}`}
      className="flex flex-col px-10 py-8 text-center transition border border-gray-800/10 bg-white/10 md:text-left backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10"
    >
      <p className="mb-4 text-xs uppercase opacity-60 font-sans tracking-widest">
        Next
      </p>

      <h4 className="mb-6 text-xl font-sans font-semibold leading-snug">
        {nextPost.title}
      </h4>

      <ArrowIcon className="mx-auto mt-auto md:ml-0" />
    </Link>
  )}
</div>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostFilePaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
