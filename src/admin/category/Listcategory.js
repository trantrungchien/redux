import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getCategorys, removeCategorys } from '../../features/Category/categorySlice';

const Listcategory = () => {

    const category = useSelector(data => data.category.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategorys())

    }, []);
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                        <table className="min-w-full divide-y divide-gray-200 mt-10">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        STT
                                    </th>
                                    <th scope="col" className="px-6 py-3 text    text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {category?.map((item, index) => {
                                    return <tr>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <NavLink to={`/admin/category/${item.id}/update`} className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</NavLink>
                                            

                                            <span class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => dispatch(removeCategorys(item.id))} type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">                                 
                                                    Remove
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <a href="/admin/category/add" className="text-gray-300 bg-blue-700 hover:bg-black-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Thêm Danh Mục</a>
        </div>


    )
}

export default Listcategory