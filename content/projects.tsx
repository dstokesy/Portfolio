const projects = [
  {
    id: "movie",
    title: "Movie DB",
    categories: "React, Next.js",
    thumb: "/projects/logos/movie-db.png",
    logo: "/projects/logos/movie-db.png",
    images: ["/projects/movie-db-desktop.jpg"],
    github: "https://github.com/dstokesy/Movie-DB",
    website: "http://movie-db-dstokesy.vercel.app",
    content: {
      title: "Details",
      content:
        "<p>Currently a work in progress, this project is inspired by the hundreds of hours lost to not knowing what to watch on tv every night, my current project is using the Movie DB API to pull in the latest movies and tv shows along with their IMDB rating.</p><p>To build this project I&apos;m using NextJs and Tailwind CSS. Checkout the project using the links above!</p>",
    },
  },
  {
    id: "cms",
    title: "Headless CMS",
    categories: "React, Next.js",
    thumb: "/projects/logos/headless-cms.png",
    logo: "/projects/logos/headless-cms.png",
    images: [
      "/projects/headless-cms.png",
      "/projects/headless-cms-october.png",
    ],
    github: "https://github.com/dstokesy/Headless-CMS",
    website: "https://headless-cms-dstokesy.vercel.app",
    content: {
      title: "Details",
      content:
        "<p>Headless CMS is a project to demonstrate how October Cms can be used as a Headless CMS with NextJs. October Cms manages the pages, blog posts and menus whilst NextJs powers the site for visitors.</p><p>To build this project I&apos;m using NextJs, Redux, October CMS, and Tailwind CSS. Checkout the project using the links above!</p>",
    },
  },
  {
    id: "mercedes",
    title: "Mercedes Benz UK Careers",
    categories: "October Cms",
    thumb: "/projects/logos/mercedes.png",
    logo: "/projects/logos/mercedes.png",
    images: ["/projects/mercedes-desktop.jpg"],
    website: "https://careers.mercedes-benz.co.uk",
    content: {
      title: "Details",
      content:
        "<p>Whilst working for Rejuvenate Digital I was the lead developer on a project for Mercedes Benz. I was tasked with building a careers website fully managable from a CMS. Another criteria of the website was to ensure the Mercedes brand guidlines were followed closely and that the website performed well on page speed and SEO.</p><p>At the time of launch the website's score on Google's Lighthouse page speed test was 96/100 and had an SEO score of 100/100.</p><p>This project was built solely using October CMS.</p>",
    },
  },
  {
    id: "surridge",
    title: "Surridge Sport",
    categories: "October Cms, E-commerce, Franchising",
    thumb: "/projects/logos/surridge.png",
    logo: "/projects/logos/surridge.png",
    images: ["/projects/surridge-desktop.png"],
    website: "https://www.surridgesport.com",
    content: {
      title: "Details",
      content:
        "<p>Whilst working at Rejuvenate Digital I was the lead developer on a huge project for Surridge Sport. The brief for this project was to build a full e-commerce website that has webshops which act as their own websites in their own right and can be created by the client using the CMS. To do this I built a franchsing plugin which can apply a global scope to a model so the correct data is loaded from the database.</p><p>This project was built solely using October CMS.</p>",
    },
  },
  {
    id: "sanctuary",
    title: "Sanctuary Bathrooms",
    categories: "October Cms, E-commerce",
    thumb: "/projects/logos/sanctuary.png",
    logo: "/projects/logos/sanctuary.png",
    images: ["/projects/sanctuary-desktop.png"],
    content: {
      title: "Details",
      content:
        "<p>Soon to be launched my latest project I am lead developer on at Rejuvenate Digital is a rebuild of the Snactuary Bathrooms website, a site I built over 8 years previously. The main need for a new website was to upgrade to a new CMS system and improve on page speed to help improve organic traffic to the website.</p><p>To achieve the goals of this project I used the latest version of October CMS (version 3) and to help improve page speed Algolia Search API was used to provide incredibly fast product results.</p>",
    },
  },
  {
    id: "rightfuelcard",
    title: "Right Fuel Card",
    categories: "October Cms, Google Maps",
    thumb: "/projects/logos/rfc.png",
    logo: "/projects/logos/rfc.png",
    images: ["/projects/rfc-desktop.png"],
    website: "https://www.rightfuelcard.co.uk",
    content: {
      title: "Details",
      content:
        "<p>Right Fuel Card is a project I was lead developer on at Rejuvenate Digital. The aim of this project was to deliver a new modern, fast performing website which allows users to apply for a fuel card. An integration to the Pipe Drive API was required to allow the staff at Right Fuel Card to manage the applications in their CRM.</p><p>This project was built solely using October CMS.</p>",
    },
  },
  {
    id: "gf",
    title: "Glamour Fans",
    categories: "React",
    thumb: "/projects/logos/gf.png",
    logo: "/projects/logos/gf.png",
    images: ["/projects/gf-desktop.png"],
    website: "https://www.glamourfans.com",
    content: {
      title: "Details",
      content:
        "<p>At Rejuvenate Digital I also assist the team on a the buidling of a new social media platform. The platform allows users to post content, follow users and chat whilst having different types of account which allow restrict features. Safe guarding features to prevent underage access and content have also been implemented in this project.</p><p>This project was built solely using NextJs, Redux, Laravel and Laravel Nova.</p>",
    },
  },
  {
    id: "form",
    title: "Form Builder Plugin",
    categories: "October Cms, Plugin",
    thumb: "/projects/logos/october.png",
    logo: "/projects/logos/october.png",
    github: "https://github.com/dstokesy/Form-Builder-Plugin",
    content: {
      title: "Details",
      content:
        "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.",
    },
  },
  {
    id: "franchise",
    title: "Franchise Plugin",
    categories: "October Cms, Plugin",
    thumb: "/projects/logos/october.png",
    logo: "/projects/logos/october.png",
    github: "https://github.com/dstokesy/Franchise-Plugin",
    content: {
      title: "Details",
      content:
        "Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.",
    },
  },
];

export default projects;
