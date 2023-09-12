'use client'

// import { motion } from 'framer-motion'
import Container from '@/components/layout/container'
import Image from 'next/image'

const LandingHero = () => {
  return (
    <section>
      {/* <motion.div
        className="container text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }},
      > */}
      <Container className="">
        <div className="flex items-center py-24">
          <div className="basis-1/2 space-y-3">
            <h1 className="text-3xl font-semibold">Hi there!</h1>
            <p>my name is zheka baila arkan</p>
          </div>
          <div className="flex justify-center basis-1/2">
            <div className="relative">
              <Image
                src="/static/icons/500.svg"
                width={250}
                height={250}
                alt="My Foto"
                className="rounded-xl drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
      {/* </motion.div> */}
    </section>
  )
}

export default LandingHero
