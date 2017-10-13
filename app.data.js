const name = 'John Doe';
const tagline = 'A Person';
const taglineFull = `${name} - ${tagline}`;
const description = 'John Doe: Some Guy That does Stuff!';

const twitterHandle = '@sometwitterhandle';
const domain = 'www.somewebsite.com';

const image = `https://${domain}/some_image.jpg`;
const url = `https://${domain}`;

const appData = {
  links: {
    more: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/sometwitterhanle',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/someinstagramuser/',
      },
      {
        name: 'Github',
        url: 'https://github.com/somegithubuser',
      },
    ],
  },
  page: {
    title: `${name}: ${tagline}`,
    badge: {
      text1: name,
      text2: tagline,
    },
  },
  meta: {
    description: `${name} - ${tagline}`,
  },
  schema: {
    name: taglineFull,
    description,
    image,
  },
  openGraph: {
    title: taglineFull,
    description,
    url,
    image,
  },
  twitterCard: {
    handle: twitterHandle,
    title: taglineFull,
    description,
    image,
    domain,
  },
};

module.exports = appData;
