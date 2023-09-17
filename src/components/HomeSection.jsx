import React from 'react'
import pic from '../pics/Fixer-trott.png'
import pic2 from '../pics/Street-trott2.png'

import '../components/HomeSection.css'

const HomeSection = () => {
  return (
    <div>
      <div className="container">
<div className="row">
    <div className="col-5">
        <h1>A mobile scooters mechanic who comes to your home!</h1>
<p>With Cyclofix, you can book a service with scooter repair experts. They are mobile scooter mechanics who come to your home.</p>
<p><h5>Tip:</h5> if your home is not in a covered area, try your workplace.</p>
<button className='btn-2'>Book a Service  <i class="fa-solid fa-angle-right"></i></button>
    </div>
    <div className="col-5">
        <img src={pic} alt="" />
    </div>

</div>


      </div>
      <div className="spc"></div>
      <div className="container">
<div className="row">
    <div className="col-5 ushaq-11">
    <h3>Not available? You can still get your scooter repaired!</h3>
    <p>If you are unable to be on site, the mechanics can service your scooter without you.

</p>
    <img src={pic2} alt="" />


    </div>
    <div className="col-5">
 <h5>Step 1</h5>
<p>Leave your bike or scooter attached to a location of your choice.</p>
 <h5>Step 2</h5>
<p>Describe precisely your bike or scooter (you can add pictures upon booking).</p>
 <h5>Step 3</h5>
<p>Select online payment when booking.</p>
 <h5>Step 4</h5>
 <p>A mechanic will come directly on the spot to make sure you can get back on the road with your scooter!</p>   


    </div>

</div>


      </div>


    </div>
  )
}

export default HomeSection
