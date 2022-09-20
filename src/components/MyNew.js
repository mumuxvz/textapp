import React from 'react'

export default function MyNew(props) {
    
  return (
    <div>
        <div className="container"style={{color :  props.mode==='dark'?'white' : 'black'}}>hello</div>
    </div>
  )
}
