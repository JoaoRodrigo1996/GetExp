import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"
import { FaFigma } from "react-icons/fa"
import { RiAddLine, RiBookmarkLine } from "react-icons/ri"
import { Header } from "../../components/Dashboard/Header"
import { Sidebar } from "../../components/Sidebar"

export default function Project() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Meus projetos
            </Heading>
            <Link href="/project/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="yellow"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <SimpleGrid flex="1" gap="4" minChildWidth="240px" align="flex-start">
            <Box
              p={["6", "8"]}
              boxShadow="md"
              bg="gray.900"
              borderRadius={8}
              pb="4"
            >
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
                <Button w="100%" colorScheme="gray" color="gray.800">
                  Ver mais
                </Button>
              </Flex>
            </Box>
            <Box
              p={["6", "8"]}
              boxShadow="md"
              bg="gray.900"
              borderRadius={8}
              pb="4"
            >
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
                <Button w="100%" colorScheme="gray" color="gray.800">
                  Ver mais
                </Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  )
}
