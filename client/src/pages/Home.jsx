import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import WhyUs from '../components/WhyUs'
import MarketDemand from '../components/MarketDemand'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Vision from '../components/Vision'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tiwari Building Materials | Building Strong Foundations | Alwar, Rajasthan</title>
        <meta name="description" content="Tiwari Building Materials - 23+ years trusted supplier of Bajri, Rodhi, Bricks & Concrete in Alwar, Rajasthan. Quality materials, timely delivery." />
        <meta property="og:title" content="Tiwari Building Materials | Alwar, Rajasthan" />
        <meta property="og:description" content="Quality construction materials supplier in Alwar. 23+ years of trusted service." />
        <link rel="canonical" href="https://tiwaribuildingmaterials.com/" />
      </Helmet>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyUs />
      <MarketDemand />
      <Team />
      <Testimonials />
      <Vision />
      <ContactSection />
    </>
  )
}
