import React from "react"
import Option from "./Option"

const Options = (props) =>( (
    <div>
      <div className='widget-header'>
      <h3 className='nomargin'>Your options</h3>
     
      
      <button 

      className='button button--link'
      onClick={props.handleDeleteOptions}
      >
        Remove All</button></div>
        
        {props.options.length < 1 && <p className='widget__p'>Add options to get started!</p>}


      {
        props.options.map((option,index) => (
        <Option 
          count={index+1}
          key={option}  
          optionText={option}
          handleDeleteOption = {props.handleDeleteOption}
          />
        ))
      }
    </div>
    
  )
)

export default Options;