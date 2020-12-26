import Image from 'next/image'

const Logo = () => (
  <div className="flex justify-center">
    <Image src="/assets/blog/yuki-pixel.png" alt="me" width="32" height="32"/>
    <span className="text-gray-800 text-2xl">
      Yuki Sato
    </span>	
  </div>
);

export default Logo;