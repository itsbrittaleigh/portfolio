import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="content">
      <section className="section">
        <h1><span aria-hidden>👋🏼</span> Hello, there!</h1>
        <p>
          I’m Britta Rodenbeck, a frontend engineer with a passion for crafting exceptional user experiences.
          With eight years in the dynamic world of web and software development, I’ve had the privilege of
          working with startups and small companies, contributing to innovative projects that marry form
          with function.
        </p>
        <p>
          My journey in frontend engineering started with a curiosity about the intersection of design,
          code, and ethics. Over the years, I’ve honed my skills in HTML, CSS, and JavaScript, and immersed
          myself in cutting-edge frameworks like React and Vue. What sets me apart is not just the code I
          write, but the thoughtfulness I bring to the user interface, ensuring it not only meets functional
          requirements but delights all users—regardless of age, ability, language, or connection speed.
        </p>
        <p>
          I am driven by the belief that technology should be a seamless extension of human experiences.
          Whether it is optimizing performance for a quicker user interface or diving into the intricacies
          of responsive design, I thrive on the challenges that frontend development presents. I see each
          project as an opportunity to create something not just visually appealing but also highly
          functional and user-centric.
        </p>
        <p>
          Having collaborated with diverse and distributed teams, I understand the importance of effective
          communication and teamwork in the design and development process. I bring not only technical
          expertise but also a collaborative spirit, valuing open dialogue and the exchange of  ideas that
          lead to innovative solutions.
        </p>
      </section>
      <section className="section">
        <h2><span aria-hidden>📚</span> Beyond the code</h2>
        <p>
          Away from the keyboard, you’ll find me hiking, biking, and camping in the warmer months and
          snuggling with my cat, a good library book, and hot chocolate in the colder ones. I am studying
          to become a certified sommelier, with my WSET 1 in hand and my WSET 2 scheduled for July 2024.
          I love exploring my new home city of Milwaukee, trying new bars and restaurants and finding
          which has the best cheese platter and curds.
        </p>
      </section>
      <section className="section">
        <h2><span aria-hidden>💻</span> Technical skills</h2>
        <p>
          Every engineer has their strengths and weaknesses. Below are the languages, frameworks, programs,
          etc. that I both excel with and—more importantly—love to work with.
        </p>
        <h3>JavaScript</h3>
        <ul className="skill-list skill-list--two-column">
          <li>JavaScript (ES6/ES7+)</li>
          <li>TypeScript</li>
          <li>React (Redux, Context API, React hooks)</li>
          <li>Vue (Vuex)</li>
          <li>GraphQL</li>
          <li>Next.js</li>
          <li>Gatsby</li>
          <li>Web components</li>
        </ul>
        <h3>CSS</h3>
        <ul className="skill-list skill-list--two-column">
          <li>CSS3</li>
          <li>Sass</li>
          <li>CSS / SVG animations</li>
          <li>Styled components</li>
          <li>CSS modules</li>
          <li>Material UI</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
        </ul>
        <h3>Testing</h3>
        <ul className="skill-list">
          <li>React Testing Library</li>
          <li>Jest</li>
          <li>Cypress</li>
        </ul>
        <h3>Design</h3>
        <ul className="skill-list">
          <li>Responsive design</li>
          <li>Figma</li>
          <li>Sketch</li>
        </ul>
        <h3>Platforms</h3>
        <ul className="skill-list skill-list--two-column">
          <li>Shopify (platform + Liquid)</li>
          <li>Salesforce</li>
          <li>GitHub</li>
          <li>Netlify</li>
          <li>Nx</li>
          <li>NPM / Yarn</li>
        </ul>
      </section>
      <section className="section">
        <h2><span aria-hidden>👯</span> Let's connect</h2>
        <p>
          I’m excited about the potential for meaningful collaborations and am always open to connecting
          with like-minded professionals. If you’re looking for a frontend engineer who combines
          technical proficiency with a passion for creating exceptional user experiences, or you’re
          looking for a friend to upgrade your Barefoot palette, let’s connect and explore the
          possibilities together.
        </p>
        <p>
          <span aria-hidden>👋🏼</span> Thank you for stopping by!
        </p>
      </section>
    </div>
  );
};

export default About;
