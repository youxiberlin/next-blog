import Image from 'next/image'

const Logo = () => (
  <div className="flex justify-center">
    <Image src="/assets/blog/yuki-pixel.png" alt="me" width="32" height="32"/>
    <span className="text-gray-800 text-2xl font-bold hover:bg-purple-200 cursor-pointe">
      Yuki Sato
    </span>	
  </div>
);

export default Logo;