import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Addimage } from './Component/add image/addimage';
import { Dashboard } from './Component/dashboard/dashboard';
import { Singleimage } from './Component/single data/singledata';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Update } from './Component/Update & delete/update';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/addimage' element={<Addimage/>} />
          <Route path='/singleimage/:id' element={<Singleimage/>} />
          <Route path='/updateimage/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
