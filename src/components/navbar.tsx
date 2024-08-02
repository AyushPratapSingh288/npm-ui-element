import * as React from 'react'
import './navbar.css'
type PropsType = {

    loadcolor?: string;
    size?:string;
  };
  const navbar=()=>{
    
    return(
        <>
        <header className="navbar navbar-fixed-top">
    <div className="navbar-inner">
		<div className="container">
        
            
            <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>

           
            <a className="brand" href="#"><b>LOGO</b></a>
        
          
            <nav className="nav-collapse collapse">
                <ul className="nav">
                
				    <li><a href="#top">Home</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mega Menu <b className="caret"></b></a>                      

						<ul className="dropdown-menu mega-menu">
    
						    <li className="mega-menu-column">
						    <ul>
						        <li className="nav-header">Mega menu 1</li>
						        <img src="http://placehold.it/150x120"/>
								<li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						    </ul>
						    </li>    
        
						    <li className="mega-menu-column">
						    <ul>
						    <li className="nav-header">Mega menu 2</li>
						        <img src="http://placehold.it/150x120"/>
								<li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						    </ul>
						    </li> 

						    <li className="mega-menu-column">
						    <ul>                            
						    <li className="nav-header">Mega menu 3</li>
						        <img src="http://placehold.it/150x120"/>
								<li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						        <li><a href="#">Mega-menu link</a></li>
						    </ul>
						    </li> 
							
						</ul>
						
					</li>
				        
                    <li><a href="#about">About Us</a></li>                                                                               
                    <li><a href="#pricing">Our Pricing</a></li> 
                    <li><a href="#team">Our Team</a></li> 
                    <li><a href="#contact">Contact</a></li>                         
                
				</ul>          
            </nav>
                    
        </div>
    </div>
</header>
       
        </>
    )
  }
  export {navbar}