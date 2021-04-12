import SideNavLinks from "./SideNavLinks"
import SideNavLogout from "./SideNavLogout"
import SideNavUser from './SideNavUser'

interface Props {}

const SideNav = (props: Props) => {
  return (
    <div className="w-20 py-4 flex flex-col justify-between items-center text-white">
      <div>
        <SideNavUser />
        <SideNavLinks />
      </div>
      <div>
        <SideNavLogout />
      </div>
    </div>
  )
}

export default SideNav
