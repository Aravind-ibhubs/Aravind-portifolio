import './App.scss';
import { Routes, Route , useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import partcles from './utills/partcles';

function App() {
  const Location = useLocation();
  console.log(Location);

  const renderParticlesForHome = Location.pathname === "/"

  const handleInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="App">
      {/* particles */}
      {
        renderParticlesForHome && <Particles id="particles" options={partcles} init={handleInit} />
      }

      {/* nav bar */}
      <Navbar />

      {/* main Page content*/}
      <div className='App__routes-page'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
