import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';

const Nav = () => {
  return (
    <nav className="md:flex-col xxl:flex xxl:justify-between xxl:items-center xxl:pt-12 md:!pt-4 xxl:px-24 md:!px-8">
      <div className="mb-4 md:mb-0">
        <img src={logo} alt="metabnb" className="md:w-48" />
      </div>
      <ul className="md:flex-col md:gap-y-7 xxl:flex xxl:gap-x-12">
        <li>
          <Link
            to="/"
            href="https://github.com/VictoriaAde/metabnb"
            className="xxl:text-xl sm:text-xs text-gray"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={`/Place-to-stay`}
            href="https://github.com/VictoriaAde/metabnb"
            className="text-xl text-gray"
          >
            Place to stay
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/VictoriaAde/metabnb"
            className="text-xl text-gray"
          >
            NFTs
          </a>
        </li>
        <li>
          <a
            href="https://github.com/VictoriaAde/metabnb"
            className="text-xl text-gray"
          >
            Community
          </a>
        </li>
      </ul>
      <button className="purple_bg text-white py-3 sm:px-20 xxl:px-5 rounded-xl">
        Connect wallet
      </button>
    </nav>
  );
};

export default Nav;
