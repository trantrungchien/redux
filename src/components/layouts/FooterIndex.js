import React from 'react'

const FooterIndex = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
    <h2 id="footer-heading" className="sr-only">Footer</h2>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-200">
       
      
          <div className="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg" alt className="w-full h-full filter saturate-0 object-center object-cover" />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-90" />
            </div>
            <div className="relative max-w-sm mx-auto text-center">
              <h3 className="text-2xl font-extrabold tracking-tight text-white">Get early access</h3>
              <p className="mt-2 text-gray-200">
                Did you sign up to the newsletter? If so, use the keyword we sent you to get access. <a href="#" className="font-bold text-white whitespace-nowrap hover:text-gray-200">Go now<span aria-hidden="true"> →</span></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">© 2021 All Rights Reserved</p>
        </div>
        <div className="mt-4 flex items-center justify-center md:mt-0">
          <div className="flex space-x-8">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
              Accessibility
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
              Terms
            </a>
          </div>
          <div className="ml-6 border-l border-gray-200 pl-6">
            <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">
              <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt className="w-5 h-auto flex-shrink-0" />
              <span className="ml-3 text-sm">
                Change
              </span>
              <span className="sr-only">location and currency</span>
            </a>
          </div>
        </div>
      </div>
  </footer>
  )
}

export default FooterIndex