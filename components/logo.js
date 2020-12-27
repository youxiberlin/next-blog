import Image from 'next/image'
import { useRouter } from 'next/router'

const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/')} className="flex items-end">
      <Image className="cursor-pointer" src="/assets/yuki-pixel.png" alt="me" width="32" height="32"/>
      <span className="ml-2 sm:hidden text-gray-800 text-2xl font-bold hover:bg-purple-200 cursor-pointer">
        Yuki Sato
      </span>	
    </div>
)}

export default Logo;