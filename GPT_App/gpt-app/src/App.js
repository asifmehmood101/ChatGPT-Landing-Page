import './App.css';
import { Main, UseCases } from './Pages';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='use-cases' element={<UseCases />} />
    </Routes>
  );
}

export default App;
