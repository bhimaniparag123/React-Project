import './App.css'
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Category from './Components/Category';
import PromoCard from './Components/PromoCard';
import FlavorsSlider from './Components/FlavorsSlider';
import MatchaSection from './Components/MatchaSection';
import ProductCard from './Components/ProductCard';
import IceCreamShowcase from './Components/IceCreamShowcase';
import StatsSection from './Components/StatsSection';
import ClientSection from './Components/ClientSection'
import BlogUpdates from './Components/BlogUpdates';
import Footer from './Components/Footer'; 

import {} from 'react-bootstrap';
// import 'bootstrap/dist/js/bootstrap.min.js';


function App() {

  return (
    <>
      <Header />
      <Carousel />
      <Category />
      <PromoCard />
      <FlavorsSlider />
      <MatchaSection />
      <ProductCard />
      <IceCreamShowcase />
      <StatsSection />
      <ClientSection />
      <BlogUpdates />
      <Footer />
    </>
  )
}

export default App
