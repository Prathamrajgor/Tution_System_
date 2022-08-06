import React, { useContext, useEffect, useState } from "react";
import { Student } from "../App";
import ScrollHorizontal from "react-horizontal-scrolling-menu";
import Scroll from "react-scroll-to-bottom";
import axios from "axios";
// import { set } from "mongoose";
// import CheckMonth from "./Check_month";
export default function Fee_table() {
  const list = useContext(Student);
  // console.log(list);
  const [nav, Newnav] = useState(["block", "none", "none", "none"]);
  const [name, Newname] = useState("");
  const [month, Newmonth] = useState("");
  const [fees, Newfees] = useState("");
  const [date, Newdate] = useState("");
  const [id, Newid] = useState("");
  const [alert, Newalert] = useState("none");
  const [success, Newsuccess] = useState("none");
  const [fail,Newfail]=useState("none");
  const [edit,Newedit]=useState("none");
  
  let months = [
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
  ];
  const [totalArray,SettotalArray]=useState(0)
  const sum=(arr)=>{
    let total=0
    for(let i=0;i<arr.length;i++){
      total=total+Number(arr[i].fees)
    }
    return total
  }

  
  // SettotalArray(temp)
  // let temp=[]
  

  function CheckMonth({ input,month,student }) {
      // console.log(input);
    if (input == "0") {
      return <td className="border-2 text-center border-black">{input}</td>;
    } 
    else {
      let a = JSON.parse(input);
      // temp.push(a.fees)
      // console.log(a);
      // SettotalArray(totalArray+1)
      // let temp=totalArray+Number(a.fees)
      // SettotalArray(Number(totalArray+Number(a.fees)))
      // console.log("Fees: ",totalArray);
      return (
        <>
          <td className="border-2  px-4 border-black">
            <p>
              Fees To Be Paid: <span className="underline">{student.fees}</span>
            </p>
            <p>
              Payment Date: <span className="underline">{a.payment_date}</span>
            </p>
            <p>
              Payment Amount: <span className="underline">{a.fees}</span>{" "}
            </p>
            <p>
              Remaining Fees: <span className="underline">{Number(student.fees)-Number(a.fees)}</span>{" "}
            </p>
            
            <button
              onClick={() => {
                  Newname(String(student.firstname)+" "+String(student.lastname));
                  Newmonth(month);
                  Newfees(a.fees);
                  Newdate(a.payment_date)
                Newnav(["none", "none", "none", "block"]);
                Newid(student.student_id)
              }}
              class="bg-blue-500 mt-1 mr-2 mb-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={()=>{
                Newnav(['none',"none","block",'none']);

                Newname(String(student.firstname)+" "+String(student.lastname));
                  Newmonth(month);
                  Newfees(a.fees);
                  Newdate(a.payment_date);
                  Newid(student.student_id);
            }} class="bg-red-500 mt-1 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Delete <i class="fa-solid fa-trash"></i>
            </button>
          </td> 
        </>
      );
    }
  }

  return (
    <>
      
      <div className="tabs bg-[#F24C4C]  px-2 border-2 lg:block flex justify-center ">
        <div class="mb-2 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap space-x-0  -mb-px text-sm  font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li
              class="mr-2"
              id="fee_table"
              onClick={() => {
                Newnav(["block", "none", "none", "none"]);
              }}
              role="presentation"
            >
              <button
                class="inline-block   py-4 px-1 hover:text-white hover:border-b-2 rounded-t-lg "
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span className="">Fee Table</span>
              </button>
            </li>
            <li
              class="mr-2"
              onClick={() => {
                Newnav(["none", "block", "none", "none"]);
              }}
              role="presentation"
            >
              <button
                class="inline-block py-4 px-1 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Add Entry
              </button>
            </li>
            <li
              class="mr-2"
              onClick={() => {
                Newnav(["none", "none", "block", "none"]);
              }}
              role="presentation"
            >
              <button
                class="inline-block py-4 px-1 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Delete
              </button>
            </li>
            <li role="presentation">
              <button
                onClick={() => {
                  Newnav(["none", "none", "none", "block"]);
                }}
                class="inline-block py-4 px-1 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
              >
                Edit Entry
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-2">
        Total Monthly Fees: Rs. {sum(list)}
      </div>
      {/* <div className="ml-2">
        Total Fees So Far: Rs. {totalArray}
      </div> */}
      <div
        style={{ display: nav[0] }}
        className="mt-4 mx-1 overflow-y-scroll whitespace-nowrap flex  scroll   space-y-2 scroll-smooth"
      >
        <table className=" overflow-x-scroll whitespace-nowrap  scroll bg-white space-x-4 scroll-smooth">
          <tbody>
          <tr className=" border-2 bg-gray-200">
            <th className="border-2 border-black px-8  sticky bg-gray-300 z-10 left-0">
              {" "}
              Names
            </th>
            <th className="border-2 border-black px-12  ">June </th>
            <th className="border-2 border-black px-12"> July</th>
            <th className="border-2 border-black px-12"> August</th>
            <th className="border-2 border-black px-12"> September</th>
            <th className="border-2 border-black px-12"> October</th>
            <th className="border-2 border-black px-12"> November</th>
            <th className="border-2 border-black px-12"> December</th>
            <th className="border-2 border-black px-12"> Janaury</th>
            <th className="border-2 border-black px-12"> February</th>
            <th className="border-2 border-black px-12"> March</th>
            <th className="border-2 border-black px-12"> April</th>
            <th className="border-2 border-black px-12"> May</th>
          </tr>
          {list.map((element, index) => {
            // console.log(element);
            return (
              <>
                <tr className=" border-2 border-black w-40 ">
                  <td className="sticky border-2 bg-white border-black left-0 z-10 space-x-2">
                    <div className="flex flex-col space-y-2">
                      <p>{element.firstname}</p>
                      <p>{element.lastname}</p>
                    </div>
                  </td>
                  {/* <td className="border-2  px-4 border-black">
                                    <p>Payment Date: <span className="underline">2022-6-1 </span></p>
                                    <p>Payment Amount: <span>400</span> </p>
                                </td> */}
                  <CheckMonth input={element.june} month="june" student={element} />
                  <CheckMonth input={element.july} month="july" student={element} />
                  <CheckMonth input={element.august} month="august" student={element} />
                  <CheckMonth input={element.september} month="september" student={element} />
                  <CheckMonth input={element.october} month="october" student={element} />
                  <CheckMonth input={element.november} month="november" student={element} />
                  <CheckMonth input={element.december} month="december" student={element} />
                  <CheckMonth input={element.january} month="january" student={element} />
                  <CheckMonth input={element.february} month="february" student={element} />
                  <CheckMonth input={element.march} month="march" student={element} />
                  <CheckMonth input={element.april} month="april" student={element} />
                  <CheckMonth input={element.may} month="may" student={element} />
                </tr>
              </>
            );
          })}
          </tbody>
        </table>
      </div>

      <div style={{ display: nav[1] }} className="add">
        <div className="bg-gray-200 mx-10 rounded-lg py-4 shadow-md my-4">
        <p className="text-3xl pl-4 pb-2">Add Records</p>
          <div className="my-2" style={{ display: alert }}>
            <div className="alert alert-danger" role="alert">
              Fill all the Required fields
            </div>
          </div>
          <div>
            <div
              class="alert alert-success"
              style={{ display: success }}
              role="alert"
            >
              Operation Successfull
            </div>
          </div>
          <div className="my-2" style={{ display: fail }}>
            <div className="alert alert-danger" role="alert">
              Entry Allready Exists
            </div>
          </div>

          <form className="container font-semibold  ">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Student Name
              </label>

              <div className="drop flex flex-col space-y-4 ">
                <input
                  value={name}
                  type="text"
                  class="w-64 form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div
                  id="emailHelp"
                  style={{ display: alert }}
                  class="form-text"
                >
                  {" "}
                  <p className="text-red-600"> *required. </p>
                </div>
                <div class="dropdown">
                  <a
                    class="btn w-64 btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Name
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Scroll className="h-64">
                      {list.map((element) => {
                        return (
                          <li
                            onClick={() => {
                              Newname(
                                String(
                                  String(element.firstname) +
                                    " " +
                                    String(element.lastname)
                                )
                              );
                              Newid(element.student_id);
                            }}
                            className="border-b-[1px] w-64 text-xl h-10   border-black"
                          >
                            <a class="dropdown-item flex space-x-2" href="#">
                              <p>{element.firstname}</p>{" "}
                              <p>{element.lastname}</p>{" "}
                            </a>
                          </li>
                        );
                      })}
                    </Scroll>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mb-3 ">
              <label for="exampleInputPassword1" class="form-label">
                Month
              </label>

              <div className="space-x-4 flex ">
                <input
                  type="text"
                  value={month}
                  class="form-control w-32"
                  id="exampleInputPassword1"
                />

                <div class="dropdown ">
                  <a
                    class="btn w-36 btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Month
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Scroll className="h-64">
                      {months.map((element, index) => {
                        // if()
                        return (
                          <>
                            <li
                              onClick={() => {
                                Newmonth(element);
                              }}
                              className="border-b-[1px] w-64 text-xl h-10
                                               border-black"
                            >
                              <a class="dropdown-item flex space-x-2" href="#">
                                {element}{" "}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </Scroll>
                  </ul>
                </div>
              </div>
              <div id="emailHelp" style={{ display: alert }} class="form-text">
                {" "}
                <p className="text-red-600"> *required. </p>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Fees
                </label>
                <input
                  type="number"
                  placeholder="Eg: 500"
                  value={fees}
                  onChange={(e) => {
                    Newfees(e.target.value);
                  }}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div
                  id="emailHelp"
                  style={{ display: alert }}
                  class="form-text"
                >
                  {" "}
                  <p className="text-red-600"> *required. </p>
                </div>
              </div>
              <div className="mb-3 my-4">
                <label for="exampleInputEmail1" className="form-label">
                  Payment Date
                </label>
                <input
                  type="date"
                  placeholder="Eg: 2022-4-4"
                  value={date}
                  onChange={(e) => Newdate(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div id="emailHelp" style={{ display: alert }} class="form-text">
                {" "}
                <p className="text-red-600"> *required. </p>
              </div>
            </div>

            <button
              type="button"
              class="bg-blue-600 mt-1 mr-2 mb-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                if (name == "" || month == "" || fees == "" || date == "") {
                  Newalert("block");
                  setTimeout(() => {
                    Newalert("none");
                  }, 3000);
                } else {
                  // console.log(name,month,fees,date,id);
                  let obj = {
                    name: name,
                    student_id: id,
                    month: month,
                    fees_and_date: JSON.stringify({
                      fees: String(fees),
                      payment_date: date,
                    }),
                  };
                  // console.log(obj);
                  axios.post("http://localhost:5000/add_fees", obj)
                    .then((res) => {
                      if (res.data == "s") {
                        Newsuccess("block");
                        setTimeout(() => {
                          Newsuccess("none");
                          window.location.replace(
                            "http://localhost:5000/fee_table"
                          );
                        }, 3500);
                        console.log("Success");
                      } else {
                          Newfail("block");
                          setTimeout(()=>{
                              Newfail("none");
                          },3500);
                        // console.log("Fail");
                      }
                    })
                    .then((err) => {
                      // console.log(err);
                    });
                }
              }}
            >
              Add Entry
            </button>
          </form>
        </div>
      </div>

      <div style={{ display: nav[2] }} className="add container mt-4">

                    <div>
                        <div
                            class="alert alert-success"
                            style={{ display: success }}
                            role="alert"
                            >
                            Entry Deleted Successfully
                            </div>
                    </div>
                    <div>
                        <div
                            class="alert alert-danger"
                            style={{ display: fail }}
                            role="alert"
                            >
                            Operation Successfull
                            </div>
                    </div>
                    <div className='px-2 py-3 text-lg border-2 flex bg-white rounded-t-md   border-gray-700 '>
                    <p className=' w-[92%]'> <span className='font-semibold'> Name: </span>  
                    <span className='underline'>
                    {/* {student.firstname.toLowerCase()} */}
                    {name}
                    </span>
                    </p> 
                    </div>
                    
                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                    <p className=' w-[50%] lg:w-[33%]'> <span className='font-semibold'> Month: </span> 
                    <span className='underline'>
                    {/* {student.lastname.toLowerCase()}  */}
                    {month}
                    </span>
                     </p>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-white  border-gray-700'>
                    <p className='px-2'> <span className='font-semibold'> Fees: </span> 
                      <span className='underline'>
                        {/* {student.std} */}
                        {fees}
                      </span>
                      </p>
                    </div>

                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <p className='px-2'> <span className='font-semibold'> Payment-date: </span> 
                      <span className='underline'>
                        {/* {student.school} */}
                        {date}
                      </span>
                      </p>
                    </div>
                    <div className='px-2 py-3 text-lg border-2 bg-gray-200  border-gray-700'>
                      <p className='px-2'> 
                    <button onClick={()=>{
                        axios.post("http://localhost:5000/delete_fees",{
                            "student_id":id,
                            "month":month
                        }).then((res)=>{
                          if(res.data=="s"){

                            // console.log(res);
                            Newsuccess("block");
                            setTimeout(()=>{
                              Newsuccess("none")
                              window.location.replace("http://localhost:5000/fee_table");
                            },3500);
                          }
                          else{
                            // console.log(res.data);
                            Newfail("block");
                            setTimeout(()=>{
                              Newfail("none")
                            },3500);
                          }
                        })
                    }} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Confirm Delete <i class="fa-solid fa-trash"></i>
                    </button>
                      </p>
                    </div>

      </div>

      <div style={{ display: nav[3] }} className="add">
        <div className="bg-gray-200 mx-10 rounded-lg py-4 shadow-md my-4">
            <p className="text-3xl pl-4 pb-2">Edit Records</p>
          <div className="my-2" style={{ display: alert }}>
            <div className="alert alert-danger" role="alert">
              Fill all the Required fields
            </div>
          </div>
          <div>
            <div
              class="alert alert-success"
              style={{ display: success }}
              role="alert"
            >
              Fess Edited Successfully
            </div>
          </div>
          <div className="my-2" style={{ display: edit }}>
            <div className="alert alert-danger" role="alert">
              Operation Unsuccessfull
            </div>
          </div>
          

          <form className="container font-semibold  ">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Student Name
              </label>

              <div className="drop flex flex-col space-y-4 ">
                <input
                  value={name}
                  type="text"
                  class="w-64 form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div
                  id="emailHelp"
                  style={{ display: alert }}
                  class="form-text"
                >
                  {" "}
                  <p className="text-red-600"> *required. </p>
                </div>
                <div class="dropdown">
                  <a
                    class="btn w-64 btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Name
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Scroll className="h-64">
                      {list.map((element) => {
                        return (
                          <li
                            onClick={() => {
                              Newname(
                                String(
                                  String(element.firstname) +
                                    " " +
                                    String(element.lastname)
                                )
                              );
                              Newid(element.student_id);
                            }}
                            className="border-b-[1px] w-64 text-xl h-10   border-black"
                          >
                            <a class="dropdown-item flex space-x-2" href="#">
                              <p>{element.firstname}</p>{" "}
                              <p>{element.lastname}</p>{" "}
                            </a>
                          </li>
                        );
                      })}
                    </Scroll>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mb-3 ">
              <label for="exampleInputPassword1" class="form-label">
                Month
              </label>

              <div className="space-x-4 flex ">
                <input
                  type="text"
                  value={month}
                  class="form-control w-32"
                  id="exampleInputPassword1"
                />

                <div class="dropdown ">
                  <a
                    class="btn w-36 btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Month
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Scroll className="h-64">
                      {months.map((element, index) => {
                        // if()
                        return (
                          <>
                            <li
                              onClick={() => {
                                Newmonth(element);
                              }}
                              className="border-b-[1px] w-64 text-xl h-10
                           border-black"
                            >
                              <a class="dropdown-item flex space-x-2" href="#">
                                {element}{" "}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </Scroll>
                  </ul>
                </div>
              </div>
              <div id="emailHelp" style={{ display: alert }} class="form-text">
                {" "}
                <p className="text-red-600"> *required. </p>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Fees
                </label>
                <input
                  type="number"
                  placeholder="Eg: 500"
                  value={fees}
                  onChange={(e) => {
                    Newfees(e.target.value);
                  }}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div
                  id="emailHelp"
                  style={{ display: alert }}
                  class="form-text"
                >
                  {" "}
                  <p className="text-red-600"> *required. </p>
                </div>
              </div>
              <div className="mb-3 my-4">
                <label for="exampleInputEmail1" className="form-label">
                  Payment Date
                </label>
                <input
                  type="date"
                  placeholder="Eg: 2022-4-4"
                  value={date}
                  onChange={(e) => Newdate(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div id="emailHelp" style={{ display: alert }} class="form-text">
                {" "}
                <p className="text-red-600"> *required. </p>
              </div>
            </div>

            <button
              type="button"
              class="bg-blue-600 mt-1 mr-2 mb-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                if (name == "" || month == "" || fees == "" || date == "") {
                  Newalert("block");
                  setTimeout(() => {
                    Newalert("none");
                  }, 3000);
                } else {
                  // console.log(name,month,fees,date,id);
                  let obj = {
                    name: name,
                    student_id: id,
                    month: month,
                    fees_and_date: JSON.stringify({
                      fees: fees,
                      payment_date: date,
                    }),
                  };
                  // console.log(obj);
                  axios
                    .post("http://localhost:5000/edit_fees", obj)
                    .then((res) => {
                      if (res.data == "s") {
                        Newsuccess("block");
                        setTimeout(() => {
                          Newsuccess("none");
                          window.location.replace(
                            "http://localhost:5000/fee_table"
                          );
                        }, 3500);

                        // console.log("Success");
                      } else {
                          Newedit("block");
                          setTimeout(()=>{
                              Newedit("none");
                          },4000)
                        // console.log("Fail");
                      }
                    })
                    .then((err) => {
                      // console.log(err);
                    });
                }
              }}
            >
              Add Entry
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
