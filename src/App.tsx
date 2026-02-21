/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Portfolio from './components/Portfolio';
import Events from './components/Events';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <Mission />
        <Programs />
        <Portfolio />
        <Events />
        <Videos />
        <Testimonials />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
