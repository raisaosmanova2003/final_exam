import React, { Fragment } from 'react'
import Header from '../../layout/site/Header/Header'
import Footer from '../../layout/site/Footer/Footer'
import { Outlet  } from "react-router-dom";
const SiteRoot = () => {
  return (
    <Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export default SiteRoot
