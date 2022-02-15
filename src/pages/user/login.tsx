import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"

import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Input } from "../../components/Form/Input"

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
})

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex flex="1">
        <Image
          boxSize="100vh"
          objectFit="cover"
          src="/images/login_image.svg"
          alt="Login image"
        />
      </Flex>
      <Flex
        as="form"
        w="100%"
        flex="1"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Heading size="lg" fontWeight="bold" mb="6">
          Login
        </Heading>
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="yellow"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
        <Text mt="6">
          Ainda não tem uma conta?{" "}
          <Link fontWeight="bold" color="blue.700" href="/user/register">
            Criar conta
          </Link>
        </Text>
      </Flex>
    </Flex>
  )
}
