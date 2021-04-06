import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

interface Props {}

interface NavItemData {
  href: string
  isAuthRequired: boolean
  text: string
}

const navItems: NavItemData[] = [
  {
    href: '/triple-column',
    isAuthRequired: true,
    text: 'Triple column',
  },
]

const NavLinks = (props: Props) => {
  const [session, isLoading] = useSession()

  const navItemsToDisplay = navItems.filter(
    (navItem) =>
      !navItem.isAuthRequired || (navItem.isAuthRequired && !!session)
  )

  if (isLoading) return null

  return (
    <>
      {navItemsToDisplay.map((navItem: NavItemData) => (
        <nav className="space-x-10">
          <Link href={navItem.href} passHref={true}>
            <a
              href="#"
              className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded="false"
            >
              {navItem.text}
            </a>
          </Link>
        </nav>
      ))}
    </>
  )
}

export default NavLinks
