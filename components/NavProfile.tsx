import { signIn, signOut, useSession} from 'next-auth/client';

interface Props {}

const NavProfile = (props: Props) => {
  const [session, loading] = useSession()

  if (session) {
    return (
      <div className="hidden md:flex items-center justify-end md:flex-1">
        Welcome, {session.user.name}
      </div>
    )
  }

  return (
    <div className="hidden md:flex items-center justify-end md:flex-1">
      <a
        id="login"
        onClick={() => signIn()}
        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
      >
        Sign in
      </a>
      <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
        Sign up
      </a>
    </div>
  )
}

export default NavProfile
