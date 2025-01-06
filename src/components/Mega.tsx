import React from 'react';
import BlogCard from '../components/BlogCard';
import { title } from 'process';

export default function Mega() {
   const posts = [
    
    {
      id:'1',
      title:"Monocrystalline Solar Panels",
      description:"These panels are made from a single crystal structure, making them highly efficient and durable. They perform well in low-light conditions and have a sleek black appearance, but they tend to be more expensive.",

      date:'2024-12-29',
      image:'../images/download (11).jpeg'
    },
    {
      id:'2',
      title:'Polycrystalline Solar Panels',
      description:'Composed of multiple silicon fragments, these panels are more affordable but slightly less efficient than monocrystalline ones. They have a bluish hue and work well for residential and commercial installations.',
      date:'2024-12-29',
      image:'../images/images (3).jpeg'
    },
    {
      id:'3',
      title:'Thin-Film Solar Panels',
      description:'Lightweight and flexible, these panels are ideal for portable applications and large-scale solar farms. They are less efficient than crystalline panels but work well in varied lighting conditions.',
      date:'2024-12-29',
      image:'../images/download (10).jpeg'
    },
    {
      id:'4',
      title:'PERC (Passivated Emitter and Rear Cell) Solar Panels',
      description:'An improved version of monocrystalline panels, PERC technology enhances efficiency by reflecting unused sunlight back into the cell. These panels are great for maximizing energy production.',
      date:'2024-12-29',
      image:'../images/download (9).jpeg'
    },
    {
      id:'5',
      title:'Bifacial Solar Panels',
      description:'These panels capture sunlight from both the front and back sides, increasing overall energy output. They are ideal for open spaces with reflective surfaces, such as snowy or sandy areas.',
      date:'2024-12-29',
      image:'../images/download (8).jpeg'
    },
    {
      id:'6',
      title:'Concentrated Photovoltaic (CPV) Solar Panels',
      description:'CPV panels use lenses or mirrors to focus sunlight onto high-efficiency solar cells, generating more power than traditional panels. They require direct sunlight and tracking systems to maximize performance.',
      date:'2024-12-29',
      image:'../images/download (7).jpeg'
    },
    {
      id:'7',
      title:'Half-Cut Solar Panels',
      description:'These panels feature solar cells cut in half, reducing resistance and increasing efficiency. They perform better in shaded conditions and offer improved durability and longevity.',
      date:'2024-12-29',
      image:'../images/download (6).jpeg'
    },
    {
      id:'8',
      title:'Transparent Solar Panels',
      description:'A futuristic innovation, these panels allow light to pass through while generating electricity. They are ideal for windows, greenhouses, and smart buildings, combining aesthetics with functionality.',
      date:'2024-12-29',
      image:'../images/download (5).jpeg'
    },
    {
      id:'9',
      title:'Organic Photovoltaic (OPV) Solar Panels',
      description:'Made from organic materials, these panels are lightweight, flexible, and eco-friendly. Although less efficient than silicon-based panels, they offer new possibilities for wearable and portable solar technology.',
      date:'2024-12-29',
      image:'../images/download (4).jpeg'
    },
   ];

  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
        {" "}
        BrightSun Panels: Harnessing Clean Energy for Life
      </h1>
      <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post,index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
              </div>
              </div>
        ))};
      </div>

    </div>
  );
}
