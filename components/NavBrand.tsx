import React from 'react'
import Image from 'next/image';

interface Props {}

const NavBrand = (props: Props) => {
  return (
    <div className="flex justify-start">
      <a href="#">
        <span className="sr-only">Workflow</span>
        <Image src="/icons/psychology/023-inspiration.svg" alt="me" width="64" height="64"/>
      </a>
    </div>
  )
}

export default NavBrand
