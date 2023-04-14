import React from 'react'
import "../styles/card.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import DescriptionIcon from '@mui/icons-material/Description';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';

const Card = () => {
  return (
    <div className='card'>
      <div className="img">
        <img src="https://tse2.mm.bing.net/th?id=OIP.c8Zd3y_4je_5b76IcEt4VAHaGi&pid=Api&P=0" alt="" />
      </div>
      <hr />
   <div className="title">
    <h1 className='title-head'>HR Executive Jobs</h1>
   </div>
   <div className="desc">
    <p ><BusinessIcon/>TechnoAnalyze</p>
    <p><CurrencyRupeeIcon/>400000-500000</p>
    <p><PhoneIcon/>1234567890</p>
    <p><EmailIcon/>technoanalyze@gmail.com</p>
    <p><DescriptionIcon/>Analyze Weather and Climatic Conditions</p>
    <p><ContactsIcon/>Mumbai main road, 2nd lane, Mumbai</p>
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
