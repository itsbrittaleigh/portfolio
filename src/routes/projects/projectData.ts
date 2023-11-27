export interface IProject {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

export const clientProjects: IProject[] = [
  {
    title: 'Invest Detroit 25',
    description: 'In 2020, Invest Detroit celebrated 25 years of commitment to sparking economic growth in Detroit.',
    githubLink: 'https://github.com/itsbrittaleigh/invest-detroit',
    liveLink: 'https://investdetroit25.com'
  },
  {
    title: 'Nova Remedy',
    description: 'Nova Remedy wants to make the world of digital therapeutics more human through personalized programs of health.',
    githubLink: 'https://github.com/itsbrittaleigh/nova-remedy-marketing',
    liveLink: 'https://elastic-euler-338930.netlify.app/'
  },
  {
    title: 'City Side Ventures',
    description: 'City Side Ventures is a driven venture group, creating and managing high-risk venture investment funds.',
    githubLink: 'https://github.com/itsbrittaleigh/city-side-ventures-marketing',
    liveLink: 'https://eager-mccarthy-6ea6b6.netlify.app/'
  },
];

export const sideProjects: IProject[] = [
  {
    title: 'Pomodoro Timer',
    description: 'A simple 15-minute timer, meant to chunk work and facilitate breaks.',
    githubLink: 'https://github.com/itsbrittaleigh/pomodoro-timer',
    liveLink: 'https://stellular-speculoos-56f7f3.netlify.app/'
  },
  {
    title: 'E-Commerce Component',
    description: 'Add items to your cart, change the quantities, and see your total, including tax.',
    githubLink: 'https://github.com/itsbrittaleigh/ecommerce-component',
    liveLink: 'https://melodic-arithmetic-3c485c.netlify.app/'
  },
  {
    title: 'Piano',
    description: 'An SVG illustrated piano that plays audio when you click the keys.',
    githubLink: 'https://github.com/itsbrittaleigh/piano',
    liveLink: 'https://peppy-jelly-38b0c3.netlify.app/'
  },
];