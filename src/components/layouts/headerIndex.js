import React from 'react'

const HeaderIndex = () => {
  return (
    <header className="relative z-10">
    <nav aria-label="Top">
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
          <form className="hidden lg:block lg:flex-1">
          </form>
          <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
            Get free delivery on orders over $100
          </p>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <a href="#" className="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
            <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
            <a href="#" className="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              <div className="hidden lg:flex lg:items-center">
                <a href="#">
                  
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt />
                </a>
              </div>
              <div className="hidden h-full lg:flex">
                <div className="ml-8">
                  <div className="h-full flex justify-center space-x-8">
                    <div className="flex">
                      <div className="relative flex">
                        <a href='/ProducPage' type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                          Women
                        </a>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="relative flex">
                        <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px" aria-expanded="false">
                          Men
                        </button>
                      </div>
                     
                    </div>
                    <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
                    <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center lg:hidden">
                <button type="button" className="-ml-2 bg-white p-2 rounded-md text-gray-400">
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </a>
              </div>
              <a href="#" className="lg:hidden">
                <span className="sr-only">Workflow</span>
                <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt className="h-8 w-auto" />
              </a>
              <div className="flex-1 flex items-center justify-end">
                <div className="flex items-center lg:ml-8">
                  <div className="flex space-x-8">
                    <div className="hidden lg:flex">
                      <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Search</span>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </a>
                    </div>
                    <div className="flex">
                      <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Account</span>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />
                  <div className="flow-root">
                    <a href="#" className="group -m-2 p-2 flex items-center">
                      <svg className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default HeaderIndex