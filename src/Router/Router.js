import React from 'react'
import {
    BrowserRouter as Browser,
    Routes,
    Route,
} from "react-router-dom";
import Detail from '../Pages/Detail';
import CariMobil from '../Pages/CariMobil';
import Result from '../Pages/Result';

const RouterPages = () => {
  return (
    <div>
        <Browser>
            <Routes>
                <Route path="/" element={<CariMobil/>}></Route>
            </Routes>

            <Routes>
                <Route path="/cari" element={<Result/>}></Route>
            </Routes>
            
            <Routes>
                <Route path="cari/detail/:id" element={<Detail/>}></Route>
            </Routes>
        </Browser>
    </div>
  )
}

export default RouterPages