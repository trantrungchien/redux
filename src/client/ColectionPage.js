import React from 'react'

const ColectionPage = () => {
  return (
    <section aria-labelledby="collections-heading" className="bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 id="collections-heading" className="text-2xl font-extrabold text-gray-900">Collections</h2>
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="#">
                <span className="absolute inset-0" />
                Desk and Office
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
          </div>
          <div className="group relative">
            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full h-full object-center object-cover" />
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
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full h-full object-center object-cover" />
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
  )
}

export default ColectionPage