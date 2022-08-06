import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App';

export default function Navbar() {
    const motion=useContext(Context);
  return (
    <motion.div className="sticky top-0 z-20" animate={{scale:1}} initial={{scale:0.8}} >
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to ="/">

                <a className="navbar-brand flex items-center" >
                    <img src='https://previews.123rf.com/images/briang77/briang771512/briang77151200759/49536932-crown-vector-icon.jpg' className='h-12 rounded-md' onError="Error Loading "/>
                    <span>
                    <p className='ml-2'>
                        Tution App
                    </p>
                    </span>
                    </a>
                </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/add_student">
                    <li className="nav-item">
                <a className="nav-link active" aria-current="page" > Add Student</a>
                </li>
                </Link>
                <Link to="/fee_table">
                <li  className="nav-item">
                <a className="nav-link active" >Fee Details</a>
                </li>
                </Link>
            </ul>
            
            </div>
        </div>
        </nav>
      </motion.div>
  )
}
