import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import PageCalendar from '../Emploi/PageCalendar';

function App() {
  return (
    <div>
      <Router>

      
       <Routes>
                <Route exact path="/" element={<PageCalendar />} />
                
              </Routes>
        </Router>
                 
    </div>
    
  );
}

export default App;
