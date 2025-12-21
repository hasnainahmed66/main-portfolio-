import React from 'react';
import Hero from './Hero';
import IdeaCTA from './IdeaCTA';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <IdeaCTA />
    </div>
  );
};

export default Home;