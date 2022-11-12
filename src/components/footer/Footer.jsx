import logo from './assets/logo2.svg';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import twitter from './assets/twitter.svg';
import copyright from './assets/copyright.svg';

const Footer = () => {
  return (
    <footer className="xxl:px-16 md:!px-7 pt-16 pb-9  bg-black_bg">
      <img
        src={logo}
        alt="logo"
        className="xxl:pb-24 md:!pb-10 xxl:hidden md:!block"
      />
      <div className="grid xxl:grid-cols-4 md:!grid-cols-2">
        <div className="xxl:place-self-center md:!place-self-start">
          <img
            src={logo}
            alt="logo"
            className="xxl:pb-24 md:!pb-10 md:hidden"
          />
          <div className="flex gap-5 mb-10">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
          <h1 className="text-white ">
            <span>
              <img className="inline pr-1" src={copyright} alt="copyright" />
            </span>
            2022 Metabnb
          </h1>
        </div>

        <div className="xxl:place-self-center md:!place-self-start">
          <ul className="">
            <li className="mb-6">
              <a
                className="text-white font-bold text-lg"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Community
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                NFT
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Tokens
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Landlords
              </a>
            </li>
            <li>
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>

        <div className="xxl:place-self-center md:!place-self-start">
          <ul className="">
            <li className="mb-6 md:mt-6">
              <a
                className="text-white font-bold text-lg"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Places
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Castle
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Farms{' '}
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Beach
              </a>
            </li>
            <li>
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div className="xxl:place-self-center md:!place-self-start">
          <ul className="">
            <li className="mb-6 md:mt-6">
              <a
                className="text-white font-bold text-lg"
                href="https://github.com/VictoriaAde/metabnb"
              >
                About us
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Road map
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Creators{' '}
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Career
              </a>
            </li>
            <li>
              <a
                className="text-milk text-sm"
                href="https://github.com/VictoriaAde/metabnb"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
