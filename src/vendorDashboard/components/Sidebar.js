import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebarSection w-25'>
        <ul>
            <li>
              <Link to="AddFirm">Add Firm</Link></li>
            <li>Add Product</li>
            <li>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default Sidebar