import React from 'react'
import  { BrowserRouter, Route } from 'react-router-dom'

import Principal from '../containers/Principal'
import Certificados from '../containers/Certificados'

const App = () =>{
    return( 
        <BrowserRouter>
            <div>
                <Route path='/principal' component={Principal} />
                <Route path='/principal/certificados' component={Certificados} />
            </div>
        </BrowserRouter>
    )
}
export default App;