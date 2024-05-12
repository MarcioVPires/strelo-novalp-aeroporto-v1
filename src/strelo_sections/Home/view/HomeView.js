import ScrollProgress from 'src/components/scroll-progress';

import {
  Cases,
  ControlPainel,
  DigitalStrategy,
  Hero,
  OurProcess,
  Products,
  Services,
} from '../index';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Services />
      <Products />
      <ControlPainel />
      <OurProcess />
      <DigitalStrategy />
      <Cases />
    </>
  );
}
