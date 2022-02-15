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

type SignUpFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const signUpFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
})

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(signUpFormSchema) })

  const handleSignUp: SubmitHandler<SignUpFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex flex="1">
        <Image
          boxSize="100vh"
          objectFit="cover"
          src="/images/create_image.svg"
          alt="Register page image"
        />
      </Flex>
      <Flex
        as="form"
        w="100%"
        flex="1"
        //maxWidth={360}
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Heading size="lg" fontWeight="bold" mb="6">
          Criar Conta
        </Heading>

        <Stack spacing="4">
          <Input
            name="name"
            label="Nome Completo"
            error={errors.email}
            {...register("name")}
          />
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
          <Input
            name="password_confirmation"
            type="password"
            label="Confirmar senha"
            error={errors.password_confirmation}
            {...register("password_confirmation")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="yellow"
          size="lg"
          isLoading={isSubmitting}
        >
          Registrar
        </Button>
        <Text mt="6">
          já possui uma conta?{" "}
          <Link href="/user/login" color="blue.700" fontWeight="bold">
            Login
          </Link>
        </Text>
      </Flex>
    </Flex>
  )
}
