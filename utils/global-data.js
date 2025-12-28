export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Apip Web';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Catatan pribadi';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  const authorAvatar = process.env.BLOG_AVATAR
    ? decodeURI(process.env.BLOG_AVATAR)
    : '/images/avatar.jpg';

  return {
    name,
    blogTitle,
    footerText,
    authorAvatar,
  };
};
