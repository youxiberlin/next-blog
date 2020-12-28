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
        <div className="flex flex-wrap">
            <div className="border border-gray-200 bg-gray-50 text-gray-700 mx-1 px-2 py-1 text-base mt-1">Node.js</div>
            <div className="border border-gray-200 bg-gray-50 text-gray-700 mx-1 px-2 py-1 text-base mt-1">Next.js</div>
            <div className="border border-gray-200 bg-gray-50 text-gray-700 mx-1 px-2 py-1 text-base mt-1">Mongo DB</div>
            <div className="border border-gray-200 bg-gray-50 text-gray-700 mx-1 px-2 py-1 text-base mt-1">Firestore</div>
        </div>
        </div>
        <div className="mt-3 text-xl leading-relaxed text-gray-700">Curious about my work? Check out a more detailed profile&ensp;
        <span
            className="mr-2 hover:bg-yellow-100 underline"
            onClick={() => router.push('/about')}>
                here</span>.</div>
    </div>
)}