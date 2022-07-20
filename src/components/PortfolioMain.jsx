import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomeTodo from './HomeTodo';

const PortfolioMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeTodo />} />
        <Route path='*' element={'Error 404'} />
      </Route>
    </Routes>
  );
};

export default PortfolioMain;
