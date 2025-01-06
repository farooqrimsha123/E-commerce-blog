import React from 'react'

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn '>
        <img
        className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
        src='../images/IMG-20200614-WA0041.jpg'
        alt='Author Image'
        />
        <div>
          <h3 className='text-xl font-bold'>Rimsha Farooq</h3>
          <p className='text-slate-500'>
            {" "}
            Web Developer{" "}
             </p>
        </div>
      </div>
      <p className='mt-4 text-black leading-relaxed'>
      Rimsha Farooq is a skilled web developer passionate about creating dynamic, user-friendly websites and applications. She combines technical expertise with a creative approach to deliver exceptional digital experiences.
      </p>
      <div className='mt-4 flex space-x-3'>
        <a 
        href='#https://www.facebook.com/share/18No2AYpe6/ '
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'
        >
        Facebook
        </a>

        <a 
        href='#https://www.linkedin.com/in/rimsha-khan-2154712ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'
        >
        Linkdin
        </a>

        <a 
        href='#https://github.com/farooqrimsha123'
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'
        >
        Github
        </a>

      </div>
    </div>
  )
}