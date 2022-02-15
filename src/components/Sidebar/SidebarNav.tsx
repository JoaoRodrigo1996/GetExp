import { Stack } from "@chakra-ui/react"
import { RiDashboardLine, RiProjectorLine, RiUser3Line } from "react-icons/ri"
import { MdOutlineCreate } from "react-icons/md"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiUser3Line} href="#">
          Perfil
        </NavLink>
        <NavLink icon={RiProjectorLine} href="/project">
          Meus projetos
        </NavLink>
      </NavSection>
    </Stack>
  )
}
