import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import logo from './assets/logo.svg';

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/*desktop navigation */}
      <nav className="fixed top-0 white_bg w-full z-10 md:!hidden xxl:flex xxl:justify-between xxl:items-center xxl:py-4 xxl:px-24 lg:!px-10">
        <img src={logo} alt="metabnb" className="w-40" />
        <div className="mb-4"></div>
        <ul className="xxl:flex xxl:gap-x-12">
          <li>
            <Link
              to="/"
              href="https://github.com/VictoriaAde/metabnb"
              className="xxl:text-xl text-gray"
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
        <button
          onClick={() => setOpenModal(true)}
          className="purple_bg text-white py-3 xxl:px-5 rounded-xl"
        >
          Connect wallet
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </nav>
      {/* mobile navigation */}
      <nav className=" mobile-menu fixed top-0 white_bg w-full z-10 xxl:hidden md:!flex justify-between md:!py-5 md:!px-8">
        <div className="">
          <img src={logo} alt="metabnb" className="w-28" />
        </div>

        <button className="menu_btn" id="menuBtn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="mobile-nav hidden">
          <ul className="md:flex-col md:gap-y-7">
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

          <button className="purple_bg text-white mt-5 py-3 w-full rounded-xl">
            Connect wallet
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
