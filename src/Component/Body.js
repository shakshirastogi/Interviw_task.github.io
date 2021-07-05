import React from 'react'
import './Sidebar.css'

export default function Body() {
    return (
        <div className="container">
            <h5><i class="fa fa-caret-down">&nbsp;videos</i></h5>

            <input type="text" placeholder="Insert URL here"/>
            <br/>
            <h3>or</h3>
          <input  class="input_box" placeholder="upload"></input> 
        </div>
    )
}
