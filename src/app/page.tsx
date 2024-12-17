import Container from '@/components/Container'

const Home = () => {
  return (
    <Container margin={false}>
      <section className="min-h-screen flex items-center">
        <h2 className="font-medium text-9xl">
          Welcome!
          <br />
          to my <br />
          website
        </h2>
      </section>
    </Container>
  )
}

export default Home
