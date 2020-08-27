import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className='container mx-auto h-full'>
      
        <header className="flex justify-center mt-3">
          <SearchBar/>
        </header>
      </div>
    </div>
  );
}

export default App;
