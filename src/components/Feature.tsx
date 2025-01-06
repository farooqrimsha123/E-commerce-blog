import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover: translate-y-[-5px] hover:text-black text-red-600'>
        Rimsha Solar Dynamics Blog: Exploring Solar Innovations & Sustainable Energy!
        </h2>
        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
        Rimsha Solar Dynamics Blog is a dedicated platform exploring the latest innovations, trends, and advancements in solar energy and sustainable technology. Covering topics like solar power systems, renewable energy solutions, and eco-friendly innovations, this blog aims to educate and inspire readers to embrace a greener future.
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'> Exploring Our Categories </h1>
<div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
 {[
  "Monocrystalline Solar Panels",
  "Polycrystalline Solar Panels",
  "Thin-Film Solar Panels",
  "PERC (Passivated Emitter and Rear Cell) Solar Panels",
  "Bifacial Solar Panels ",
 ].map((category, index) =>(
  <div key = {index}
   className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex-items-center justify-center text-neutral-600'
   > 
   <p className='text-center text-lg font-semibold'>{category}</p>
    <div className='absolute inset-0-border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'>
      </div>
   </div>
 ))}
 </div>
  </div>
      <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>
The solar category encompasses products and technologies that harness energy from the sun to generate electricity or heat. This includes solar panels, solar water heaters, solar batteries, and other photovoltaic (PV) systems. Solar energy is a renewable, eco-friendly solution that helps reduce reliance on fossil fuels and lowers electricity costs. With advancements in solar technology, efficiency and affordability have improved, making it a popular choice for residential, commercial, and industrial applications worldwide.
</p>
  </section>
  </div>
  );
}
