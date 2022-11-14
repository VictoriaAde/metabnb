import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import logo from './assets/logo.svg';
import metaImg from './assets/metamask.svg';
import walletImg from './assets/wallet-connect.svg';
import backIcon from './assets/back.svg';
import x from './assets/x.svg';

const Nav = () => {
  const { notShowModal, setShowModal } = useState(false);

  const showModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state variable
    setIsActive((current) => !current);
  };
  // let menuBtn = document.querySelector('.menu_btn');
  // menuBtn.addEventListener('click', () => {
  //   menuBtn.classList.toggle('open');

  //   let mobileNav = document.querySelector('.mobile-nav');
  //   mobileNav.classList.toggle('showMobileNav');
  // });
  return (
    <>
      <nav className="fixed top-0 white_bg w-full z-10 md:!hidden xxl:flex xxl:justify-between xxl:items-center xxl:py-5 xxl:px-24 lg:!px-10">
        <div className="mb-4">
          <img src={logo} alt="metabnb" />
        </div>
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
        <button className="purple_bg text-white py-3 xxl:px-5 rounded-xl">
          Connect wallet
        </button>
      </nav>

      <nav className="fixed top-0 white_bg w-full z-10 mobile-menu xxl:hidden md:!flex justify-between md:!py-5 md:!px-8">
        <div className="">
          <img src={logo} alt="metabnb" className="w-28" />
        </div>

        <button className="menu_btn" id="menuBtn" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="mobile-nav hidden" onClick={handleClick}>
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

          <button
            onClick={showModal}
            className="purple_bg text-white mt-5 py-3 w-full rounded-xl"
          >
            Connect wallet
          </button>
        </div>
      </nav>

      {notShowModal ? (
        <Modal>
          <div className="flex justify-center items-center bg_white rounded-2xl py-20">
            <div>
              <h1>Connect Wallet</h1>
              <img onClick={hideModal} src={x} alt="close" />
            </div>{' '}
            <p>Choose your preferred wallet:</p>
            <div>
              <div>
                <img src={metaImg} alt="Meta Mask" />
                <h2>Metamask</h2>
              </div>
              <div>
                <img src={backIcon} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={walletImg} alt="Meta Mask" />
                <h2>WalletConnect</h2>
              </div>
              <div>
                <img src={backIcon} alt="" />
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default Nav;
