import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BackToTop from './components/BackToTop';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-petos-light-cream text-petos-brown font-sans selection:bg-petos-orange/20 selection:text-petos-dark-brown">
        <main className="flex-1">
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-sm text-petos-orange font-medium animate-pulse">Menyiapkan Kerenyahan...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
          <BackToTop />
        </main>
      </div>
    </Router>
  );
}
export default App;
