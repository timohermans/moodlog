import React, { ReactElement } from 'react'
import NavBrand from './NavBrand'
import NavLinks from './NavLinks'
import HomeNavProfile from './HomeNavProfile'

interface Props {}

function HomeNav({}: Props): ReactElement {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-end items-center py-6 space-x-10">
        <HomeNavProfile />
      </div>
    </div>
  )
}

export default HomeNav
