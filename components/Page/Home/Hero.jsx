import Image from "next/dist/client/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import Typical from "react-typical";
import { Typewriter } from 'react-simple-typewriter';

const firstSetIcons = [
  {
    link: "/icons/hotel.png",
    title: "PHYSICAL NFT HOTEL & HOSTEL",
  },
  {
    link: "/icons/pay.png",
    title: "CRYPTO BOOKING PLATFORM",
  },
  {
    link: "/icons/hotel.png",
    title: "NFTS AS MEMBERSHIP DAO ACCESS",
  },
];

const Hero = () => {
  return (

    <>

     <div className="cta-section banner" >
      <div className="container">
          <h2 className="big-1">The AI personalized travel experience that you will love</h2>
      </div>
    </div>

    <div className="zigzag-wrap">
      <div className="container">
          <div className="col-img">
                  <Image
                    src="/images/illustrationfemale.jpg"
                    alt="laptop palverse"
                    width={550}
                    height={370}
                  />
          </div>
          <div className="col-content">
                <h2 className="big-3">Just search in a simple natural language for your next travel experience.</h2>
                <p className="lead-1">The AI travel assistant will recommend you personalized destinations making it a unique journey.</p> 
          </div>
      </div>
    </div>

    <div className="cta-section how-work-sect">
      <div className="container">
          <h2 className="big-1 green-hd">How it works</h2>
          <h3>Spelling Correction</h3>
          <div className="cta-img">
                  <Image
                    src="/images/illustrationmen.jpg"
                    alt="laptop palverse"
                    width={550}
                    height={370}
                  />
          </div>
      </div>
    </div>

    <div className="cta-section finding-offer">
      <div className="container">
          <h2 className="big-2">Finding offers</h2>

          <div className="cta-img">
                  <Image
                    src="/images/findingoffers.jpg"
                    alt="laptop palverse"
                    width={550}
                    height={370}
                  />
          </div>
      </div>
    </div>
   
    <section className="w-full flex flex-col items-center bg-dark_bg text-white px-5 pt-5 pb-16 font-exo white-bg">
      <div className="hidden md:block">
        <div className=" flex flex-col items-center">
          <strong className="md:text-[46px] text-[28px] py-4 font-bold  text-[#ECF7FD] colored-hd change-text">
            Book
            <Typewriter
            className='text'
              words={[' Hotels', ' Hostels', ' Resorts']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            /> - Pay With Web3 Wallet
          </strong>

          <div className="flex flex-col justify-end items-center py-4 md:py-0">
            <div className=" mt-16  md:scale-125">
              <Image
                src="/images/laptop.png"
                alt="laptop palverse"
                width={550}
                height={370}
              />
            </div>
            <h5 className="text-[26px] font-bold text-center pt-6  text-[#ECF7FD] colored-hd">
              BETA VERSION IS <span className="text-green_text" >LIVE</span>
            </h5>
          </div>

          <div className="w-screen overflow-x-auto flex flex-col items-center justify-center ">
            <p className="md:text-[40px]  sm:text-[30px] text-center pt-10 font-bold md:w-9/12 text-[#ECF7FD] colored-hd  ">
              {"Welcome to the future of hospitality"
                .split(" ")
                .map((word, index) => (
                  <span key={index}>{`${word} `}</span>
                ))}
            </p>
            <p className="md:text-[22px] pt-3 pb-8 text-[22px] text-center  font-semibold md:w-9/12 text-[#000] ">
              {"We make it easy to book your next trip directly from your web3 wallet."
                .split(" ")
                .map((word, index) => (
                  <span key={index}>{`${word} `}</span>
                ))}
            </p>
          </div>


          <div className="w-screen overflow-x-auto md:hidden">
            <p className="md:text-[40px]  text-[18px] text-center py-10 font-bold md:w-9/12 text-[#ECF7FD] colored-hd ">
              {"Welcome to the future of hospitality"
                .split(" ")
                .map((word, index) => (
                  <span key={index}>{`${word} `}.</span>
                ))}
            </p>
            <p className="md:text-[32px]  text-[22px] text-center py-10 font-semibold md:w-9/12 text-[#ECF7FD]  ">
              {"We make it easy to book your next trip directly from your web3 wallet."
                .split(" ")
                .map((word, index) => (
                  <span key={index}>{`${word} `}.</span>
                ))}
            </p>
          </div>
          <div className="icon-boxes flex md:space-y-0  md:py-5 py-10 mx-auto">
          <div className="flex flex-col items-center justift-center">
            <div className="img-box">

              <Image
                src="/bland/search.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
                            
            </div>

              <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Fast Tailored Search
              </h5>
              <p className="text-lg text-center">
                Stable & Fast & Flexible AI travel search
              </p>
            </div>

            <div className="flex flex-col items-center justift-center">
              <div className="img-box">
                <Image
                  src="/bland/2 (1).png"
                  alt="PHYSICAL NFT HOTEL & HOSTEL"
                  height={156}
                  width={156}
                  layout={"fixed"}
                />
                     
              </div>
              <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                No Log-ins
              </h5>
              <p className="text-lg text-center">
                Pay with a Web3 wallet.
              </p>
            </div>
            <div className="flex flex-col items-center justift-center">
            <div className="img-box">
              <Image
                src="/bland/3 (1).png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              </div>
              <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Cashback Travel Rewards
              </h5>
              <p className="text-lg text-center">
                Earn rewards while travelling
              </p>
            </div>
          

            <div className="flex flex-col items-center justift-center">
              <div className="img-box">
                  <Image
                    src="/bland/4.png"
                    alt="PHYSICAL NFT HOTEL & HOSTEL"
                    height={156}
                    width={156}
                  />
              </div>
             
              <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                NFTs As Membership
              </h5>
              <p className="text-lg text-center">
                Verify NFT ownership to apply <br /> discounts
              </p>
            </div>
       
            </div>
          

        </div>


        <div className="w-screen overflow-x-auto flex flex-col items-center justify-center mt-10 ">
          <p className="md:text-[40px]  text-[18px] text-center pt-10 font-bold md:w-9/12 colored-hd  ">
            We help properties access new <br /> Web3 customers  & communities
          </p>
          <p className="md:text-[22px] pt-3 pb-8 text-[22px] text-center  font-semibold md:w-9/12 text-[#000] ">
            We make it easy to onboard properties into web3
          </p>
        </div>
        {/* <div className="flex justify-center" >

          <Image
            src="/images/uti.png"
            alt="palmverse hotel"
            width={1100}
            height="600"
          />
        </div> */}


        {/* <div className="w-screen overflow-x-auto flex flex-col items-center justify-center mt-10 ">
          <p className="md:text-[40px]  text-[18px] text-center pt-10 pb-5 font-bold md:w-9/12 text-[#ECF7FD] colored-hd ">
            The PALMVERSE NFT Collection
          </p>
          <p className="md:text-[22px] pt-3 pb-8 text-[22px] text-center  font-semibold md:w-9/12 text-[#ECF7FD]  ">
            Owning a Palmverse NFT will unlock ultimate utility, financial returns and access <br /> to Huge IRL DAO Events. Holders can stake the NFT to get rewarded in $VPALM, <br /> which will be used to book trips at discounted rates.
          </p>
        </div>
        <div className="flex justify-center items-center" >
          <div className="mx-3 cursor-pointer  mt-20 " >
            <Image
              src='/nfts/city (1).png'
              alt="palmverse hotel"
              width={250}
              height={250}
              layout="fixed"
              className="rounded-md object-cover"
            />
          </div>
          <div className="mx-3 cursor-pointer " >
            <Image
              src='/nfts/green_cool.png'
              alt="palmverse hotel"
              width={250}
              height={250}
              layout="fixed"
              className="rounded-md object-cover"
            />
          </div>
          <div className="mx-3 cursor-pointer  mt-20 " >
            <Image
              src='/nfts/city.png'
              alt="palmverse hotel"
              width={250}
              height={250}
              layout="fixed"
              className="rounded-md object-cover"
            />
          </div>
          <div className="mx-3 cursor-pointer " >
            <Image
              src='/nfts/blue_cool.png'
              alt="palmverse hotel"
              width={250}
              height={250}
              layout="fixed"
              className="rounded-md object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mt-2 items-center" >
          <div className="mx-3 cursor-pointer " >
            <Image
              src='/nfts/cry.png'
              alt="palmverse hotel"
              width={250}
              height={250}
              layout="fixed"
              className="rounded-md object-cover"
            />
          </div>
          <div className="mx-3 cursor-pointer -mt-16 " >
            <Image
              src='/nfts/dead.png'
              alt="palmverse hotel"
              width={250}
              height={250}
              layout="fixed"
              className="rounded-md object-cover"
            />
          </div>
          <div className="mx-3 cursor-pointer " >
            <Image
              src='/nfts/gooey.png'
              alt="palmverse hotel"
              width={250}
              height={250}
              layout="fixed"
              className="rounded-md object-cover"
            />
          </div>
          <div className="mx-3 cursor-pointer -mt-16 " >
            <Image
              src='/nfts/cool.png'
              alt="palmverse hotel"
              width={250}
              height={250}
              layout="fixed"
              className="rounded-md object-cover"
            />
          </div>
        </div> */}


        <div className="flex flex-col items-center justify-center pb-10 mt-16  space-y-10 md:space-y-0">
          {/* <div className="text-3xl relative  md:w-[60%] mx-auto text-center text-[#ECF7FD] pb-4 ">
            <p className="colored-hd">
              <strong>1st NFT Hotel & Hostel Chain - Extra Benefits for the NFT Holders{" "} </strong>
            </p>
            <p className="mt-6 text-xl">
              First Property was rented in Tamarindo, Costa Rica
              which will be the Web3 IRL DAO hub for amazing events. Up to 25% discounts for Palmverse Hotels
            </p>
          </div> */}
          {/* <div className="scale-110 md:scale-y-110 md:scale-x-125 md:pt-10">
            <Image
              src="/images/less-height.png"
              alt="palmverse hotel"
              width={1000}
              height="560"
            />
          </div> */}
          <div className="flex justify-center items-center">
            <Link href="/first-location">
              <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  ">
                Learn More <HiArrowNarrowRight className="text-2xl ml-2 " />
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center pt-14 pb-8">
          <h1 className="text-3xl text-[#ECF7FD] font-bold w-[70%] mx-auto text-center pb-10">
            HOW IT WORKS{" "}
          </h1>
          <Image
            src="/images/utili.png"
            alt="palmverse hotel"
            width={1100}
            height="600"
          />
        </div> */}
      </div>
      <div className="md:hidden ">
        <div className=" flex flex-col items-center">
          <strong className="md:text-[46px] text-[28px] text-center font-bold  text-[#ECF7FD] colored-hd change-text">
            Book
            <Typewriter
              words={[' Hotels', ' Hostels', ' Resorts']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            /> <br /> Pay With Web3 Wallet
          </strong>
          {/* <p className="md:text-[32px] hidden md:flex text-[18px] text-center pb-5 mt-6 px-4 font-extralight md:w-9/12 text-[#ECF7FD]  ">
            Palmverse builds technologies that help people connect IRL{" "}
            <br className="md:hidden" /> join communities, and bridge the web2
            travel experience to web3.
          </p> */}
          <div className=" mt-5  md:mt-0 md:scale-100">
            <Image
              src="/images/laptop.png"
              alt="laptop palverse"
              width={550}
              height={370}
            />
          </div>
          <div className="bg-[#ECF7FD] text-black py-2 w-screen my-2">
            <h1 className="text-[26px] font-bold text-center colored-hd">
              BETA VERSION IS <span className="text-green_text" >LIVE</span>
            </h1>
          </div>
          <div className="w-screen overflow-x-auto flex flex-col items-center justify-center ">
            <p className="md:text-[40px]  text-[20px] text-center pt-10 font-bold md:w-9/12 text-[#ECF7FD] colored-hd  ">
              {"Welcome to the future of hospitality"
                .split(" ")
                .map((word, index) => (
                  <span key={index}>{`${word} `}</span>
                ))}
            </p>
            <p className="md:text-[22px] pt-2 pb-8 mx-4 text-[16px] text-center  font-semibold md:w-9/12 text-[#000]  ">
              {"We make it easy to book your next trip directly from your web3 wallet."
                .split(" ")
                .map((word, index) => (
                  <span key={index}>{`${word} `}</span>
                ))}
            </p>
          </div>



          <div className="grid grid-cols-2 icon-boxes  md:w-[80rem]  md:space-y-0 items-center  py-5">
            <div className="flex flex-col items-center justify-start h-[294px] ">
            <div className="img-box">
              <Image
                src="/bland/search.png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}/>          
              </div>

              <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Fast Tailored Search
              </h5>
              <p className="text-lg text-center">
                Stable & Fast & Flexible AI travel search
              </p>
            </div>

            <div className="flex flex-col  items-center justify-start h-[294px] ">
            <div className="img-box">
                <Image
                  src="/bland/2 (1).png"
                  alt="PHYSICAL NFT HOTEL & HOSTEL"
                  height={156}
                  width={156}
                  layout={"fixed"}
                />
                     
              </div>
              <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                No Log-ins
              </h5>
              <p className="text-lg text-center">
                Pay with a Web3 wallet.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start h-[350px]">
            <div className="img-box">
              <Image
                src="/bland/3 (1).png"
                alt="PHYSICAL NFT HOTEL & HOSTEL"
                height={156}
                width={156}
                layout={"fixed"}
              />
              </div>
              <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                Cashback Travel Rewards
              </h5>
              <p className="text-lg text-center">
                Earn rewards while travelling
              </p>
            </div>
            <div className="flex flex-col items-center justify-start h-[350px]">
            <div className="img-box">
                  <Image
                    src="/bland/4.png"
                    alt="PHYSICAL NFT HOTEL & HOSTEL"
                    height={156}
                    width={156}
                  />
              </div>
             
              <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                NFTs As Membership
              </h5>
              <p className="text-lg text-center">
                Verify NFT ownership to apply <br /> discounts
              </p>
            </div>

          </div>

          <div className="w-screen overflow-x-auto flex flex-col items-center justify-center  ">
            <p className="md:text-[40px]  text-[20px] text-center  font-bold md:w-9/12 text-[#ECF7FD]  colored-hd">
              We help properties access new <br /> Web3 customers  & communities
            </p>
            <p className="md:text-[22px] pt-3 pb-8 text-[16px] px-6 text-center  font-semibold md:w-9/12 text-[#000] ">
              We make it easy to onboard properties into web3
            </p>
          </div>
          {/* <div className="flex justify-center" >

            <Image
              src="/images/uti.png"
              alt="palmverse hotel"
              width={1100}
              height="600"
            />
          </div> */}

          {/* <div className="w-screen overflow-x-auto flex flex-col items-center justify-center  ">
            <p className="md:text-[40px]  text-[20px] text-center pt-10 font-bold md:w-9/12 text-[#ECF7FD] colored-hd ">
              The PALMVERSE NFT Collection
            </p>
            <p className="md:text-[22px] pt-3 pb-8 text-[16px] px-4 text-center  font-semibold md:w-9/12 text-[#ECF7FD]">
              Owning a Palmverse NFT will unlock ultimate utility, financial returns and access to Huge IRL DAO Events. Holders can stake the NFT to get rewarded in $VPALM, which will be used to book trips at discounted rates.
            </p>
          </div> */}
          {/* <div className="flex justify-center items-center overflow-x-auto w-screen " >
            <div className="mx-1 cursor-pointer overflow rounded-md  mt-10  " >
              <Image
                src='/nfts/city (1).png'
                alt="palmverse hotel"
                width={88}
                height={120}
                layout="fixed"
                className="rounded-md object-fill"
              />
            </div>
            <div className="mx-1 cursor-pointer overflow rounded-md " >
              <Image
                src='/nfts/green_cool.png'
                alt="palmverse hotel"
                width={88}
                height={120}
                layout="fixed"
                className="rounded-md object-fill"
              />
            </div>
            <div className="mx-1 cursor-pointer overflow rounded-md  mt-10  " >
              <Image
                src='/nfts/city.png'
                alt="palmverse hotel"
                width={88}
                height={120}
                layout="fixed"
                className="rounded-md object-fill"
              />
            </div>
            <div className="mx-1 cursor-pointer overflow rounded-md " >
              <Image
                src='/nfts/blue_cool.png'
                alt="palmverse hotel"
                width={88}
                height={120}
                layout="fixed"
                className="rounded-md object-fill"
              />
            </div>
          </div> */}
          {/* <div className="flex justify-center items-center overflow-x-auto w-screen " >
            <div className="mx-1 cursor-pointer overflow    " >
              <Image
                src='/nfts/cry.png'
                alt="palmverse hotel"
                width={88}
                height={120}
                layout="fixed"
                className="rounded-md object-fill"
              />
            </div>
            <div className="mx-1 cursor-pointer overflow mb-6 " >
              <Image
                src='/nfts/dead.png'
                alt="palmverse hotel"
                width={88}
                height={120}
                layout="fixed"
                className="rounded-md object-fill"
              />
            </div>
            <div className="mx-1  overflow    " >
              <Image
                src='/nfts/gooey.png'
                alt="palmverse hotel"
                width={88}
                height={120}
                layout="fixed"
                className="rounded-md object-fill"
              />
            </div>
            <div className="mx-1 cursor-pointer overflow mb-6 " >
              <Image
                src='/nfts/cool.png'
                alt="palmverse hotel"
                width={88}
                height={120}
                layout="fixed"
                className="rounded-md object-fill"
              />
            </div>
          </div> */}








        </div>
        {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-evenly items-center w-[90%] mx-auto py-10 ">
          <div className="md:w-[50%] md:mx-auto md:px-4 scale-100 md:scale-100">
            <div className="">
              <Image
                src="/icons/groot.png"
                alt="palmverse-groot"
                height={280}
                width={280}
                layout="fixed"
              />
            </div>
          </div>
          <h1 className="md:text-3xl text-[22px] text-center font-light leading-7 text-[#ECF7FD]">
            The 1st PALMVERSE NFT Hotel was rented in Tamarindo, a beach town in
            Costa Rica.
          </h1>
          <h1 className="md:text-3xl text-[22px] text-center font-light leading-7 text-[#ECF7FD]">
            Whether you’re a travel addict, digital nomad,{" "}
            <span className="text-green_text">an NFT wanderer</span>, or a
            surfer looking for paradise,{" "}
            <span className="underline underline-offset-4">
              you’ve come to the right place.
            </span>
          </h1>
        </div> */}

        {/* <div className="flex w-screen pt-4  flex-col items-center justify-center   space-y-6 md:space-y-0">
          <h1 className="text-[14px] leading-7 font-light md:w-[70%]  mx-auto text-center text-[#ECF7FD] relative ">
            {" "}
            <div className="absolute z-50 -top-4 left-2 lg:left-0"></div>
            <strong className="text-[20px] font-bold text-[#ECF7FD] colored-hd">1st NFT Hotel & Hostel Chain - Extra Benefits for  the NFT Holders{" "}</strong>
            <br /><p className="mt-3 text-[16px] text-[#ECF7FD] ">
              First Property was rented in Tamarindo, Costa Rica
              which will be the Web3 IRL DAO hub for amazing events. Up to 25% discounts for Palmverse Hotels
            </p>
          </h1>
          <div className=" py-4 ">
            <Image
              src="/images/hotel1.png"
              alt="palmverse hotel"
              width={1000}
              height={640}
            />
          </div>
        </div> */}
        <div className="flex justify-center items-center">
          <Link href="/first-location">
            <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  ">
              Learn More <HiArrowNarrowRight className="text-2xl ml-2 " />
            </button>
          </Link>
        </div>
        {/* <div className="flex flex-col items-center justify-center pt-8">
          <h1 className="text-3xl text-[#ECF7FD] font-bold w-[70%] mx-auto pb-4 text-center ">
            HOW IT WORKS{" "}
          </h1>
          <div className="hidden md:block">
            <Image
              src="/images/hotel.png"
              alt="palmverse hotel"
              width={1100}
              height={750}
            />
          </div>
          <div className=" md:hidden">
            <Image
              src="/images/map-mobile.png"
              alt="palmverse hotel"
              width={1100}
              height={750}
            />
          </div>
        </div> */}
      </div>
    </section>


    </>
  );
};

export default Hero;
