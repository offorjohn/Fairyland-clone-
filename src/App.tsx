// App.tsx
import { Routes, Route } from 'react-router-dom';
import HeaderBox from './HeaderBox';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
      <HeaderBox />
      <Routes>
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
