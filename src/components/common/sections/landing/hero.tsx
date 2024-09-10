import Image from 'next/image'

export const Hero = () => {
  return (
    <section
      id="home"
      className="px-4 lg:px-36 min-h-screen snap-start pt-44 lg:pt-56"
    >
      <div>
        <h2 className="text-dark dark:text-primary tracking-widest text-6xl lg:text-[125px] leading-[1] font-bold">
          HI THERE!
        </h2>
        <p className="text-dark dark:text-primary text-2xl lg:text-3xl mt-9">
          I&apos;am Zheka Baila Arkan
        </p>
        <div className="flex flex-col lg:flex-row gap-y-12 gap-x-12 items-center justify-between mt-28">
          <div className="flex items-center justify-center lg:basis-1/3">
            <div className="rounded-full shadow-profil">
              <Image
                src="/zhekabaila.jpg"
                width={230}
                height={230}
                alt="zhekabaila"
                quality={100}
                loading="lazy"
                className="object-center aspect-square object-cover size-[230px] rounded-full"
              />
            </div>
          </div>
          <p className="lg:basis-2/3 text-dark dark:text-primary text-3xl lg:text-4xl font-bold max-w-5xl leading-[1.5]">
            Saya adalah seorang Junior Frontend Web Development, saya sangat
            tertarik dengan bidang Software Engineer sejak saya duduk di bangku
            SMK. Saya cukup familiar dengan bahasa pemrograman yang digunakan
            untuk mengembangkan sebuah website.
          </p>
        </div>
      </div>
    </section>
  )
}
