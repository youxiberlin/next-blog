import Image from 'next/image'

const Logo = () => (
  <div class="flex justify-center">
    <Image src="/assets/blog/yuki-pixel.png" alt="me" width="32" height="32"/>
    <span class="text-gray-800 text-2xl">
      Yuki Sato
    </span>	
  </div>
);

export default Logo;