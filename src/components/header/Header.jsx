import Nav from '../nav/Nav';
import image1 from './assets/image-1.svg';
import image2 from './assets/image-2.svg';
import image3 from './assets/image-3.svg';
import image4 from './assets/image-4.svg';
import mbt from './assets/MBToken.svg';
import metamask from './assets/metamask.svg';
import opensea from './assets/opensea.svg';

const Header = () => {
  return (
    <>
      <Nav />
      <header className="md:!px-5 md:text-center md:gap-0 xxl:mt-28 xxl:px-24 xxl:grid xxl:grid-cols-3 md:!grid-cols-1 xxl:gap-8 ">
        <div className="xxl:col-span-2 md:col-span-full">
          <h1 className="md:!text-3xl xxl:text-5xl text-gray mb-9 font-normal">
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
            <div className="mt-12 md:flex">
              <input
                type="search"
                className="search_bg appearance-none md:w-48 xxl:py-4 md:py-3 px-3 focus:outline-none border border-solid border-grayTwo text-black text-base"
                placeholder="Search for location"
                required
              />
              <button className="search_btn text-white xxl:px-12 xxl:py-4 md:!px-2 md:py-3 xxl:rounded-r-lg">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="xxl:flex gap-2 md:!hidden relative">
          <div className="mt-20">
            <img src={image1} alt="" className="mb-2" />
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" className="mb-2" />
            <img src={image4} alt="" />
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
