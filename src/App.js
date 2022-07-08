import React , { useState } from 'react';
import { Switch } from 'antd'
import './App.css';


const  App = () =>{

  const [toggle , setToogle ] = useState(false);
  const toggler = () => {
    toggle ? setToogle(false) : setToogle(true)
  }



  return (
    <div className="App">
      <div className='bgRight'></div>
      <div className='bgLeft'></div>
      <section id="pricing" class="pt-4 pb-5 bgColor">
        <div class="container-lg">
          <div class="text-center">
            <h2 class="fw-bold numColor">Our Pricing</h2>
            <div className='my-4'>
              <span className='fs-6 fw-bold accentColor'>Anually</span> <Switch  className='mx-2' onClick={ toggler }/> <span className='fs-6 fw-bold accentColor'>Monthly</span>
            </div>
          </div>

          <div class="row g-0 align-items-center justify-content-center ">
            <div class="col-8 col-lg-3 col-xl-3 my-3">
              <div class="card g-3 border-0">
                <div class="card-body text-center py-4 rounded">
                  <h4 class="card-title fw-bold accentColor">Basic</h4>
                  <p class="display-5 my-4  fw-bold numColor">{ toggle ? '$19.99' : '$199.99' }</p>
                  <ul class="list-group list-group-flush d-lg-block">
                    <li class="list-group-item"></li>
                    <li class="list-group-item fs-6 fw-bold accentColor">  500 GB Storage</li>
                    <li class="list-group-item fs-6 fw-bold accentColor">2 Users Allowed</li>
                    <li class="list-group-item fs-6 fw-bold accentColor">Send up to 3 GB</li>
                    <li class="list-group-item"></li>
                  </ul>
                  <a href="#" className='btn mt-3 d-lg-block d-block btnSide'>Learn More</a>
                </div>
              </div>
            </div>

            <div class="col-8 col-lg-3 my-2  shadow  center">
                <div class="card-body text-center py-5 mainColor rounded">
                  <h4 class="card-title fw-bold light">Professional</h4>
                  <p class="display-5 my-4 text-light fw-bold"> { toggle ? '$18.99' : '$249.99' } </p>
                  <ul class="list-group list-group-flush d-lg-block">
                    <li class="list-group-item mainColor border-light"></li>
                    <li class="list-group-item fs-6 fw-bold light mainColor border-light">1 TB Storage</li>
                    <li class="list-group-item fs-6 fw-bold light mainColor border-light">5 Users Allowed</li>
                    <li class="list-group-item fs-6 fw-bold light mainColor border-light">Send up to 10 GB</li>
                    <li class="list-group-item fs-6 fw-bold mainColor border-light"></li>
                  </ul>
                  <a href="#" class="btn  mt-3 d-lg-block d-block btnCenter">
                    Learn More
                  </a>
                </div>
            </div>

            <div class="col-8 col-lg-3 col-xl-3 my-3">
              <div class="card g-3 border-0">
                <div class="card-body text-center py-4 rounded">
                  <h4 class="card-title my-3 fw-bold accentColor">Master</h4>
                  <p class="display-5 my-4  fw-bold numColor">{ toggle ? '$39.99' : '$399.99' }</p>
                  <ul class="list-group list-group-flush d-lg-block">
                    <li class="list-group-item"></li>
                    <li class="list-group-item fs-6 fw-bold accentColor">2 TB Storage</li>
                    <li class="list-group-item fs-6 fw-bold accentColor">10 Users Allowed</li>
                    <li class="list-group-item fs-6 fw-bold accentColor">Send up to 20 GB</li>
                    <li class="list-group-item"></li>
                  </ul>
                  <a href="#" class="btn my-2 d-lg-block d-block btnSide">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> 
        {/* end container  */}
      </section>
    </div>

  );

}

export default App;
