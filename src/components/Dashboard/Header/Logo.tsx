import { Image } from "@chakra-ui/react"

export function Logo() {
  return (
    <Image
      boxSize="218px"
      objectFit="cover"
      src="/images/logo_image.svg"
      alt="Getexp logo image"
    />
  )
}
