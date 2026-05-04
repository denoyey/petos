import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#FFF5E1] text-[#4A2511] font-sans selection:bg-[#E86A10]/20 selection:text-[#2B1408]">
        <main className="flex-1">
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-sm text-[#E86A10] font-medium animate-pulse">Menyiapkan Kerenyahan...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;