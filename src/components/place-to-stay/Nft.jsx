import image5 from './assets/image-5.webp';
import image6 from './assets/image-6.webp';
import image7 from './assets/image-7.webp';
import image8 from './assets/image-8.webp';
import image1 from './assets/image-1.webp';
import image2 from './assets/image-2.webp';
import image3 from './assets/image-3.webp';
import image4 from './assets/image-4.webp';
import imageA from './assets/image-A.webp';
import imageB from './assets/image-B.webp';
import imageC from './assets/image-C.webp';
import imageD from './assets/image-D.webp';
import imageE from './assets/image-E.webp';
import imageF from './assets/image-F.webp';
import imageG from './assets/image-G.webp';
import imageH from './assets/image-H.webp';
import star from './assets/star.svg';
import settingIcon from './assets/setting.svg';

const Nft = () => {
  return (
    <section className="mt-48 xxl:px-24 md:!px-8 mb-12">
      <nav>
        <ul className="flex xxl:gap-12 md:!gap-9 justify-center items-center flex-wrap mt-6 mb-16">
          <li>
            <a
              className="text-xl text-gray"
              href="https://github.com/VictoriaAde/metabnb"
            >
              Resturant
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray"
              href="https://github.com/VictoriaAde/metabnb"
            >
              Cottage
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray"
              href="https://github.com/VictoriaAde/metabnb"
            >
              Castle
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray"
              href="https://github.com/VictoriaAde/metabnb"
            >
              fantast city
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray"
              href="https://github.com/VictoriaAde/metabnb"
            >
              beach
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray"
              href="https://github.com/VictoriaAde/metabnb"
            >
              Carbins
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray"
              href="https://github.com/VictoriaAde/metabnb"
            >
              Off-grid
            </a>
          </li>
          <li>
            <a
              className="text-xl text-gray"
              href="https://github.com/VictoriaAde/metabnb"
            >
              Farm
            </a>
          </li>
          <button className="text-xl text-gray border border-lightGray py-2 px-3 rounded-lg">
            Location{' '}
            <img className="ml-5 inline" src={settingIcon} alt="settings" />
          </button>
        </ul>
      </nav>
      <div className="xxl:grid xxl:grid-cols-4 md:!grid-cols-2 sm:!flex flex-col gap-5 mb-5">
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={image5} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={image6} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={image7} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={image8} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2  text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
      </div>
      <div className="xxl:grid xxl:grid-cols-4 md:!grid-cols-2 sm:!flex flex-col gap-5 mb-5">
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={image1} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={image2} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={image3} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={image4} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
      </div>

      <div className="xxl:grid xxl:grid-cols-4 md:!grid-cols-2 sm:!flex flex-col gap-5 mb-5">
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={imageA} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={imageB} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={imageC} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={imageD} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
      </div>
      <div className="xxl:grid xxl:grid-cols-4 md:!grid-cols-2 sm:!flex flex-col gap-5 mb-5">
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={imageE} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={imageF} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={imageG} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
        <div className="nft pt-4 pb-4 flex flex-col items-center ">
          <div>
            <img src={imageH} alt="nft" className="xxl:w-64 md:!w-60" />
          </div>
          <div className="flex gap-6 mt-4 px-0 md:px-2 text-gray">
            <div>
              <p className="text-xs mb-2">Desert king</p>
              <p className="text-xs ">2345km away</p>
              <div className="flex mt-2 gap-2">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold mb-2">1MBT per night</p>
              <p className="text-xs">available for 2weeks stay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nft;
