import React from 'react'

function Heading() {
  return (
    <div className="main-header">
    <h1>Settings</h1>
    <div className="search">
      <input type="text" placeholder="Search" />
      <button type="submit">
        <i className="ph-magnifying-glass-bold" />
      </button>
    </div>
  </div>  )
}

export default Heading