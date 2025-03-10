"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import axios from 'axios'

const page = () => {
  const [color, setcolor] = useState('white')
  const [course] = useState("Courses")

  const [images, setimages] = useState([])

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setimages(data)
      console.log(images)
    } catch (error) {
      console.error("Error in fatching Images")
    }
  }
  return (
    // ^ this is jsx(javascript xml)
    // react works on virtual DOM
    // making fragments <></>
    <>
      <h1 className='h1_tag' style={{color:color}}>Hey, Hi EveryOne Thanks for Visiting This</h1> 
      <h4 className='nameTag'>I'm Anubhav Pathak</h4>
      {/* here you see 
      style: {{}} -> {}->outer bracket denotes use of javascript inside jsx
              {} -> inner bracket denotes use of object color:color*/}
      <button  onClick={()=>{
          window.open('https://www.google.com', '_blank', "width=800,height=600");
          // document.querySelector(".h1_tag").style.color = "blue"; 
          // this is worst practice in react because -> document.querySelector(".h1_tag") direct interact with "Real DOM" not virtual DOM which is bad that's why your code works here 

          // that's why we use consept of useState hook 
          setcolor("blue");
      }} type='button' className='button'>Click Me!</button>
      <Header course={course}/>

      <h1 className='m-4 p-2 text-emerald-400 bg-slate-600 font-semibold'>This Is The Main Page</h1>

      <div>
        <button onClick={getImages} type="button" className='bg-green-900 mt-4 p-5 rounded-full cursor-pointer font-bold shadow-lime-600 focus:ring-2 hover:bg-green-700 focus:ring-gray-100'>
          Get Images
        </button>
        <div className='p-10 grid grid-cols-4 gap-4'>
          {images.length > 0 ? (
            images.map((elem, i) => (
              <img 
                key={i}
                src={elem.download_url}
                width={300}
                height={300}
                className='m-10 rounded'
              />
            ))
          ) : (
            <p>No images yet. Click "Get Images" to fetch some.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default page