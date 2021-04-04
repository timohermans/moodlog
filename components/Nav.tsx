import React, { ReactElement } from 'react'
import NavBrand from './NavBrand'
import NavLinks from './NavLinks'
import NavProfile from './NavProfile'

interface Props {}

function Nav({}: Props): ReactElement {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 space-x-10">
          <NavBrand />
          <NavLinks />
          <NavProfile />
        </div>
      </div>
    </div>
  )
}

export default Nav
