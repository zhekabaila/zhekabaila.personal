import MoreButton from '@/components/ui/MoreButton'
import Container from '../../Container'

export const HomeContact = () => {
  return (
    <Container
      id="contact"
      margin
      className="border-y-4 border-y-black my-10 py-10"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-x-4">
          <h2 className="text-8xl font-bold">Get In Touch</h2>
        </div>
        <div className="flex items-center gap-x-6 mt-10">
          <MoreButton
            title="Instagtam Saya"
            link="https://instagram.com/zhekabailaa"
            blank
          />
          <MoreButton title="Lihat Selengkapnya" link="/contact" />
        </div>
      </div>
    </Container>
  )
}
