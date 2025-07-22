
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumePage from '@/pages/ResumePage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ResumePage />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
