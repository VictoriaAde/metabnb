import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';

const Nav = () => {
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
      <nav className="md:!hidden xxl:flex xxl:justify-between xxl:items-center xxl:pt-12 xxl:px-24">
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

      <nav className="mobile-menu xxl:hidden md:!flex justify-between md:!pt-4 md:!px-8">
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
          <button className="purple_bg text-white mt-5 py-3 w-full rounded-xl">
            Connect wallet
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
