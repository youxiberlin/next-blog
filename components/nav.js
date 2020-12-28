import { useRouter } from 'next/router'

export default function Nav() {
    const router = useRouter()
    return (
        <>
            <div className="flex-grow"></div>
            <nav className="flex text-gray-900 text-center pt-3">
            <div className="cursor-pointer hover:bg-yellow-100" onClick={() => router.push('/projects')}>
                Projects
            </div>
            <div className="ml-3 cursor-pointer hover:bg-yellow-100" onClick={() => router.push('/about')}>
                About
            </div>
            <a className="ml-3 hover:bg-yellow-100" target="_blank" href="https://github.com/youxiberlin/next-blog">
                Source
            </a>
            <a className="mx-2 hover:bg-yellow-100" target="_blank" href="https://github.com/youxiberlin">
                <i className="fab fa-github"></i>
            </a>
            </nav>
        </>
)}