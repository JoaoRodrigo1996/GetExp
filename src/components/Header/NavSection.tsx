import { ReactNode } from "react"
import { Flex, Link } from "@chakra-ui/react"
import NextLink from "next/link"

interface NavSectionprops {
  children: ReactNode
}

export function NavSection({ children }: NavSectionprops) {
  return (
    <Flex as="nav">
      <NextLink href="#">
        <Link color="gray.400" mx="3" px="4">
          {children}
        </Link>
      </NextLink>
    </Flex>
  )
}
