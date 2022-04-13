import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { listOne } from '../../api/category'
import { updateCategorys } from '../../features/Category/categorySlice' 
const Updatecategory = () => {
    const { register, handleSubmit,reset} = useForm()
    const { id } = useParams()
    const dispatch = useDispatch()
    const onSubmit = data => {
        dispatch(updateCategorys(data))
      
    }
    useEffect(() => {
         const getOneCate = async () =>{
             const { data } = await listOne(id)
             reset(data)
         }
        getOneCate()
    }, []);


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
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Thêm Danh Mục Sản Phẩm</label>

                                        <input type="text"{...register('name',{required:true})} className="mt-1 focus:ring-indigo-500 border-indigo-500 block w-full shadow-none p-3 mb-5 bg-light rounded sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                        <button type="submit" className=" py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm</button>
                                    </div>
       

                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Updatecategory