import React from 'react'

export default function Main({token, list, motion}) {
  return (
    <div>

            <TokenState.Provider value={token}>
                <Student.Provider value={list}>
                    <Context.Provider value={motion}>
                        <Navbar/>
                        <BrowserRouter>
                                <Routes>
                                <Route path='/' element={<Data_and_search/>} />
                                <Route path='/add_student' element={<Add_student/>}/>
                                <Route path='/edit_student' element={<Edit_student/>}/>
                                <Route path='/delete_student' element={<Delete_student/>}/>
                                <Route path='/fee_table' element={<Fee_table/>}/>
                                </Routes>
                        </BrowserRouter>
                    </Context.Provider>
                    </Student.Provider>
                    </TokenState.Provider>

    </div>
  )
}
