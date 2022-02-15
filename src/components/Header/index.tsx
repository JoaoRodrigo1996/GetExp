import { Flex } from "@chakra-ui/react"
import { Login } from "./Login"
import { Logo } from "./Logo"
import { NavSection } from "./NavSection"
import { RiLoginBoxLine } from "react-icons/ri"

export function Header() {
  return (
    <Flex w="100%" bgColor="gray.900">
      <Flex
        w="100%"
        maxWidth={1120}
        mx="auto"
        as="header"
        py="4"
        d="flex"
        align="center"
        justify="space-between"
      >
        <Logo />
        <Flex>
          <NavSection>Home</NavSection>
          <NavSection>Como funciona</NavSection>
          <NavSection>Sobre</NavSection>
        </Flex>
        <Login icon={RiLoginBoxLine}>Entrar</Login>
      </Flex>
    </Flex>
  )
}
