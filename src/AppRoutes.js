import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

const LazyPost = React.lazy(() => import ('./pages/Post'));
const LazyImage = React.lazy(() => import ('./pages/Image'));
const LazyToDo = React.lazy(() => import ('./pages/ToDo'));
const LazyImageLimit = React.lazy(() => import ('./pages/ImageLimit'));

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<React.Suspense fallback='Please Wait, Post Content Loading.....'><LazyPost /></React.Suspense>}></Route>
              <Route path="images" element={<React.Suspense fallback='Please Wait, Image Content Loading.....'><LazyImage /></React.Suspense>}></Route>
              <Route path="images-limit" element={<React.Suspense fallback='Please Wait, Image Content Loading.....'><LazyImageLimit /></React.Suspense>}></Route>
              <Route path="todos" element={<React.Suspense fallback='Please Wait, ToDos Loading.....'><LazyToDo /></React.Suspense>}></Route>
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes