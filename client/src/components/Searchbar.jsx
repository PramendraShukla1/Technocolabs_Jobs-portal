import React from "react";
import "../styles/search.css";

const Searchbar = () => {
  return (
    <div className="search">
      <div className="jobtitle">
        <p>16,25,365 Jobs Available In Hyderabad</p>
      </div>
      <div className="searchbox">
        <input type="text" placeholder="Enter Your Keywords" />
        <input type="text" placeholder="Select Location" />
        <select
          data-placeholder="Select"
          className="select"
        >
            <option>All Categories</option>
            <option value="1">Accountant</option>
            <option value="2">IT Software</option>
            <option value="3">Banking</option>
            <option value="4">Finaces</option>
            <option value="5">Cook/Chef</option>
            <option value="6">Driveing</option>
            <option value="7">HR Recruiter</option>
            <option value="8">IT Hardware</option>
            <option value="9">Sales</option>
        </select>
        <div className="divbtn">
      <button type="button" class="btn searchbtn btn-danger">
        Search Here
        </button>
      </div>
      </div>
    </div>
  );
};

export default Searchbar;
