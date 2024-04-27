const projects = [
  {
    id: "skybet",
    title: "Sky Bet",
    categories: "React, PHP, K8, Chef",
    thumb: "/projects/logos/sbg.png",
    logo: "/projects/logos/sbg.png",
    images: ["/projects/betslip.png", "/projects/match5.png"],
    website: "https://bit.ly/4dfiYMY",
    content: {
      title: "Details",
      content:
        "<p>At my current employer Flutter I have worked on the Sky Bet website in both the presentation team and transactions team.</p><p>During my team in the presentation team I worked with React on the competition and event pages adding new features such as fliters and working with React Relay to fix bugs when updating odds on betting markets. In addition to this I also worked on the landing pages for the new Match 5 game ensuring the pages were highly optimised for SEO.</p><p>After impressing in the presentation team I was moved to the transactions team to work on more complex parts of the SKy Bet website such as cashouts, acca freeze and bet tracking. This meant working with a variety of API's to request cashout prices, odds and data on in-play events. This was done using both React and PHP. Working in the transactions team also allowed me to improve my dev ops skills particularly in Docker and Kubernetes.</p>",
    },
  },
  {
    id: "betfair",
    title: "Betfair",
    categories: "React Native, Redux, Node JS, Chef",
    thumb: "/projects/logos/bf.png",
    logo: "/projects/logos/bf.png",
    images: ["/projects/betfair.png"],
    website: "https://bit.ly/3w7Lakd",
    content: {
      title: "Details",
      content:
        "<p>At my current employer Flutter I have worked on the new Betfair website and apps. This meant working in React Native and Node JS to fix bugs in the Bet Fair code base and make changes to prepare the codebase to be used for Sky Bet too.</p><p>Due to the Sky Bet website and apps being built from the same code base as Betfair I implemented a way of differentiating between the 2 brands by using Chef to server a file onto the different servers for Betfair and Sky Bet. This file was then added to the Redux store so features can be toggled across the 2 brands to ensure that they feel unique and different from each other.</p>",
    },
  },
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
        "<p>Currently a work in progress, this project is inspired by the hundreds of hours lost to not knowing what to watch on tv every night, my current project is using the Movie DB API to pull in the latest movies and tv shows along with their IMDB rating.</p><p>This project is currently aiding me in expanding my knowledge in NextJs and React and try out different techniques and ways of building sites in NextJs to help find my style of coding in the framework.</p><p>Filters aand share functionality is to be added to this project in the near future.</p><p>To build this project I&apos;m using NextJs and Tailwind CSS. Checkout the project using the links above!</p>",
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
    content: {
      title: "Details",
      content:
        "<p>Headless CMS is a project to demonstrate how October Cms can be used as a Headless CMS with NextJs. October Cms manages the pages, blog posts and menus whilst NextJs powers the site for visitors.</p><p>The inspiration behind this project was to see how easy it would be to use NextJs on work projects and how much functionality will require extra development on top of what NextJs already offers.</p><p>The outcome of this project is very promising, the content block building that was previosuly done in Ocotber Cms was quite simple to replicate and is a much cleaner build in NextJs. One area that needs further development is how October Cms snippets and be built in NextJS as in Ocotber Cms these rely on a snippet parsing tool to decipher what snippet is to be loaded along with the correct frontend markup.</p><p>To build this project I&apos;m using NextJs, Redux, October CMS, and Tailwind CSS. Checkout the project using the links above!</p>",
    },
  },
  {
    id: "mercedes",
    title: "Mercedes Benz UK Careers",
    categories: "October Cms, Twig",
    thumb: "/projects/logos/mercedes.png",
    logo: "/projects/logos/mercedes.png",
    images: ["/projects/mercedes-desktop.jpg"],
    website: "https://bit.ly/44VQ7cq",
    content: {
      title: "Details",
      content:
        "<p>Whilst working for Rejuvenate Digital I was the lead developer on a project for Mercedes Benz. I was tasked with building a careers website fully managable from a CMS. Another criteria of the website was to ensure the Mercedes brand guidlines were followed closely and that the website performed well on page speed and SEO.</p><p>As the design for this website was very image driven I spent time experimenting with how best to load images by adjusting image qualities, sizes and lazy load optimization. Lazy loading images using interactive observer and building twig filters to replace images with webp versions when content has been added via richeditors was key to loading images well along with getting a good page speed score.</p><p>Entrance animations using interactive observer to detect when an element was in view and css transitions and animations were used to animate the elements.</p><p>At the time of launch the website's score on Google's Lighthouse page speed test was 96/100 and had an SEO score of 100/100.</p><p>This project was built solely using October CMS.</p>",
    },
  },
  {
    id: "surridge",
    title: "Surridge Sport",
    categories: "October Cms, Twig, E-commerce, Franchising",
    thumb: "/projects/logos/surridge.png",
    logo: "/projects/logos/surridge.png",
    images: ["/projects/surridge-desktop.png"],
    website: "https://bit.ly/3O8vNi7",
    content: {
      title: "Details",
      content:
        "<p>Whilst working at Rejuvenate Digital I was the lead developer on a huge project for Surridge Sport. The brief for this project was to build a full e-commerce website that has webshops which act as their own websites in their own right and can be created by the client using the CMS.</p><p>This is the biggest website I had built so made sure to be heavily involved in planning and client meetings to make sure that each feature of the website was built exactly to the clients needs as efficiently as possible.</p><p>With this project one of the complications was the variety of different ways items could be purchased and customised. On a product page a user can pick different sizes of products, along with extra stockcodes for trims and customisations what may have been selected by the customer or applied to the product in the admin area. Personalisations for products was also a requirement so a customer could add their initial of a number to a product. Finally bundles of products could also be purchased.</p><p>Plannig these features out carefully was vital to making sure the website worked well for the client whilst also structuring the code well so it wasn't too complicated for other developers to work on in the future.</p><p>To do this I built a franchsing plugin which can apply a global scope to a model so the correct data is loaded from the database.</p><p>This project was built solely using October CMS.</p>",
    },
  },
  {
    id: "sanctuary",
    title: "Sanctuary Bathrooms",
    categories: "October Cms, E-commerce",
    thumb: "/projects/logos/sanctuary.png",
    logo: "/projects/logos/sanctuary.png",
    images: ["/projects/sanctuary-desktop.png"],
    website: "https://bit.ly/3O9zWlU",
    content: {
      title: "Details",
      content:
        "<p>The final project I lead development on at Rejuvenate Digital is a rebuild of the Snactuary Bathrooms website, a site I built over 8 years previously. The main need for a new website was to upgrade to a new CMS system and improve on page speed to help improve organic traffic to the website.</p><p>When the previous Sanctuary Bathrooms website site launch there was a large increase in traffic to the website and the conversion rate also improved so preserving and improving this has been vital to the new website.</p><p>Analysing how their existing website was used by customers was important to planning the new website and optimizing buying journeys.</p><p>Making better use of Algolia Search has already led to better load times and by using a queue system to push updates to algolia has lead to a better experience for the client managing their products.</p><p>To achieve the goals of this project I used the latest version of October CMS and techinques to improve page speed I had previous used on the Mercedez Benz project.</p>",
    },
  },
  {
    id: "rightfuelcard",
    title: "Right Fuel Card",
    categories: "October Cms, Google Maps",
    thumb: "/projects/logos/rfc.png",
    logo: "/projects/logos/rfc.png",
    images: ["/projects/rfc-desktop.png"],
    website: "https://bit.ly/3MrLn7f",
    content: {
      title: "Details",
      content:
        "<p>Right Fuel Card is a project I was lead developer on at Rejuvenate Digital. The aim of this project was to deliver a new modern, fast performing website which allows users to apply for a fuel card. An integration to the Pipe Drive API was required to allow the staff at Right Fuel Card to manage the applications in their CRM.</p><p>The biggest part of this project was the application to apply for a fuelcard. This is a multi-step process that required different variations of the form to load depending on the users answers. A/B testing was also done when this project was put into production to optimize the application process and reduce the amount of users abandoning the form.</p><p>The outcome of this project was a success as the improvement in page speed and the application form  compared to their previous website lead to an increase in applicants for fuel cards.</p><p>This project was built solely using October CMS.</p>",
    },
  },
  {
    id: "gf",
    title: "Kinq",
    categories: "React, Next.js",
    thumb: "/projects/logos/gf.png",
    logo: "/projects/logos/gf.png",
    images: ["/projects/gf-desktop.png"],
    website: "https://bit.ly/3W3wJWH",
    content: {
      title: "Details",
      content:
        "<p>At Rejuvenate Digital I was a key part of the development team on the buidling of a new social media platform. The platform allows users to post content, follow users and chat whilst having different types of account which allow restrict features. Safe guarding features to prevent underage access and content have also been implemented in this project.</p><p>This project isn't in production yet, however a signup form to gain users before the website is launch has been built in NextJs and can be visited using the link above.</p><p>This project was built solely using NextJs, Redux, Laravel and Laravel Nova.</p>",
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
        "<p>Back in 2015 my employers Rejuvenate Digital made the decision to move to working on October Cms for new website builds. This meant plugins needed to be built that we could build our websites with. One of these plugins was an enquiries plugin. However after two year of building websites in October Cms it was noticable that a lot of time as being spent building contact forms due to the inflexibility of the enquiries plugin.</p><p>This lead me to experiment at home with a new form builder plugin which would be much more flexible and allow administrators to build forms for themselves. This meant allowing the choice of different types of form fields such as text inputs, dropdowns, checkbox, file uploads and several others. The ability to send out emails and sign up to mailing lists was also implemented in the plugin.</p><p>Once this plugin was finished I presented it at work and made some minor adjustments before usings it on work projects. Since it's launch it has been hugely successful in reducing time on projects and reducing the amount code needed to build forms on projects. The form builder plugin also helped with simple third part integrations as extending the plugins for each project was much easier than the previous plugin we used.</p><p>The form builder plugin code can be found in my GitHub using the link above!</p>",
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
        "<p>Whilst planning the Surridge Sport website to build the webshop system it became clear that we needed a way for resticting database records to spectific webshops whilst also having other data be accessible across all webshops. For example the products on each webshop needed to be unique from each other but the user accounts needed to be the same across all webshops. To achieve this I built a franchising plugin where an administrator could build webshops and then manage each of these.</p><p>The franchsing plugin uses the host to determine which webshop to load. Then a behaviour is applied to models that need to be &apos;franchised&apos; so the correct records load.</p><p>This plugin aidied in the success of the Surridge Sport project, the code for this plugin can be found in my GitHub using the link above!",
    },
  },
];

export default projects;
