
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumePage from '@/pages/ResumePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ResumePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
