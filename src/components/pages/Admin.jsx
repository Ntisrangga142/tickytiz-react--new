import React from 'react'
import HeaderAdmin from "../templates/HeaderAdmin.jsx"
import DashboardMain from "../organisms/Dashboard/DashboardMain.jsx"


function Admin() {
  return (
    <>
        <HeaderAdmin />
        <DashboardAddMovie />
    </>
  )
}

import DashboardListMovie from '../organisms/Dashboard/DashboardListMovie.jsx'
import DashboardAddMovie from '../organisms/Dashboard/DashboardAddMovie.jsx'

export default Admin