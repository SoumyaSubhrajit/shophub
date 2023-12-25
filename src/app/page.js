import React from 'react'
import variable from '../../styles/variable.module.scss';
import '../../styles/pageStyle.scss'
export default function page() {
  return (
    <div>
      <h1 style={{color: variable.primaryColor}}>Welcome</h1>
        <h3>some inforamtion</h3>
        <button>Click Me</button>
      
    </div>
  )
}
