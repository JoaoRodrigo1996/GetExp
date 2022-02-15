import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text color="gray.100">Rodrigo Mesquita</Text>
        <Text color="gray.300" fontSize="small">
          rodrigo.mesquita96@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Rodrigo Mesquita"
        src="https://github.com/JoaoRodrigo1996.png"
      />
    </Flex>
  )
}
