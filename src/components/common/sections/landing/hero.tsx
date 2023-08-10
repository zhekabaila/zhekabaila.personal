import Image from 'next/image'

import Container from '@/components/layout/container'

const LandingHero = () => {
  return (
    <section>
      <Container className="py-28">
        <div className="flex flex-col md:flex-row justify-start items-center gap-x-7">
          <div className="basis-1/4">
            <Image
              src="/static/icons/400x600.svg"
              width={400}
              height={600}
              className="rounded-2xl"
              alt="my foto"
            />
          </div>
          <div className="basis-3/4">
            <h1 className="text-dark font-semibold text-[44px] leading-normal">
              Hey, I&apos;m Zheka!
            </h1>
            <p className="mt-5 text-[26px] leading-normal text-[#555]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              facere architecto sit, eaque maiores libero velit. At doloremque
              facere quisquam.
            </p>
            <p className="mt-5 text-[20px] leading-normal text-[#555]">
              <span className="italic">
                &quot;The best thing about a picture is that it never changes,
                even when the people in it do.&quot;
              </span>{' '}
              – Andy Warhol
            </p>
            <div className="mt-16">
              <button
                type="button"
                className="bg-primary py-5 px-7 text-white text-base font-semibold rounded-lg uppercase"
              >
                more about me
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LandingHero
