import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'

interface Props {}

const NavProfile = (props: Props) => {
  const [session, isLoading] = useSession()
  const { route, push } = useRouter()

  console.log(route)

  if (isLoading) return null

  if (session && route === '/') {
    return push('/dashboard')
  }

  if (session) {
    return (
      <div className="flex items-center justify-end md:flex-1">
        Welcome, {session.user.name}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-end md:flex-1">
      <a
        data-cy="login"
        onClick={() => signIn()}
        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-white bg-blue-400 hover:bg-blue-500 cursor-pointer"
      >
        Sign in
      </a>
    </div>
  )
}

export default NavProfile
