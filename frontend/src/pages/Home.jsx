import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProjectsPreview } from '../components/ProjectsPreview';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPreview />
      <Contact />
    </>
  );
}