/* eslint-disable @next/next/no-img-element */
import { Button, Flex, Image, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
export function Hero() {
  return (
    <Flex
      maxWidth={1480}
      mx="auto"
      d="flex"
      align="center"
      justify="space-between"
    >
      <Flex
        d="flex"
        flex="1"
        flexDirection="column"
        align="start"
        justify="space-around"
      >
        <Text fontSize="5xl" color="whiteAlpha.900" fontWeight="bold">
          Encontre o projeto <br /> perfeito para alavancar <br /> seu portfólio
        </Text>
        <Text fontSize="xl" color="whiteAlpha.600" mt="6">
          Aqui os estudantes criam projetos pessoais com foco em <br /> aprender
          mais e tornar seu portfólio cada vez mais completo.
        </Text>
        <NextLink href="/user/register">
          <Button mt="6" colorScheme="yellow">
            Começar
          </Button>
        </NextLink>
      </Flex>
      <Flex flex="1">
        <Image
          boxSize="589px"
          objectFit="cover"
          src="/images/home_image.svg"
          alt="Imagem landing page"
        />
      </Flex>
    </Flex>
  )
}
