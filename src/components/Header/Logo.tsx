/* eslint-disable @next/next/no-img-element */
import { Flex, Image, Link } from "@chakra-ui/react"

export function Logo() {
  return (
    <Flex>
      <Link href="/">
        <Image objectFit="cover" src="/images/logo.svg" alt="Getexp Logo" />
      </Link>
    </Flex>
  )
}
