import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../features/Product/ProductSlice';

const HomePage = () => {
  const product = useSelector(data => data.product.value)
  const dispash = useDispatch()
  useEffect(() => {
    dispash(listProducts())


  }, []);
  return (
    <div className="bg-white">
      {/* header */}


      <main>
        {/* Hero  banerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr*/}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">

          <div className="relative">
            <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block" />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">Focus on what matters</h1>
                    <p className="mt-4 text-xl text-gray-600">All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card.</p>
                    <div className="mt-6">
                      <a href="#" className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700">Shop Productivity</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
              <img src="https://res.cloudinary.com/fpta2/image/upload/v1649761052/ads4_v9jcms.jpg" alt className="w-full h-full	 object-center object-cover" />
            </div>
          </div>
        </div>
        {/* Trending products------------------------------------------------------------------------------------------ */}
        <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Sản Phẩm</h2>
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
              <div className="mt-12 px-4 sm:hidden">
              <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">See everything<span aria-hidden="true"> →</span></a>
            </div>
            </div>

          })}

          {/* More products... */}
        </div>
      </div>
    </div>
           
          
        {/* Collections */}
        <section aria-labelledby="collections-heading" className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 id="collections-heading" className="text-2xl font-extrabold text-gray-900">Sản Phẩm Liên Quan</h2>
              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                <div className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="https://res.cloudinary.com/fpta2/image/upload/v1649922100/ads5_xrtsrq.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0" />
                      X Ghosted Peregrine Speed
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
                </div>
                <div className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="https://res.cloudinary.com/fpta2/image/upload/v1649922101/ad7_en1rdh.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full h-full object-center object-cover" />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Self-Improvement
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
                </div>
                <div className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="https://res.cloudinary.com/fpta2/image/upload/v1649761053/adidas1_milvci.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full h-full object-center object-cover" />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Travel
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg" alt className="w-full h-full object-center object-cover" />
            </div>
            <div className="absolute inset-0 bg-white bg-opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
          </div>
          <section aria-labelledby="sale-heading" className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:max-w-none">
              <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Get 25% off during our one-time sale
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
              <a href="#" className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto">Get access to our one-time sale</a>
            </div>
          </section>
          <section aria-labelledby="testimonial-heading" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8">
            <div className="max-w-2xl mx-auto lg:max-w-none">
              <h2 id="testimonial-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">What are people saying?</h2>
              <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <blockquote className="sm:flex lg:block">
                  <svg width={24} height={18} viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                    <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                  </svg>
                  <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                    <p className="text-lg text-gray-600">
                      My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!
                    </p>
                    <cite className="mt-4 block font-semibold not-italic text-gray-900">
                      Sarah Peters, New Orleans
                    </cite>
                  </div>
                </blockquote>
                <blockquote className="sm:flex lg:block">
                  <svg width={24} height={18} viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                    <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                  </svg>
                  <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                    <p className="text-lg text-gray-600">
                      I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!
                    </p>
                    <cite className="mt-4 block font-semibold not-italic text-gray-900">
                      Kelly McPherson, Chicago
                    </cite>
                  </div>
                </blockquote>
                <blockquote className="sm:flex lg:block">
                  <svg width={24} height={18} viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 text-gray-300">
                    <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                  </svg>
                  <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                    <p className="text-lg text-gray-600">
                      Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.
                    </p>
                    <cite className="mt-4 block font-semibold not-italic text-gray-900">
                      Chris Paul, Phoenix
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>





  )
}

export default HomePage