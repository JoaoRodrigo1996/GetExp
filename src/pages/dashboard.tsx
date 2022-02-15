import { Box, Button, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react"
import { Header } from "../components/Dashboard/Header"
import { Sidebar } from "../components/Sidebar"

import { FaFigma } from "react-icons/fa"
import { RiBookmarkLine } from "react-icons/ri"
import { Pagination } from "../components/Pagination"

export default function Dashboard() {
  return (
    <Flex direction="column" bg="gray.900" w="100%" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Flex d="flex" justify="space-between">
              <Flex bg="whiteAlpha.800" p="2" borderRadius={"md"}>
                <Icon as={FaFigma} fontSize="22" />
              </Flex>
              <Flex>
                <Icon
                  as={RiBookmarkLine}
                  fontSize="20"
                  color="whiteAlpha.900"
                />
              </Flex>
            </Flex>
            <Flex d="flex" direction="column" my="4">
              <Text fontSize="lg" fontWeight="bold" color="whiteAlpha.900">
                Projeto Rede Social
              </Text>
              <Text color="whiteAlpha.700" mt="2">
                Queremos criar uma rede social completa com o intuito de
                desenvolver nossas habilidades a fundo, acreditamos que rede
                social é uma das coisas mais complexas de se desenvolver,
                portanto, ao concluir o desenvolvimento de uma rede social nós
                teremos um projeto muito completo em nosso portfólio.
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Button mr="2" w="100%" colorScheme="yellow">
                Participar
              </Button>
              <Button w="100%" colorScheme="gray">
                Ver mais
              </Button>
            </Flex>
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Flex d="flex" justify="space-between">
              <Flex bg="whiteAlpha.800" p="2" borderRadius={"md"}>
                <Icon as={FaFigma} fontSize="22" />
              </Flex>
              <Flex>
                <Icon
                  as={RiBookmarkLine}
                  fontSize="20"
                  color="whiteAlpha.900"
                />
              </Flex>
            </Flex>
            <Flex d="flex" direction="column" my="4">
              <Text fontSize="lg" fontWeight="bold" color="whiteAlpha.900">
                Projeto Rede Social
              </Text>
              <Text color="whiteAlpha.700" mt="2">
                Queremos criar uma rede social completa com o intuito de
                desenvolver nossas habilidades a fundo, acreditamos que rede
                social é uma das coisas mais complexas de se desenvolver,
                portanto, ao concluir o desenvolvimento de uma rede social nós
                teremos um projeto muito completo em nosso portfólio.
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Button mr="2" w="100%" colorScheme="yellow">
                Participar
              </Button>
              <Button w="100%" colorScheme="gray">
                Ver mais
              </Button>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex maxWidth={1480} mx="auto">
        <Pagination />
      </Flex>
    </Flex>
  )
}
