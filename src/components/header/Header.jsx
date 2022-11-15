import image1 from './assets/image-1.webp';
import image2 from './assets/image-2.webp';
import image3 from './assets/image-3.webp';
import image4 from './assets/image-4.webp';
import mbt from './assets/MBToken.svg';
import metamask from './assets/metamask.svg';
import opensea from './assets/opensea.svg';

const Header = () => {
  return (
    <>
      <header className="white_bg md:!px-5 md:text-center md:gap-0 xxl:mt-48 xxl:pr-0 xxl:pl-24 xxl:grid xxl:grid-cols-4 md:!grid-cols-1 xxl:gap-20 ">
        <div className="xxl:col-span-2 md:col-span-full">
          <h1 className="xxl:text-5xl sm:!text-4xl text-gray mb-9 font-normal">
            Rent a <span className="text-purple">Place</span> away from{' '}
            <span className="text-purple">Home</span> in the
            <span className="text-purple"> Metaverse</span>
          </h1>
          <p className="md:!text-xl xxl:text-2xl text-gray">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <form>
            <div className="mt-12 md:flex justify-center">
              <input
                type="search"
                className="search_bg appearance-none xxl:w-96 lg:!w-56 xxl:py-4 md:py-3 px-3 focus:outline-none border border-solid border-grayTwo text-black text-base"
                placeholder="Search for location"
                required
              />
              <button className="search_btn text-white xxl:px-12 md:!px-3 xxl:py-4 md:py-3 xxl:rounded-r-lg">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="xxl:col-span-2 xxl:flex gap-2 md:!hidden relative">
          <div className="mt-20">
            <img src={image1} alt="" className="mb-2 lg:w-48" />
            <img src={image2} alt="" className="mb-2 lg:w-48" />
          </div>
          <div>
            <img src={image3} alt="" className="mb-2 lg:w-48" />
            <img src={image4} alt="" className="mb-2 lg:w-48" />
          </div>
        </div>
      </header>

      <div className="purple_bg h-20 w-full mt-20 flex justify-around items-center">
        <img src={mbt} alt="MBToken" className="md:w-24" />
        <img src={metamask} alt="METAMASK" className="md:w-24" />
        <img src={opensea} alt="Opensea" className="md:w-24" />
      </div>
    </>
  );
};

export default Header;
