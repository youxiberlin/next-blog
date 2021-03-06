import { useRouter } from 'next/router'

export default function Projects() {
  const router = useRouter()
  return (
    <div className="pl-2">
        <div className="sm:mt-6 mt-12 sm:text-3xl text-4xl font-bold mb-3 text-gray-800 tracking-wide">
          Projects</div>
        <div className="mt-3 text-xl leading-relaxed text-gray-700">Check out more details about my recent projects&ensp;
        <span className="mr-2 hover:bg-yellow-100 underline" 
        onClick={() => router.push('/projects')}>here</span>.</div>
    </div>
)}