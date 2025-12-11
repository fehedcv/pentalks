import Hero from '../Hero';
import WhatIsPentalks from '../WhatIsPentalks';
import Philosophy from '../Philiosophy';
import BrandHighlights from '../BrandHlghlights';
import ProcessSection from '../ProcessSection';
import Testimonials from '../Testimonials';
import ClientLogos from '../ClientLogos';
import CTASection from '../CTASection';

const Home = () => (
  <div className="animate-fade-in">
    <Hero />
    <WhatIsPentalks />
    <ProcessSection />
    <BrandHighlights />
    <Testimonials />
    <ClientLogos />
    <Philosophy />
    <CTASection />
  </div>
);

export default Home;
