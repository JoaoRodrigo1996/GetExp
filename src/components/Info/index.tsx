import { Flex, Text } from "@chakra-ui/react"

export function Info() {
  return (
    <Flex
      maxWidth={1120}
      mx="auto"
      mt="8"
      d="flex"
      align="center"
      justify="space-between"
    >
      <Text flex="1" fontSize="5xl" fontWeight="bold">
        Entenda como <br /> funciona:
      </Text>
      <Text flex="1" fontSize="xl">
        Encontre um projeto que você ache interessante de fazer parte e que vai
        agregar no seu portfólio. Lembre-se, você não está se candidatando para
        um emprego, você está criando projetos pessoais e não remunerados com
        diversos alunos com o objetivo de praticar, aprender e deixar seu
        portfólio cada vez mais rico em conteúdo e qualidade.
      </Text>
    </Flex>
  )
}
