import Image from 'next/image';

const Banner = () => {
  return (
    <header>
        <div>
            <Image src="/GloboLogo.png" alt="logo" width={760} height={400} />
        </div> 
        <div>
            Providing houses all over the world
        </div>
    </header>
  );
};

export default Banner;