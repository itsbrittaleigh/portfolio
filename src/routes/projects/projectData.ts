export interface IAcknowledgement {
  name: string;
  role: string;
  website?: string;
}

export interface IProject {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  overview: string;
  role?: string;
  technologies: string[];
  acknowledgements: IAcknowledgement[];
}

export const clientProjects: IProject[] = [
  {
    title: 'Invest Detroit 25',
    description: 'In 2020, Invest Detroit celebrated 25 years of commitment to sparking economic growth in Detroit.',
    githubLink: 'https://github.com/itsbrittaleigh/invest-detroit',
    liveLink: 'https://investdetroit25.com',
    overview: 'As the web developer for Invest Detroit\'s 25th-anniversary celebration in 2020, I played a pivotal role in bringing the organization\'s rich history to life online by explaining their story, their impact, and their future goals. Using technologies such as React along with SCSS for styling and Yarn for package management, I transformed the client\'s vision into a dynamic and engaging web experience. Collaborating closely with a UI designer who crafted static mockups in Adobe Illustrator, I ensured a seamless translation of design to code. Some of the standout features of the project were the implementation of smooth fade animations triggered by page scroll and interactive charts, adding a touch of sophistication to the user experience. Throughout the one-month development timeline, I navigated multiple iterations of feedback from both the UI designer and the client, refining the website to perfectly encapsulate Invest Detroit\'s 25 years of dedicated economic growth in Detroit.',
    role: 'I was responsible for all web development, analytics setup, and site deployment. Web development was based on client expectations and designer mockups in Adobe Illustrator.',
    technologies: ['React', 'Create React App', 'SCSS', 'Netlify', 'Recharts', 'React Router', 'Yarn', 'Adobe Illustrator'],
    acknowledgements: [
      {
        name: 'Jason Willis',
        role: 'UI Designer',
        website: 'https://www.jmwcreative.com/'
      }
    ],
  },
  {
    title: 'Nova Remedy',
    description: 'Nova Remedy wants to make the world of digital therapeutics more human through personalized programs of health.',
    githubLink: 'https://github.com/itsbrittaleigh/nova-remedy-marketing',
    liveLink: 'https://elastic-euler-338930.netlify.app/',
    overview: 'In my role as a web developer for Nova Remedy, I contributed to revolutionizing the digital therapeutics landscape by creating a user-centric website that delivered personalized health programs. Employing Vue.js, Nuxt, and SCSS, I navigated a two-month development timeline to seamlessly integrate a health assessment module linking to the Teachable platform. Notably, all content, including text, images, and videos, was dynamically managed through Netlify CMS, enhancing the platform\'s flexibility. A standout feature was the implementation of a language toggle, allowing users to seamlessly switch between English and Chinese, fostering inclusivity and accessibility in exploring Nova Remedy\'s transformative health solutions.',
    role: 'I was responsible for all web development, analytics setup, CMS setup, and site deployment. Web development was based on client expectations and designer mockups in Adobe Photoshop.',
    technologies: ['Vue', 'Nuxt', 'Netlify CMS', 'SCSS'],
    acknowledgements: [
      {
        name: 'Jason Willis',
        role: 'UI Designer',
        website: 'https://www.jmwcreative.com/'
      }
    ],
  },
  {
    title: 'City Side Ventures',
    description: 'City Side Ventures is a driven venture group, creating and managing high-risk venture investment funds.',
    githubLink: 'https://github.com/itsbrittaleigh/city-side-ventures-marketing',
    liveLink: 'https://eager-mccarthy-6ea6b6.netlify.app/',
    overview: 'As the web developer for City Side Ventures, I played a pivotal role in crafting a dynamic online presence for this forward-thinking venture group specializing in high-risk investment funds. Utilizing Vue, Nuxt, and SCSS, I successfully executed the initial two-month development timeline, integrating Forestry.io to empower seamless content management for text, images, and videos. An additional two weeks were dedicated to transitioning from Forestry.io to Netlify CMS, optimizing the platform\'s efficiency and user experience. Notably, I implemented engaging CSS animations to enhance the user experience, reflecting City Side Ventures\'s innovative and dynamic approach to venture investments.',
    role: 'I was responsible for all web development, analytics setup, CMS setup, and site deployment. Web development was based on client expectations and designer mockups in Adobe Photoshop.',
    technologies: ['Vue', 'Nuxt', 'Netlify CMS', 'Forestry.io', 'SCSS'],
    acknowledgements: [
      {
        name: 'Jason Willis',
        role: 'UI Designer',
        website: 'https://www.jmwcreative.com/'
      }
    ],
  },
];

export const sideProjects: IProject[] = [
  {
    title: 'Pomodoro Timer',
    description: 'A simple 15-minute timer, meant to chunk work and facilitate breaks.',
    githubLink: 'https://github.com/itsbrittaleigh/pomodoro-timer',
    liveLink: 'https://stellular-speculoos-56f7f3.netlify.app/',
    overview: 'Designed as a productivity aid, this Pomodoro Timer is a minimalist 15-minute tool crafted with vanilla JS and CSS. Users can seamlessly start and stop the timer by clicking designated buttons, while a customizable timer length ensures flexibility. When the timer completes its cycle, a visual cue shifts from green to red, accompanied by a browser alert, making it an efficient and user-friendly tool for time management and work-break intervals.',
    technologies: ['Vanilla JavaScript', 'CSS'],
    acknowledgements: [],
  },
  {
    title: 'E-Commerce Component',
    description: 'Add items to your cart, change the quantities, and see your total, including tax.',
    githubLink: 'https://github.com/itsbrittaleigh/ecommerce-component',
    liveLink: 'https://melodic-arithmetic-3c485c.netlify.app/',
    overview: 'This React-based E-Commerce Component offers a seamless shopping experience, allowing users to effortlessly add plates to their cart, adjust quantities, and view real-time total costs, inclusive of Tennessee sales tax (0.0975). The intuitive interface displays the menu options on the left, dynamically updating the cart on the right. Smart functionalities include automatic subtotal and total updates upon item addition, prevention of negative quantities, and a user-friendly mechanism to delete items when quantities reach zero. When the cart is empty, a clear message ensures a straightforward and user-centric shopping interface. Built with React and vanilla CSS, this component embodies simplicity and efficiency for a smooth e-commerce interaction.',
    technologies: ['React', 'CSS'],
    acknowledgements: [],
  },
  {
    title: 'Piano',
    description: 'An SVG illustrated piano that plays audio when you click the keys.',
    githubLink: 'https://github.com/itsbrittaleigh/piano',
    liveLink: 'https://peppy-jelly-38b0c3.netlify.app/',
    overview: 'Experience the joy of music with this Vue-powered Interactive Piano, beautifully illustrated with SVG keys that come to life when clicked. The keyboard is perfectly centered on the page, and hovering over keys triggers a visual symphony. Enjoy seamless audio playback as you click keys, and relish the freedom to create harmonious melodies by clicking multiple keys successively without interrupting ongoing audio files. Built with Vue and styled with vanilla CSS, this project combines visual flair with musical interactivity for a delightful user experience.',
    technologies: ['Vue', 'CSS'],
    acknowledgements: [],
  },
];