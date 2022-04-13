import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCategorys } from '../../features/Category/categorySlice' 
import { toast,ToastContainer } from 'react-toastify'
const Addcategory = () => {
    const { register, handleSubmit} = useForm()
    const notify = ()=> toast("Them Thanh Cong") 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSubmit = data => {
        dispatch(addCategorys(data))
        notify()
      
    }


    return (
        <div className="mt-10 sm:mt-0">
            <ToastContainer/>
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
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Them Danh Muc San Pham</label>

                                        <input type="text"{...register('name',{required:true})} className="mt-1 focus:ring-indigo-500 border-indigo-500 block w-full shadow-none p-3 mb-5 bg-light rounded sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Them</button>
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

export default Addcategory