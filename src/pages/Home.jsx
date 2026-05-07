import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import ConsultBanner from '../components/sections/ConsultBanner';
import AnalyticsSection from '../components/sections/AnalyticsSection';
import PricingSection from '../components/sections/PricingSection';
import CasesSection from '../components/sections/CasesSection';
import CoreFunctionsSection from '../components/sections/CoreFunctionsSection';
import ProductsSection from '../components/sections/ProductsSection';
import RecruitSection from '../components/sections/RecruitSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ConsultBanner />
      <AnalyticsSection />
      <PricingSection />
      <CasesSection />
      <CoreFunctionsSection />
      <ProductsSection />
      <RecruitSection />
    </>
  );
};

export default Home;
