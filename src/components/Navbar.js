import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export default function Navbar(props) {  
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" href = "/">{props.title}</Link>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to = "/about">{props.aboutText}</Link>
        </li>
      </ul>
      <div className="colorpalet">
        <p className=' col yellow' onClick={props.ybtn}></p>
        <p className=' col orange' onClick={props.obtn}></p>
        <p className=' col red' onClick={props.rbtn}></p>
        <p className=' col green' onClick={props.gbtn}></p>
      </div>
      <div className={`form check form-switch text-${props.mode=== 'light'? 'dark':'light'}`}>
        <input type="checkbox" className="form-check-input mx-4" onClick={props.toggleMode} id="flexSwitchcheckdefault" />
        <label className="form-check-label"  htmlFor= "flexSwitchcheckdefault" >Enable dark mode</label>
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <buthrefn className="btn btn-outline-primary" type="submit">Search</buthrefn>
      </form> */}
    </div>
  </div>
</nav>

  )
}
Navbar.propTypes = {title:PropTypes.string.isRequired,
                    aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'set title ',
  aboutText: 'About something'
};
