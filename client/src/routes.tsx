import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import RegisterUser from './pages/RegisterUser';

function RoutePaths() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Landing /> }/>
                <Route path="/registerUser" element={ <RegisterUser /> }/>
                <Route path="/app" element={ <OrphanagesMap /> }/>
                <Route path="/orphanages/create" element={ <CreateOrphanage /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutePaths;