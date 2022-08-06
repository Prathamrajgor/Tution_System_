import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import Scroll from "react-scroll-to-bottom";
import { Student } from '../App';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Edit_student from './Edit_student';
import { useDispatch } from 'react-redux';
import { update } from '../features/student';
import { useSelector } from "react-redux";
export const Details=React.createContext(null);

export default function Data_and_search() {
  
    const student=useSelector((state)=> state.student.value)
    const dispatch=useDispatch(); 
    const motion=useContext(Context);
    const list=useContext(Student);
    const [search,Newsearch]=useState("")
    const [id,Newid]=useState(0);
    const [details,Newdetails]=useState("")
    function countString(str, letter) {
      let count = 0;
      // looping through the items
      for (let i = 0; i < str.length; i++) {
  
          // check if the character is at that position
          if (str.charAt(i) == letter) {
              count += 1;
          }
      }
      return count;
  }
  return (
    <>
    <motion.div animate={{scale:1}} initial={{scale:0.5}} className='mx-3 my-3 sticky top-14 z-10'>
        <div className="input-group input-group-lg">
        <input value={search} onChange={(e)=>{
            Newsearch(e.target.value.toLowerCase());
          }} type="text" placeholder='Search...' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
    </motion.div>

    <div>
      <h2 className='text-3xl font-semibold ml-4'>Student List</h2>
      <div className='ml-4'>
        Total Students: {list.length}
      </div>
      <Scroll className='h-[85vh] '>
        {list.map((element,index)=>{
          // console.log(element.firstname.toLowerCase(),"name");
          if(search=="" || (countString(search," ")==search.length)){
            if(id===element.student_id){
                  return (

                    <motion.div
                    
                    key="answer"
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    exit={{ opacity: 0 }}
                     className="shadow-md lg:grid  rounded-md h-[655px] mx-6 my-8  bg-white ">



                    <div className='px-2 py-3 text-lg border-2 flex bg-white rounded-t-md   border-gray-700 '>
                    <p className=' w-[92%]'> <span className='font-semibold'> Name: </span>  
                    <span className='underline'>
                  {element.firstname.toLowerCase()}
                    </span>
                    </p> 
                    
                    <p onClick={()=>{
                      if(id==""){
                        Newid(element.student_id);
                      }
                      else{
                        Newid("");
                      }
                    }} className=' text-2xl lg:pr-2  lg:w-[7%] flex justify-end  '>
                             <i class="fa-solid fa-angle-up "></i>
                       </p>
                    </div>
                    
                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                    <p className=' w-[50%] lg:w-[33%]'> <span className='font-semibold'> Surname: </span> 
                    <span className='underline'>
                    {element.lastname.toLowerCase()} 
                    </span>
                     </p>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                    <p className='px-2'> <span className='font-semibold'> Std: </span> 
                      <span className='underline'>
                        {element.std}
                      </span>
                      </p>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <p className='px-2'> <span className='font-semibold'> School: </span> 
                      <span className='underline'>
                        {element.school_name}
                      </span>
                      </p>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold '>
                      Mother's Name:
                        </span> 
                        <span className='underline'>
                               {String("  "+element.mother_name)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold '>
                      Father's Name:
                        </span> 
                        <span className='underline'>
                               {String("  "+element.father_name)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Contact No:
                        </span> 
                        <span className='underline'>
                               {String("  "+element.contact)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Joining Date:
                        </span> 
                        <span className='underline'>
                               {String("  "+element.joining_date)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white   border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Fees:
                        </span> 
                        <span className='underline'>
                               {String("   "+element.fees)}
                        </span>
                       </div>
                    </div>
                    
                    <div className='h-14 border-2 rounded-b-md  border-gray-700 flex items-center'>
                    <Link to="/edit_student">

                      <button  onClick={()=>{
                          // console.log(student);
                          dispatch(update({
                            student_id:element.student_id,
                            firstname:element.firstname,
                            lastname:element.lastname,
                            std:element.std,
                            school:element.school_name,
                            mother:element.mother_name,
                            father:element.father_name,
                            contact:element.contact,
                            joining_date:element.joining_date,
                            fees:element.fees
                          }));
                          // console.log(student);
                          
                        }} class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      </Link>
                      <Link to="/delete_student">

                      <button onClick={()=>{
                        dispatch(update({
                          student_id:element.student_id,
                          firstname:element.firstname,
                          lastname:element.lastname,
                          std:element.std,
                          school:element.school_name,
                          mother:element.mother_name,
                          father:element.father_name,
                          contact:element.contact,
                          joining_date:element.joining_date,
                          fees:element.fees
                        }));
                      }} class="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete <i class="fa-solid fa-trash"></i>
                      </button>
                      </Link>

                    </div>


                    </motion.div>

                  )
            }
            else{
              return (
                <div className="shadow-md rounded-md h-14 mx-6 my-2 flex flex-col justify-center  bg-white">
                    <div className='flex  px-2 py-2 lg:text-xl text-md '>
                    <p className=' w-[92%]  text-xl'>{index+1} {element.firstname.toLowerCase()} {element.lastname.toLowerCase()}</p>  
                    <p onClick={()=>{
                      Newid(element.student_id);
                    }} className=' text-2xl  w-[8%]  flex justify-end  '><i class="fa-solid fa-angle-down "></i></p>
                    </div>

               </div>
              )
            }
          }
          else{
            if(String(element.firstname.toLowerCase()).includes(search)){
              if(id===element.student_id){
                return (

                  <motion.div
                    
                    key="answer"
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    exit={{ opacity: 0 }}
                     className="shadow-md lg:grid  rounded-md h-[655px] mx-6 my-8  bg-white ">



                    <div className='px-2 py-3 text-lg border-2 flex bg-white rounded-t-md   border-gray-700 '>
                    <p className=' w-[92%]'> <span className='font-semibold'> Name: </span>  
                    <span className='underline'>
                    {element.firstname.toLowerCase()}
                    </span>
                    </p> 
                    
                    <p onClick={()=>{
                      if(id==""){
                        Newid(element.student_id);
                      }
                      else{
                        Newid("");
                      }
                    }} className=' text-2xl lg:pr-2  lg:w-[7%] flex justify-end  '>
                             <i class="fa-solid fa-angle-up "></i>
                       </p>
                    </div>
                    
                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                    <p className=' w-[50%] lg:w-[33%]'> <span className='font-semibold'> Surname: </span> 
                    <span className='underline'>
                    {element.lastname.toLowerCase()} 
                    </span>
                     </p>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                    <p className='px-2'> <span className='font-semibold'> Std: </span> 
                      <span className='underline'>
                        {element.std}
                      </span>
                      </p>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <p className='px-2'> <span className='font-semibold'> School: </span> 
                      <span className='underline'>
                        {element.school_name}
                      </span>
                      </p>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold '>
                      Mother's Name:
                        </span> 
                        <span className='underline'>
                               {String("  "+element.mother_name)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold '>
                      Father's Name:
                        </span> 
                        <span className='underline'>
                               {String("  "+element.father_name)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Contact No:
                        </span> 
                        <span className='underline'>
                               {String("  "+element.contact)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Joining Date:
                        </span> 
                        <span className='underline'>
                               {String("  "+element.joining_date)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white   border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Fees:
                        </span> 
                        <span className='underline'>
                               {String("   "+element.fees)}
                        </span>
                       </div>
                    </div>
                    
                    <div className='h-14 border-2 rounded-b-md  border-gray-700 flex items-center'>
                    <Link to="/edit_student">

                      <button  onClick={()=>{
                          // console.log(student);
                          dispatch(update({
                            student_id:element.student_id,
                            firstname:element.firstname,
                            lastname:element.lastname,
                            std:element.std,
                            school:element.school_name,
                            mother:element.mother_name,
                            father:element.father_name,
                            contact:element.contact,
                            joining_date:element.joining_date,
                            fees:element.fees
                          }));
                          // console.log(student);
                          
                        }} class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      </Link>

                      <button class="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete <i class="fa-solid fa-trash"></i>
                      </button>

                    </div>


                    </motion.div>

                )
          }
          else{
            return (
              <div className="shadow-md rounded-md h-14 mx-6 my-2 flex flex-col justify-center    bg-white">
                  <div className='flex  px-2 py-2 lg:text-xl text-md '>
                  <p className=' w-[92%] flex   '> {index+1} {element.firstname.toLowerCase()}  {element.lastname.toLowerCase() }</p>  
                  <p onClick={()=>{
                    Newid(element.student_id);
                  }} className=' text-2xl  w-[8%]  flex justify-end  '><i class="fa-solid fa-angle-down "></i></p>
                  </div>

             </div>
            )
          }
            }
          }
        })}

      </Scroll>

   
        
    </div>
    
    </>
  )
}
