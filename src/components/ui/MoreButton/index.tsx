import Link from 'next/link'

const MoreButton = ({
  title,
  link,
  blank = false,
}: {
  title: string
  link: string
  blank?: boolean
}) => {
  return (
    <div className="flex">
      <Link
        href={link}
        target={blank ? '_blank' : ''}
        className="block bg-white text-sm lg:text-base hover:bg-stabilo px-5 py-2 border-2 border-black font-medium shadow-button"
      >
        {title}
      </Link>
    </div>
  )
}

export default MoreButton
