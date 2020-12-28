import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  return (
    <header className="py-4 flex justify-center">
      <div className="ml-2 hover:bg-yellow-100" onClick={() => router.push('/devlog')}>
        Devlog
      </div>
      <div className="ml-2">
        ||
      </div>
      <div>
        <a className="ml-2 hover:bg-yellow-100" target="_blank" href="https://twitter.com/yuki_sat">
          {/* <i className="fab fa-twitter"></i> */}
          Follow me
        </a>
      </div>
    </header>
  )
}

export default Footer;