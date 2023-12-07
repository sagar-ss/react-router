import React from 'react'
import { NavLink, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigate = useNavigation()
  const isPageLoading = navigate.state === 'loading'
  return (
    <>
      <Navbar/>
      <section className='page'>
        {
          isPageLoading ? <div className='loading' /> : <Outlet/>
        }
      </section>
    </>
  )
}

export default HomeLayout
