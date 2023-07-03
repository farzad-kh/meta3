
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Home = () => (
  <div>

    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03' />
      <Explore />
    </div>
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />

  </div>
);

export default Home;
