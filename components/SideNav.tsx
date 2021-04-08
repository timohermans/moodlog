import { useSession } from 'next-auth/client'
import { IoPersonCircleOutline } from 'react-icons/io5'

interface Props {}

const SideNav = (props: Props) => {
  const [session] = useSession()
  return (
    <div className="w-20 py-4 flex flex-col items-center">
      <IoPersonCircleOutline data-cy="nav-user-picture" className="text-5xl" style={{ fill: 'white' }} />
      <p className="text-xs font-bold    text-white">
        {session.user.name.split(' ')[0]}
      </p>
    </div>
  )
}

export default SideNav
