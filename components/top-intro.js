import { useRouter } from 'next/router'

export default function Intro() {
  const router = useRouter()
  return (
    <div className="mt-16 pl-2">
        <div className="mt-6 sm:text-2xl text-3xl font-bold mb-3 text-gray-800 tracking-wide">Hello, Hallo, こんにちは！</div>
        <div className="mt-6 sm:text-2xl text-2xl font-bold mb-3 text-gray-800 tracking-wide">I am Yuki, a full-stack developer.</div>
        <div className="mt-6 text-xl leading-relaxed text-gray-700 tracking-wide">I've been based in Berlin since 2012. My hometown is Yokohama, Japan.</div>
        <div className="mt-3 text-xl leading-relaxed text-gray-700">How the internet and IT changes society and makes an impact on the lifestyle has been my interest since I was a teenager.</div>
        <div className="mt-3 text-xl leading-relaxed text-gray-700">The tech stacks that I use a lot these days are:
        <div>
            <span className="bg-purple-500 text-white mx-1 px-2 py-1 text-base">Node.js</span>
            <span className="bg-purple-500 text-white mx-1 px-2 py-1 text-base">Next.js</span>
            <span className="bg-purple-500 text-white mx-1 px-2 py-1 text-base">Mongo DB</span>
            <span className="bg-purple-500 text-white mx-1 px-2 py-1 text-base">Firestore</span>
        </div>
        </div>
        <div className="mt-3 text-xl leading-relaxed text-gray-700">Curious about my work? Check out a more detailed profile&ensp;
        <span
            className="mr-2 hover:bg-yellow-100 underline"
            onClick={() => router.push('/about')}>
                here</span>.</div>
    </div>
)}