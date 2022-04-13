import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';
import Listcategory from './admin/category/Listcategory';
import Addcategory from './admin/category/Addcategory';
import Updatecategory from './admin/category/Updatecategory';
import AddProducts from './admin/product/addProduct';
import ListProduct from './admin/product/listProduct';
import EditProduct from './admin/product/editProduct';
import HomePage from './client/HomePage';
import ProductPage from './client/ProductPage';
import WebsideLayout from './components/layouts/WebsideLayout';
import Signin from './client/auth/Signin';
import Signup from './client/auth/Signup';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='' element = {<WebsideLayout/>}>
            <Route index element={<HomePage />} />  
            <Route path='ProductPage'  element={<ProductPage/>}/>
           
          </Route>
          <Route path='signin' element={<Signin/>}/>
          <Route path='signup' element={<Signup/>}/>
          
          <Route path='admin' element={<AdminLayout />}>
            <Route path='product'>
              <Route index element={<ListProduct />} />
              <Route path='add' element={<AddProducts />} />
              <Route path=':id/update' element={<EditProduct />} />
            </Route>
            <Route>
              <Route path='category' element={<Listcategory />} />
              <Route path='category/add' element={<Addcategory />} />
              <Route path='category/:id/update' element={<Updatecategory />} />
            </Route>
          </Route>
          
       


      </Routes>

    </div>

  );
}

export default App;
