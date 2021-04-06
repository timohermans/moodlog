import React, { ReactElement } from 'react'
import NavBrand from './NavBrand'
import NavLinks from './NavLinks'
import NavProfile from './NavProfile'

interface Props {}

function Nav({}: Props): ReactElement {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 space-x-10">
          <NavBrand />
          <NavLinks />
          <NavProfile />
        </div>
      </div>
    </div>
  )
}

export default Nav
