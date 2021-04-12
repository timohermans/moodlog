import { signIn, useSession } from 'next-auth/client'
import Link from 'next/link'

interface Props {}

const HomeNavProfile = (props: Props) => {
  const [session, isLoading] = useSession()

  if (isLoading) return null

  if (session) {
    return (
      <Link href="/dashboard" passHref={true}>
        <a
          href="#"
          className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-white bg-blue-400 hover:bg-blue-500 cursor-pointer"
        >
          Go to dashboard, {session.user.name}
        </a>
      </Link>
    )
  }

  return (
    <div className="flex items-center justify-end md:flex-1">
      <a
        data-cy="login"
        onClick={() => signIn('keycloak')}
        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-white bg-blue-400 hover:bg-blue-500 cursor-pointer"
      >
        Sign in
      </a>
    </div>
  )
}

export default HomeNavProfile
