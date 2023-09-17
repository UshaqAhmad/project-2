import React from 'react'
import banner from '../pics/remove-bg.jpg'
import '../components/Banner.css'
const Banner = () => {
  return (
    <>
  <img className='B-img' src={banner} alt="" /> 
  <div className="spc"></div>
  <section className="container pt-3 mb-3  usha1122">
  <h1 className="h1 block-title text-center">Get your scooter pampered by a pro</h1>
  <div className="row pt-5 mt-30">
    <div className="col-lg-4 col-sm-6 mb-30 pb-5">
      <a className="card" href="#">
        <div className="box-shadow bg-white rounded-circle mx-auto text-center ushaq" style={{width: 90, height: 90, marginTop: '-45px'}}><i  class="fa-solid fa-person-biking"></i></div>
        <div className="card-body text-center">
          <h1 className="card-title pt-3">Lightning-fast scooter repairs</h1>
          <p className="card-text text-xl">Our ever-growing network of mechanics allows you to book a service within 48 hours!</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
        </div>
      </a>
    </div>
   
    
   
    <div className="col-lg-4 col-sm-6 mb-30 pb-5">
      <a className="card" href="#">
        <div className="box-shadow bg-white rounded-circle mx-auto text-center ushaq" style={{width: 90, height: 90, marginTop: '-45px'}}><i class="fa-solid fa-magnifying-glass"></i></div>
        <div className="card-body text-center">
          <h1 className="card-title pt-5">Don't settle for anything but crystal clear communication</h1>
          <p className="card-text text-xl">On top of a transparent quote, you'll get the opportunity to better understand how your scooter actually works. You'll become an expert in no time.</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
        </div>
      </a>
    </div>
    <div className="col-lg-4 col-sm-6 mb-30 pb-5">
      <a className="card" href="#">
        <div className="box-shadow bg-white rounded-circle mx-auto text-center ushaq" style={{width: 90, height: 90, marginTop: '-45px'}}><i class="fa-solid fa-headset"></i></div>
        <div className="card-body text-center">
          <h1 className="card-title pt-1">A team available 6 days a week</h1>
          <p className="card-text text-xl">Our support team and our network of mechanics are available from Monday to Saturday to help you book a service!</p><span className="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i className="fe-icon-arrow-right" /></span>
        </div>
      </a>
    </div>
  </div>
</section>

    
    
    </>
  )
}

export default Banner
