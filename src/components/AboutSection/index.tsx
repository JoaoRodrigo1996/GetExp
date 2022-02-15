import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react"
import { RiLoginBoxLine, RiUser3Line } from "react-icons/ri"
import { About } from "./About"

export function AbouSection() {
  return (
    <>
      <SimpleGrid
        maxWidth={1120}
        mx="auto"
        columns={4}
        spacing={5}
        mt="8"
        mb="8"
      >
        <Box
          d="flex"
          flexDirection="column"
          algin="center"
          justify="space-between"
          w="250px"
          h="200px"
          p="6"
        >
          <Flex
            bgColor="gray.900"
            w="8"
            h="8"
            p="3"
            borderRadius="md"
            d="flex"
            mx="auto"
            align="center"
            justify="center"
          >
            <Icon as={RiLoginBoxLine} fontSize="20" color="whiteAlpha.900" />
          </Flex>
          <Flex
            d="flex"
            flexDirection="column"
            align="center"
            justify="center"
            mt="4"
          >
            <Text mb="4" fontSize="lg" fontWeight="bold">
              Crie uma conta
            </Text>
            <Text>
              Se você não tem uma conta, essa é a hora de ter uma. Caso já tenha
              é só entrar com seu email e senha.
            </Text>
          </Flex>
        </Box>
        <Box
          d="flex"
          flexDirection="column"
          algin="center"
          justify="space-between"
          w="250px"
          h="200px"
          p="6"
        >
          <Flex
            bgColor="gray.900"
            w="8"
            h="8"
            p="3"
            borderRadius="md"
            d="flex"
            mx="auto"
            align="center"
            justify="center"
          >
            <Icon as={RiUser3Line} fontSize="20" color="whiteAlpha.900" />
          </Flex>
          <Flex
            d="flex"
            flexDirection="column"
            align="center"
            justify="center"
            mt="4"
          >
            <Text mb="4" fontSize="lg" fontWeight="bold">
              Complete seu perfil
            </Text>
            <Text>
              Coloque uma foto de perfil, diga qual sua área de estudo e qual
              função deseja ocupar em um projeto e deixe links para contato.
            </Text>
          </Flex>
        </Box>
        <Box
          d="flex"
          flexDirection="column"
          algin="center"
          justify="space-between"
          w="250px"
          h="200px"
          p="6"
        >
          <Flex
            bgColor="gray.900"
            w="8"
            h="8"
            p="3"
            borderRadius="md"
            d="flex"
            mx="auto"
            align="center"
            justify="center"
          >
            <Icon as={RiLoginBoxLine} fontSize="20" color="whiteAlpha.900" />
          </Flex>
          <Flex
            d="flex"
            flexDirection="column"
            align="center"
            justify="center"
            mt="4"
          >
            <Text mb="4" fontSize="lg" fontWeight="bold">
              Crie uma conta
            </Text>
            <Text>
              Se você não tem uma conta, essa é a hora de ter uma. Caso já tenha
              é só entrar com seu email e senha.
            </Text>
          </Flex>
        </Box>
        <Box
          d="flex"
          flexDirection="column"
          algin="center"
          justify="space-between"
          w="250px"
          h="200px"
          p="6"
        >
          <Flex
            bgColor="gray.900"
            w="8"
            h="8"
            p="3"
            borderRadius="md"
            d="flex"
            mx="auto"
            align="center"
            justify="center"
          >
            <Icon as={RiLoginBoxLine} fontSize="20" color="whiteAlpha.900" />
          </Flex>
          <Flex
            d="flex"
            flexDirection="column"
            align="center"
            justify="center"
            mt="4"
          >
            <Text mb="4" fontSize="lg" fontWeight="bold">
              Crie uma conta
            </Text>
            <Text>
              Se você não tem uma conta, essa é a hora de ter uma. Caso já tenha
              é só entrar com seu email e senha.
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
      {/* <About /> */}
    </>
  )
}
