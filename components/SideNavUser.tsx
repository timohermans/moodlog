import { useSession } from 'next-auth/client'
import { IoPersonCircleOutline } from 'react-icons/io5'

interface Props {}

const SideNavUser = (props: Props) => {
  const [session] = useSession()

  return (
    <div className="flex flex-col items-center">
      <IoPersonCircleOutline
        data-cy="nav-user-picture"
        className="text-5xl"
        style={{ fill: 'white' }}
      />
      <p className="text-xs font-bold text-white">
        {session?.user.name.split(' ')[0]}
      </p>
    </div>
  )
}

export default SideNavUser
