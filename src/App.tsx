import { CssVarsProvider } from '@mui/joy';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import PracticeForms from './pages/PracticeForms';

function App() {
  return (
    <CssVarsProvider>
      <Routes>
        <Route path="forms" element={<PracticeForms />} />
        <Route path="*" element={<Navigate to="forms" />} />
      </Routes>
    </CssVarsProvider>
  );
}

export default App;
