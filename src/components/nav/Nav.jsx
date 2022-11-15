import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import logo from './assets/logo.svg';

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav
        onClick={() => setIsMobile(false)}
        className="fixed top-0 white_bg w-full z-10 md:flex xxl:justify-between xxl:items-center xxl:py-4 xxl:px-24 lg:!px-10"
      >
        <img src={logo} alt="metabnb" className="w-40 xxl:hidden md:!block" />

        <div className={isMobile ? 'mobileNav' : 'desktopNav'}>
          <div>
            <img
              src={logo}
              alt="metabnb"
              className="w-40 xxl:block md:!hidden"
            />
          </div>
          <div>
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
          </div>
          <div>
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
