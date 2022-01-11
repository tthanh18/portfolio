import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
  return <Container>
    <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
      Hello, I&apos;m a front-end developer based in VietNam!
    </Box>

    <Box display={{md: 'flex'}}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Nguyen Truong Thanh
        </Heading>
        <p>(Develop)</p>
      </Box>
    </Box>
  </Container>
}

export default Page