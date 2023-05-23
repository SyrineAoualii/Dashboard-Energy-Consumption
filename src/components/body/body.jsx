import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Body() {
    return ( 
        <div className="container-scroller"> 


        {/*navbar */ }
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
            <div className="me-3">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
                <span className="icon-menu"></span>
              </button>
            </div>
            <div>
              <a className="navbar-brand brand-logo" href="index.html">
                <img src=".\images\logo1.png" alt="logo"  style={{width:'150px' ,height :'100%'}}/>
              </a>
              <a className="navbar-brand brand-logo-mini" href="index.html">
                <img src="images/logo-mini.svg" alt="logo"   />
              </a>
            </div>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-top"> 
            <ul className="navbar-nav">
              <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                <h1 className="welcome-text">Good Morning, <span className="text-black fw-bold">Mr</span></h1>
                <h3 className="welcome-sub-text">Welcome to your historical diagram ! </h3>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
      
              {/* search */}
              <li className="nav-item">
                <form className="search-form" action="#">
                  <i className="icon-search"></i>
                  <input type="search" className="form-control" placeholder="Search Here" title="Search here"/>
                </form>
              </li>
              {/* mail */}
              <li className="nav-item dropdown">
                <a className="nav-link count-indicator" id="notificationDropdown" href="#top" data-bs-toggle="dropdown">
                  <i className="icon-mail icon-lg"></i>
                </a> 
              </li>
              
              {/* notification */}
              <li className="nav-item dropdown"> 
                <a className="nav-link count-indicator" id="countDropdown" href="#top" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="icon-bell"></i>
                  <span className="count"></span>
                </a>
              </li>  
            </ul> 
          </div>
        </nav>


  <section>
         {/* partial settings-panel */} 
        <div className=  "container-fluid page-body-wrapper">
          <div className="theme-setting-wrapper">
            <div id="settings-trigger"><i className="ti-settings"></i></div>
            <div id="theme-settings" className="settings-panel">
              <i className="settings-close ti-close"></i>
  
            </div>
          </div>


          {/* partial sidebar*/}
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <i className="mdi mdi-grid-large menu-icon"></i>
                  <span className="menu-title">Dashboard</span>
                </a>
              </li>
              <li className="nav-item nav-category">Entreprise Profile</li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                  <i className="menu-icon mdi mdi-floor-plan"></i>
                  <span className="menu-title">Entreprise</span>
                  <i className="menu-arrow"></i> 
                </a>
                <div className="collapse" id="ui-basic">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                  </ul>
                </div>
              </li>
              
             
              <li className="nav-item">
                <Link className="nav-link" data-bs-toggle="collapse" to="/tables" aria-expanded="false" aria-controls="tables">
                  <i className="menu-icon mdi mdi-table"></i>
                  <span className="menu-title">Tables</span>
                  <i className="menu-arrow"></i>
                </Link>
                <div className="collapse" id="tables">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                  </ul>
                </div>
              </li>
      
             
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                  <i className="menu-icon mdi mdi-account-circle-outline"></i>
                  <span className="menu-title">LogOut</span>
                  <i className="menu-arrow">
                    
                  </i>
                </a>
              </li>
             
            </ul>
          </nav>

          
          {/* partial body */}    
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-sm-12">
                  <div className="home-tab">
                    <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#temperature" role="tab" aria-selected="false">Temperature</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#Gaz" role="tab" aria-selected="false">Gaz</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#Electricity" role="tab" aria-selected="false">electricity</a>
                        </li>
                      </ul>
                      <div>
                        <div className= 'btn-wrapper'>
                          
                          <a href="#" className="btn btn-otline-dark align-items-center "><i className="icon-share"></i> Share</a>
                          <a href="#" className="btn btn-otline-dark " ><i className="icon-printer"></i> Print</a>
                          <a href="#" className="btn btn-primary text-white me-0 "><i className="icon-download"></i> Export</a>
                        
                        </div>
                      </div>
                    </div>
                    <div className="tab-content tab-content-basic">
                      <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 


                      <section>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="statistics-details d-flex align-items-center justify-content-between">
                          
                              <div>
                                <p className="statistics-title">Temperature Consumption</p>
                                <h3 className="rate-percentage">32C°</h3>
                                <p className="text-success d-flex"><i className="mdi mdi-menu-up"></i><span>+0.1%</span></p>
                                <p className="statistics-title">Optimal rate</p>
                                <h3 className="rate-percentage">25C°</h3>
                                
                                
                              </div>
                              <div>
                                <p className="statistics-title">Electricity Consumption</p>
                                <h3 className="rate-percentage">23 Watts</h3>
                                <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>68.8</span></p>
                                <p className="statistics-title">Optimal rate</p>
                                <h3 className="rate-percentage">20 Watts</h3>
                              </div>
                              <div className="d-none d-md-block">
                                <p className="statistics-title">Gaz Consumption</p>
                                <h3 className="rate-percentage">51m3</h3>
                                <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span></p>
                                <p className="statistics-title">Optimal rate</p>
                                <h3 className="rate-percentage">50m3</h3>
                              </div>
                            </div>
                          </div>
                        </div> 

                        </section>



                        <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded table-darkBGImg">
                                  <div className="card-body">
                                    <div className="col-sm-8">
                                      <h3 className="text-white upgrade-info mb-0">
                                        Enhance your <span className="fw-bold" style={{fontStyle:'italic',fontFamily:'cursive'}}>Energy</span> for better outreach
                                      </h3>
                                      <button href="#" className="btn btn-info upgrade-btn">Notify </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                         </div>

                        <div className={styles['row1']}>
                          <div className="col-lg-8 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card" style={{height: '700px'}}>
                                <div className="card card-rounded">

                                  <div className="card-body" >
                                    <div className="d-sm-flex justify-content-between align-items-start" style={{height: '750px'}}>
                                      <div>
                                       <h4 className="card-title card-title-dash">Performance Diagram Chart</h4>
                                      <img src='.\images\datacake-integration-dashboard.webp' alt='' style={{ width: '90em',height: '52em' }}/>
                                  
                                      </div>
                                      <div id="performance-line-legend"></div>
                                    </div>
                                    <div className="chartjs-wrapper mt-5">
                                      <canvas id="performaneLine"></canvas>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                        
                        {/* temperature card */}
                        <div className={styles['row']} id='temperature'>
                          <div className="col-lg-8 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className={styles['card-body']}>
                                  
                                  <img src='.\images\temp1.PNG' alt=''  />
 
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                             {/* 2 card */}

                            <div className= "row flex-grow">
                              <div className="col-md-4 col-lg-4 grid-margin stretch-card">
                                <div className='card card-rounded'>
                                  
                                <img src='.\images\temp3.PNG' alt='' style={{ width: '29em',height:'30em' }}/>

                                </div>
                              </div>


                              <div className="col-md-8 col-lg-8 grid-margin stretch-card" >
                                <div className="card card-rounded">
                                  <div className="card-body">
                                   
                                  <img src='.\images\temp4.PNG' alt='' style={{ width: '60em',height:'30em' }}/>
                                   
                                  </div> 
                                </div>
                              </div>
                            </div>
                          </div>
                         
                        </div>

                        {/* Electricity card */}
                        <div className={styles['row']} id='Electricity'>
                          <div className="col-lg-8 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className={styles['card-body']}>
                                  
                                  <img src='.\images\elect.PNG' alt=''  />
 
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                             {/* 2 card */}

                            <div className= "row flex-grow">
                              <div className="col-md-4 col-lg-4 grid-margin stretch-card">
                                <div className='card card-rounded'>
                                  
                                <img src='.\images\ELEC2.PNG' alt='' style={{ width: '29em',height:'30em' }}/>

                                </div>
                              </div>


                              <div className="col-md-8 col-lg-8 grid-margin stretch-card" >
                                <div className="card card-rounded">
                                  <div className="card-body">
                                   
                                  <img src='.\images\electr3.PNG' alt='' style={{ width: '60em',height:'30em' }}/>
                                   
                                  </div> 
                                </div>
                              </div>
                            </div>
                          </div>
                         
                        </div>

                        {/* Gaz card */}
                        <div className={styles['row']} id='Gaz'>
                          <div className="col-lg-8 d-flex flex-column">
                            <div className="row flex-grow">
                              <div className="col-12 grid-margin stretch-card">
                                <div className="card card-rounded">
                                  <div className={styles['card-body']}>
                                  
                                  <img src='.\images\gaz.PNG' alt=''  />
 
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                             {/* 2 card */}

                            <div className= "row flex-grow">
                              <div className="col-md-4 col-lg-4 grid-margin stretch-card">
                                <div className='card card-rounded'>
                                  
                                <img src='.\images\gaz2.PNG' alt='' style={{ width: '29em',height:'30em' }}/>

                                </div>
                              </div>


                              <div className="col-md-8 col-lg-8 grid-margin stretch-card" >
                                <div className="card card-rounded">
                                  <div className="card-body">
                                   
                                  <img src='.\images\gaz3.PNG 'alt='' style={{ width: '60em',height:'30em' }}/>
                                   
                                  </div> 
                                </div>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                        
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
            </section>
        </div>
               
     );

}
export default Body ;

