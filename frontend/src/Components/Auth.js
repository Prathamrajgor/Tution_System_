import React, { useState } from 'react'
import { useSticky } from 'react-scroll-to-bottom'

export default function Auth({display}) {
  return (
      <div className=' w-[100vw] container h-[200vh] font-custom1 border-2 border-purple-400'>
            <form style={{display:display}} className="container border-2 border-gray-100 mt-12 rounded-md shadow-md bg-gray-100" >
            <div className="my-2" style={{display:"block"}} >
            <div className="alert alert-danger" role="alert">
                Fill all the Required fields
            </div>
            </div>
            <p className=' text-2xl mt-3'>Enter Code </p>
            <div className="mb-3 mt-8 ">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button class="bg-blue-500 mb-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send
            </button>
            </form>
      </div>
  )
}
