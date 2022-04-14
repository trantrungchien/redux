import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../features/Product/ProductSlice';

const ProductPage = () => {
  const product = useSelector(data => data.product.value)
  useEffect(() => {
    dispash(listProducts())


  }, []);
  const dispash = useDispatch()
  return (

    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Danh Mục Sản Phẩm</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

          {product?.map((item, index) => {
            return <div key={index}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img src={`${item.img}`} alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." className="w-full h-full object-center object-cover" />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                  
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                  <p className="relative text-lg font-semibold text-white">{item.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span className="sr-only">, Zip Tote Basket</span></a>
              </div>
            </div>

          })}

          {/* More products... */}
        </div>
      </div>
    </div>

  )
}

export default ProductPage