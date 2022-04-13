import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { getCategorys } from '../../features/Category/categorySlice'
import { addProducts } from '../../features/Product/ProductSlice'

const AddProduct = () => {
  const [img, setImg] = useState()
  const dispatch = useDispatch()
  const category = useSelector(data => data.category.value)
  useEffect(() => {
    dispatch(getCategorys())

  }, []);
  const { register, handleSubmit, formState: { erorrs }, reset } = useForm()
  const navigate = useNavigate()
  const onSubmit = data => {
    dispatch(addProducts({...data,img}))
    
    reset()
  }
  const InputImage = async (e)=>{
    const file = e.target.files[0];
          const CLOUDINARY_API = " https://api.cloudinary.com/v1_1/fpta2/image/upload";

          const formData = new FormData();

          formData.append("file", file);
          formData.append("upload_preset", "jn9dmgzr");

          // call api cloudinary

          const response = await axios.post(CLOUDINARY_API,formData, {
              headers: {
                  "Content-Type": "application/form-data",
              },
          });
          console.log(response.data.url);
          setImg(response.data.url)

  }
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Ten San Pham</label>
                    <input type="text" {...register('name', { required: true })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Gia San Pham</label>
                    <input type="text" {...register('price',{ required: true })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">So Luong</label>
                    <input type="text" {...register('quantity', { required: true })} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Category</label>
                    <select {...register('categoryId', { required: true })} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      {category?.map((item, index) => {
                        return <option key={index} value={`${item.id}`}>{item.name}</option>
                      })}
                    </select>
                  </div>

                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700"> Cover photo </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input onChange={InputImage} id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>



  )
}

export default AddProduct