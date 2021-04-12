import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { GiAncientColumns } from 'react-icons/gi'
interface Props {}

const links = [
  {
    name: 'Home',
    icon: IoHomeOutline,
    href: '/dashboard',
    testId: 'nav-dashboard',
  },
  {
    name: 'Triple column technique',
    icon: GiAncientColumns,
    href: '/triple-column',
    testId: 'nav-triple-column',
  },
]

const SideNavLinks = (props: Props) => {
  return (
    <ul className="flex flex-col items-center">
      {links.map((link) => {
        const Icon = link.icon

        return (
          <li className="mt-8 " key={link.href}>
            <Link href={link.href} passHref={true}>
              <a
                className="rounded-md p-2 block hover:bg-red-300"
                href="#"
                data-cy={link.testId}
              >
                <Icon className="text-2xl" />
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SideNavLinks
