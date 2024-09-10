import Link from 'next/link'
import { CiInstagram, CiMail } from 'react-icons/ci'

const Footer = () => {
  return (
    <footer id="footer" className="px-4 lg:px-36 mt-44">
      <div
        className="flex flex-col lg:flex-row justify-between items-center gap-x-6 gap-y-20 p-10 rounded-t-xl bg-primary dark:bg-dark"
        style={{
          boxShadow: 'inset -7px 7px 5px #c4bfb9,inset 7px -7px 5px #ffffff',
        }}
      >
        <h1 className="text-center text-[#272727] dark:text-primary text-3xl font-normal">
          ZHEKA BAILA ARKAN
        </h1>
        <ul className="flex items-center justify-center gap-x-6">
          <li className="text-dark dark:text-primary text-2xl font-semibold font-abel">
            <Link href="about">About</Link>
          </li>
          <li className="text-dark dark:text-primary text-2xl font-semibold font-abel">
            <Link href="skills">Skills</Link>
          </li>
          <li className="text-dark dark:text-primary text-2xl font-semibold font-abel">
            <Link href="projects">Projects</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link href="https://instagram.com/zhekabailaa" target="_blank">
              <CiInstagram size={32} className="text-dark dark:text-primary" />
            </Link>
          </li>
          <li>
            <Link href="mailto:zhekabailaa@gmail.com" target="_blank">
              <CiMail size={32} className="text-dark dark:text-primary" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
