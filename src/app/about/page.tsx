import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <section className='hero' style={{backgroundImage: "url('/images/')"}}>
      <Image 
        src="/images/cover-2-1024x576.png" 
        alt="Solar Products" 
        width={2000} 
        height={500} 
        />
      
    

            <div className='about-content'>
                <h2 className='fade-in'>About Us</h2>
                <p>

The solar category encompasses products and technologies that harness energy from the sun to generate electricity or heat. This includes solar panels, solar water heaters, solar batteries, and other photovoltaic (PV) systems. Solar energy is a renewable, eco-friendly solution that helps reduce reliance on fossil fuels and lowers electricity costs. With advancements in solar technology, efficiency and affordability have improved, making it a popular choice for residential, commercial, and industrial applications worldwide. </p>
            </div>
        </section>
      
    </div>
  )
}

export default About;
