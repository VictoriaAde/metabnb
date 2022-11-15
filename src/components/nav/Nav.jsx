import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import logo from './assets/logo.svg';

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      {/* desktop */}
      <nav className="fixed top-0 white_bg w-full z-10 flex justify-between items-center py-4 px-24 lg:!px-10 md:hidden">
        <img src={logo} alt="metabnb" className="w-40 xxl:block md:!hidden" />
        <ul className="xxl:flex md:flex-col xxl:gap-x-12">
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
          onClick={() => setOpenModal(!openModal)}
          className="purple_bg text-white py-3 xxl:px-5 rounded-xl"
        >
          Connect wallet
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </nav>

      {/* mobile */}
      <nav className="fixed top-0 white_bg w-full z-10  xxl:hidden md:!flex justify-between items-center py-4 px-4">
        <img src={logo} alt="metabnb" className="w-40" />
        <div className={isMobile ? 'hide' : 'show'}>
          <div className="flex flex-col gap-5 absolute top-16 right-4 white_bg shadow-xl py-7 md:px-10 rounded-lg">
            <ul className="flex flex-col gap-3">
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
              onClick={() => setOpenModal(!openModal)}
              className="purple_bg text-white py-3 xxl:px-5 rounded-xl"
            >
              Connect wallet
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMobile(!isMobile)}
          className="hamburger-btn xxl:hidden md:!block"
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </nav>
    </>
  );
};

export default Nav;
