import React from 'react'
import "../styles/entries.css"

const Entries = () => {
  return (
    <div className='entries'>
      <p className="p-total">Showing all Entries</p>
      <div className="sort">
      <p className='p-select'>Sort By: </p>
        <select name="" id="">
            <option className='entries-options' value="relavant">Relavant</option>
            <option className='entries-options' value="relavant">Newest First</option>
            <option className='entries-options' value="relavant">Highest First</option>
            <option className='entries-options' value="relavant">Lowest Firstt</option>
            <option className='entries-options' value="relavant">High Ratings</option>
            <option className='entries-options' value="relavant">Popular</option>

            </select>
      </div>
    </div>
  )
}

export default Entries
