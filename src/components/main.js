import React, { lazy,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

//import Home from './Home';
const Home= lazy(()=> import('./Home'));

//import TreeList from '../pages/TreeList';
const TreeList= lazy(()=> import('../pages/TreeList'));


export default function Main(){
    return(
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route exact path="/" element= {<Home/>}/>
                    <Route path="/tree-structure" element= {<TreeList/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}
