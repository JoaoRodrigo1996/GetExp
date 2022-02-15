import { ElementType, ReactNode } from "react"
import { Button, Flex, Icon, Link } from "@chakra-ui/react"

interface LoginProps {
  icon: ElementType
  children: ReactNode
}

export function Login({ icon, children }: LoginProps) {
  return (
    <Flex>
      <Link href="/user/login">
        <Button
          bgColor="gray.700"
          color="white"
          variant="solid"
          _hover={{ bgColor: "gray.600" }}
        >
          <Icon as={icon} fontSize="20" mr="1" />
          {children}
        </Button>
      </Link>
    </Flex>
  )
}
