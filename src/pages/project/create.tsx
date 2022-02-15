import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"

import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Header } from "../../components/Dashboard/Header"
import { Input } from "../../components/Form/Input"
import { Sidebar } from "../../components/Sidebar"

type CreateProjectFormData = {
  name: string
  description: string
  type: string
  techs: string
}

const createProjectFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  type: yup.string().required("Tipo de projeto obrigatório"),
  techs: yup.string().required("Informe as tecnologias do projeto."),
})

export default function CreateProject() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(createProjectFormSchema) })

  const handleCreateProject: SubmitHandler<CreateProjectFormData> = async (
    values
  ) => {
    await new Promise((resolver) => setTimeout(resolver, 2000))
    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(handleCreateProject)}
        >
          <Heading color="whiteAlpha.800" size="lg" fontWeight="normal">
            Criar projeto
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={"8"} w="100%">
              <Input
                name="name"
                label="Nome do projeto"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="description"
                label="Descrição do projeto"
                error={errors.description}
                {...register("description")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={"8"} w="100%">
              <Input
                name="type"
                label="Tipo de projeto"
                error={errors.type}
                {...register("type")}
              />
              <Input
                name="techs"
                label="Tecnologias utilizadas"
                error={errors.techs}
                {...register("techs")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/project" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="yellow"
                isLoading={isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
