import type { NextPage } from "next"
import { Header } from "../components/Header"

import { Flex } from "@chakra-ui/react"
import { Hero } from "../components/Hero"
import { Info } from "../components/Info"
import { AbouSection } from "../components/AboutSection"
import { About } from "../components/AboutSection/About"

const Home: NextPage = () => {
  return (
    <Flex w="100%" d="block">
      <Header />
      <Flex>
        <Hero />
      </Flex>
      <Flex bg="whiteAlpha.900">
        <Info />
      </Flex>
      <Flex bg="whiteAlpha.900">
        <AbouSection />
      </Flex>
      <Flex bg="whiteAlpha.900">
        <About />
      </Flex>
    </Flex>
  )
}

export default Home
