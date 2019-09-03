import avatar from '../Assets/avatar.jpg'

const url = 'https://xinhehsu.com';

const basicData = {
  "@context": "http://schema.org",
  "@type": "Blog",
  "author": {
      "@type": "Person",
      "name": "Xinhe Hsu",
      "url": url,
      "email": "xinhe998@gmail.com",
      "gender": "female",
      "image": avatar,
      "jobTitle": "Front-End Engineer"
  }
};

const aboutBreadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Xinhe Hsu",
    "item": url
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "About",
    "item": `${url}/about`
  }]
};

const workBreadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Xinhe Hsu",
    "item": url
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Work",
    "item": `${url}/works`
  }]
};

const ghowaBreadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Xinhe Hsu",
    "item": url
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Work",
    "item": `${url}/works`
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Ghowa",
    "item": `${url}/works/ghowa`
  }]
};

const meracleBreadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Xinhe Hsu",
    "item": url
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Work",
    "item": `${url}/works`
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Meracle",
    "item": `${url}/works/meracle`
  }]
};

const hereBreadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Xinhe Hsu",
    "item": url
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Work",
    "item": `${url}/works`
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "HERE",
    "item": `${url}/works/here`
  }]
};

const bonerpBreadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Xinhe Hsu",
    "item": url
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Work",
    "item": `${url}/works`
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Bon ERP",
    "item": `${url}/works/bonerp`
  }]
};

const aboutPersonData = {
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Xinhe Hsu",
  "url": url,
  "jobTitle": "Front-End Engineer",
  "gender": "female",
  "image": avatar,
  "sameAs": [
    "https://linkedin.com/in/xinhe998",
    "https://github.com/Xinhe998",
    "https://medium.com/@xinhe998"
  ]
};

const structuredData = {
  basic: basicData,
  about: [...basicData, ...aboutBreadcrumbList, ...aboutPersonData],
  works: [...basicData, ...workBreadcrumbList],
  ghowa: [...basicData, ...ghowaBreadcrumbList],
  meracle: [...basicData, ...meracleBreadcrumbList],
  here: [...basicData, ...hereBreadcrumbList],
  bonerp: [...basicData, ...bonerpBreadcrumbList]
};

export default structuredData