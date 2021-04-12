import { signOut } from 'next-auth/client'
import { IoLogOutOutline } from 'react-icons/io5'

interface Props {}

const SideNavLogout = (props: Props) => {
  const logout = () => {
    signOut({
      callbackUrl: '/',
      redirect: true,
    })
  }

  return (
    <button
      data-cy="nav-logout"
      className="rounded-md p-2 block hover:bg-red-300"
      onClick={logout}
    >
      <IoLogOutOutline className="text-2xl" />
    </button>
  )
}

export default SideNavLogout
