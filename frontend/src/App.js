import React from 'react';
import NavBar from './components/NavBar';
//import SearchBar from './components/SearchBar';
//import resultSearchBar from './components/resultSearchBar';
<<<<<<< HEAD
import SearchBox from './components/search/searchbox';
//import AutoComplete from './components/search/AutoComplete';
=======
import FooterBar from './components/footer';
>>>>>>> backend

function App() {
  return (
    <>
    <div className=" max-h-screen bg-gray-100" style={{
      backgroundImage: `url("https://images.pexels.com/photos/2414036/pexels-photo-2414036.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260&q=80")`,
      //backgroundPosition: 'auto',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '600px'
    }}>
      <NavBar />
      <div className='container mx-auto h-full'>      
        <header className="flex justify-center mt-3">
<<<<<<< HEAD
          <SearchBox/>
          
        </header>
      </div>
=======
          <SearchBar/>
          {/* <resultSearchBar /> */}          
        </header>        
      </div>  
>>>>>>> backend
    </div>
    <FooterBar/>
    </>
  );
}

export default App;
