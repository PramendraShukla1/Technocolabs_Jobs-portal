import React from 'react'
import "../styles/card.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import DescriptionIcon from '@mui/icons-material/Description';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';

const Card = ({title,minsal,maxsal,description,hiringcompany,email,phnumber,address,image}) => {



  return (
    <div className='card'>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <hr />
   <div className="title">
    <h1 className='title-head'>{title}</h1>
   </div>
   <div className="desc">
    <p ><BusinessIcon/>{hiringcompany}</p>
    <p><CurrencyRupeeIcon/>{minsal}-{maxsal}</p>
    <p><PhoneIcon/>{phnumber}</p>
    <p><EmailIcon/>{email}</p>
    <p><DescriptionIcon/>{description}</p>
    <p><ContactsIcon/>{address}</p>
    </div>
    <hr />
<div className="admin">
<p><SupervisorAccountTwoToneIcon/>HR/Admin</p>
<p><PhoneIcon/>Phone Verified</p>
</div>
<hr />
<div className="btn-apply">
<button type="button" class="btn btn-primary btn-now">Apply Now</button>
</div>
    </div>
  )
}

export default Card
