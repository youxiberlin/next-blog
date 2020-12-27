import { useRouter } from 'next/router'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Nav() {
    const router = useRouter()
    return (
        <>
            <div className="flex-grow"></div>
            <nav className="flex text-gray-900 text-center pt-3">
            <div className="cursor-pointer hover:bg-yellow-100" onClick={() => router.push('/projects')}>
                Projects
            </div>
            <a className="ml-3 hover:bg-yellow-100" target="_blank" href="https://github.com/youxiberlin/next-blog">
                Source
            </a>
            <a className="mx-2 hover:bg-yellow-100" target="_blank" href="https://github.com/youxiberlin">
                <i className="fab fa-github"></i>
            </a>
            <a className="mr-2 hover:bg-yellow-100" target="_blank" href="https://twitter.com/yuki_sat">
                <i className="fab fa-twitter"></i>
            </a>
            </nav>
        </>
)}