import { useRouter } from 'next/router'

export default function Nav() {
    const router = useRouter()
    return (
        <>
            <div className="flex-grow"></div>
            <nav className="flex text-gray-800 text-center pt-3">
            <div className="cursor-pointer hover:bg-yellow-100" onClick={() => router.push('/projects')}>
                Projects
            </div>
            <a className="ml-3 hover:bg-yellow-100" target="_blank" href="https://github.com/youxiberlin/next-blog">
                Source
            </a>
            <a className="mx-3 hover:bg-yellow-100" target="_blank" href="https://twitter.com/yuki_sat">
                Follow Me
            </a>
            </nav>
        </>
)}