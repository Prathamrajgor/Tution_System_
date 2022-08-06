import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Context } from '../App';

export default function Detele_student() {
    const motion =useContext(Context)
    const student=useSelector((state)=>state.student.value);
    // console.log(student);
    const [check,Newcheck]=useState("unchecked");

    const [success,Newsuccess]=useState("none")
    const [alert,Newalert]=useState("none")
    const [fail,Newfail]=useState("none");

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };

  return (
      <>

       <div className="pl-4 pt-2">
            <Link to="/">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <i className="fa-solid fa-backward"></i>
              </button>
            </Link>
        </div>

         <div className="my-2" style={{display:alert}} >
              <div className="alert alert-danger" role="alert">
              Check The Checkbox
              </div>
          </div>

          <div>
              <div class="alert alert-success" style={{display:success}} role="alert">
                  Student Deleted Successfully
              </div>
          </div>
          <div>
               <div class="alert alert-danger" style={{display:fail}} role="alert">
                   Student Deletion Unsuccessfull
              </div>
          </div>


        <p className='text-2xl ml-4 mt-4 '>Delete Student</p>
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
                     className="shadow-md lg:grid  rounded-md h-[720px] mx-6 my-8  bg-white ">



                      <div className='px-2 py-3 text-lg border-2 flex bg-white rounded-t-md   border-gray-700 '>
                      <p className=' w-[92%]'> <span className='font-semibold'> Name: </span>  
                      <span className='underline'>
                      {student.firstname.toLowerCase()}
                      </span>
                      </p> 
                      
                    
                      </div>
                      
                      <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <p className=' w-[50%] lg:w-[33%]'> <span className='font-semibold'> Surname: </span> 
                      <span className='underline'>
                      {student.lastname.toLowerCase()} 
                      </span>
                      </p>
                      </div>

                      <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                      <p className='px-2'> <span className='font-semibold'> Std: </span> 
                        <span className='underline'>
                          {student.std}
                        </span>
                        </p>
                      </div>

                      <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                        <p className='px-2'> <span className='font-semibold'> School: </span> 
                        <span className='underline'>
                          {student.school}
                        </span>
                        </p>
                      </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold '>
                      Mother's Name:
                        </span> 
                        <span className='underline'>
                               {String("  "+student.mother)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold '>
                      Father's Name:
                        </span> 
                        <span className='underline'>
                               {String("  "+student.father)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Contact No:
                        </span> 
                        <span className='underline'>
                               {String("  "+student.contact)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Joining Date:
                        </span> 
                        <span className='underline'>
                               {String("  "+student.joining_date)}
                        </span>
                       </div>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white   border-gray-700'>
                      <div className='px-2 '> <span className='font-semibold  '>
                      Fees:
                        </span> 
                        <span className='underline'>
                               {String("   "+student.fees)}
                        </span>
                       </div>
                    </div>

                    <div className="check space-y-3    ">

                            <div>

                            <div className="App    border-2 ">
                            <div className=" border-2 flex   ">   
                                <input
                                type="checkbox"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                checked={isChecked}
                                onChange={handleOnChange}
                                />
                                <p>
                                    I want to permenantly delete student's details from the database. 
                                </p>
                            </div>
                            </div>
                        
                            </div>
                            <div className="but w-72 pl-4">
                            <button onClick={()=>{
                                if(isChecked==true){
                                    // console.log(student.student_id);
                                    axios.put("http://localhost:5000/delete_student",{
                                        student_id:student.student_id
                                    }).then((res)=>{
                                         if(res.data=="s"){
                                            Newsuccess("block");
                                            setTimeout(()=>{Newsuccess("none"); 
                                            window.location.replace("http://localhost:5000/")
                                          },4000)
                                        }
                                        else{
                                            Newfail("block");
                                            setTimeout(()=>{Newfail("none")},4000)
                                        }
                                    })
                                }
                                else{
                                    Newalert("block");
                                    setTimeout(()=>{Newalert("none")},4000)

                                }
                            }} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete Permenantly
                            </button>
                            </div>
                    </div>

                    
                   


                    </motion.div>

                


      </>
  )
}
