// App.tsx
import { Routes, Route } from 'react-router-dom';
import HeaderBox from './HeaderBox';
import SearchResults from './pages/SearchResults';
import Home from './components/Home'; // adjust the path if needed

function App() {
  return (
    <>
      <HeaderBox />
      <Routes>
        <Route path="/search" element={<SearchResults />} />
        
       
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
