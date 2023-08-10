import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/layout/container'
import { TbExternalLink } from 'react-icons/tb'
import { portofolios } from '@/constants/app'
import Button from '@/components/ui/Button'

export default function Portofolio() {
  return (
    <Container>
      <div className="flex mt-14">
        <h1 className="text-4xl font-semibold text-black border-b-8 border-b-black pb-5 pr-6">
          Portofolio
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-y-16 my-24">
        {portofolios.map((item, index: number) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:odd:flex-row-reverse gap-x-10"
          >
            <div className="hidden lg:block basis-1/2 drop-shadow-lg">
              <Button
                type="button"
                target="_blank"
                url={item.link}
                variant="none"
                className="relative aspect-video w-full h-auto"
              >
                <Image src={item.img} fill alt="" className="rounded-2xl" />
              </Button>
            </div>
            <div className="relative basis-1/2 p-4">
              <h2 className="text-3xl font-medium text-slate-900">
                {item.title}
              </h2>
              <Link href={item.link} className="block lg:hidden">
                <div className="relative aspect-video w-full h-auto">
                  <Image src={item.img} fill alt="" className="rounded-2xl" />
                </div>
              </Link>
              <p className="text-base font-normal text-dark mt-6">
                {item.description}
              </p>
              <div className="absolute bottom-4 right-4">
                <Link href={item.link} target="_blank">
                  <TbExternalLink size={24} color="#000000" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
