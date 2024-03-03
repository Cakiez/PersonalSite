import React from 'react'


import "./style.css"

export default function ButtonCharm({ icon, link }) {
  return (
    <a className='charm-style' href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  )
}