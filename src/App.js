import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ColdPressSection from './components/ColdPressSection';
import logo from './assets/logo.png';
import welcomeImage from './assets/welcome-image.jpg';
import welcomeVideo from './assets/welcome-video.mp4';

function App() {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 5000); // Show image for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-green-200">
      <Navbar />
      <section className="relative min-h-[400px] flex justify-center items-center overflow-hidden">
        {showImage ? (
          <img
            src={welcomeImage}
            alt="Welcome"
            className="w-full h-full object-cover absolute top-0 left-0"
            style={{ minHeight: '400px' }}
          />
        ) : (
          <video
            src={welcomeVideo}
            autoPlay
            muted
            controls={false}
            className="w-full h-full object-cover absolute top-0 left-0"
            style={{ minHeight: '400px' }}
          />
        )}
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-5xl font-extrabold text-green-100 mb-4 drop-shadow">
            Welcome to GramaSethu organic farms
          </h1>
          <img src={logo} alt="Grama Sethu Logo" className="w-10 h-auto mx-auto mt-4" />
          <p className="text-xl text-yellow-100 max-w-xl mb-6 mx-auto">
            🌿 A Bridge Between Farmers and You — Pure Organic Goodness Delivered Fresh!
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow">
            Shop Now
          </button>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>
      </section>

      {/* Add other sections below */}
      <ColdPressSection />
    </div>
  );
}

export default App;