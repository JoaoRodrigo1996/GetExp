import { Flex, Image, Text } from "@chakra-ui/react"

export function About() {
  return (
    <Flex
      maxWidth={1120}
      mx="auto"
      mt="12"
      d="flex"
      align="center"
      justify="space-between"
    >
      <Flex flex="1">
        <Image
          boxSize="589px"
          objectFit="cover"
          src="/images/about_image.svg"
          alt="About image"
        />
      </Flex>
      <Flex ml="4" flex="1" d="flex" flexDirection="column">
        <Text fontSize="5xl" fontWeight="bold">
          Sobre nós:
        </Text>
        <Text fontSize="md">
          Como recém formados, nós passamos por diversas situações que todo
          estudante e recém formado passa. Ao aplicar para uma vaga, por mais
          que você cumpra todos os requisitos e diferenciais, se você não tem
          experiência ou bons projetos no seu portfólio, sua chance de conseguir
          essa vaga é muito baixa. Durante nossa busca por empregos, seja nível
          estagiário ou júnior, nossa barreira sempre foi a experiência, e
          quando questionávamos os recrutadores de como iriamos ter experiência
          sem uma primeira oportunidade as respostas sempre foram: Crie projetos
          pessoais, não projetos simples, tente algo complexo e completo, que
          passe pela parte de pesquisa, estruturação e desenvolvimento. Mas
          fazer um projeto complexo e completo não é fácil e nem rápido, fazer
          tudo isso sozinho é muito cansativo, afinal, é como se você se
          tornasse um time de uma pessoa só. Pensando nisso, resolvemos criar um
          lugar onde todos que precisam criar projetos pessoais complexos,
          diferentes e que seja algo realmente bem feito para construir um bom
          portfólio possam se encontrar e desenvolver um projeto juntos, desta
          forma, o processo fica mais interessante e a troca de experiências se
          torna mais um ponto positivo.
        </Text>
      </Flex>
    </Flex>
  )
}
