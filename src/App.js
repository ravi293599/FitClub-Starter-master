import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import Reason from './components/Reasons/Reason';
import Testimonials from './components/Testimonials/Testimonials';
import Plans from './Plans/Plans';
function App() {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
