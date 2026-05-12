import { Download, MapPin, Smartphone, Shield, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1741997246403-9607826b51b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    'https://images.unsplash.com/photo-1741997246381-45664956ea4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    'https://images.unsplash.com/photo-1741996951019-a041d0477c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    'https://images.unsplash.com/photo-1741996951192-f4762170f3cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    'https://images.unsplash.com/photo-1741996950906-5faf36413669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);``
  }, []);

  const handleDownload = () => {
    // Replace this URL with your actual APK file path
    const apkUrl = "/prototype/PotholeDetector.apk";
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'PotholeDetector.apk';
    link.click();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center gap-2">
            <MapPin className="w-8 h-8 text-indigo-400" />
            <h1 className="text-2xl font-bold text-white">Pothole Detector</h1>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-600 rounded-3xl mb-6 shadow-lg">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Detect Potholes Instantly
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Advanced AI-powered mobile app that identifies and reports potholes in real-time,
              making roads safer for everyone.
            </p>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Download className="w-6 h-6" />
              Download APK
            </button>

            <p className="text-sm text-gray-300 mt-4">
              Version 1.0 • Android 8.0+ • 25 MB
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy to Use
              </h3>
              <p className="text-gray-600">
                Simple interface that works seamlessly. Just open the app and start detecting potholes on your route.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time Detection
              </h3>
              <p className="text-gray-600">
                Powered by advanced AI algorithms that identify potholes instantly with high accuracy.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                Help improve road safety by contributing to a community-driven database of pothole locations.
              </p>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="mt-20 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation Instructions</h3>
            <ol className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="font-semibold text-indigo-600">1.</span>
                <span>Enable "Install from Unknown Sources" in your Android settings</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-indigo-600">2.</span>
                <span>Download the APK file by clicking the button above</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-indigo-600">3.</span>
                <span>Open the downloaded file and follow the installation prompts</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-indigo-600">4.</span>
                <span>Launch the app and grant necessary permissions for camera access</span>
              </li>
            </ol>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-300">
          <p>&copy; 2026 Pothole Detector. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}