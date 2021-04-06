import React from 'react'
import Image from 'next/image';

interface Props {}

const NavBrand = (props: Props) => {
  return (
    <div className="flex justify-start">
      <a href="#">
        <span className="sr-only">Workflow</span>
      </a>
    </div>
  )
}

export default NavBrand
