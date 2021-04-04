import React from 'react'

interface Props {}

const NavLinks = (props: Props) => {
  return (
    <nav className="space-x-10">
      <div className="relative">
        <button
          type="button"
          className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-expanded="false"
        >
          Triple column
        </button>
      </div>
    </nav>
  )
}

export default NavLinks
