import metaImg from './assets/metamask.svg';
import walletImg from './assets/wallet-connect.svg';
import backIcon from './assets/back.svg';
import x from './assets/x.svg';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="overlay fixed left-0 top-0 bottom-0 bg-transparent w-full flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col basis-5/12 md:basis-11/12 white_bg rounded-2xl py-10 md:py-6 mt-20"
      >
        <div className="flex justify-between px-8">
          <h1 className="text-darkGray font-semibold text-2xl md:text-xl">
            Connect Wallet
          </h1>
          <img onClick={onClose} src={x} alt="close" />
        </div>{' '}
        <p className="border border-line my-8"></p>
        <p className="mb-4 text-base px-8">Choose your preferred wallet:</p>
        <div className="flex justify-between items-center border border-line rounded-xl bg-lightMilk py-3 mx-8 md:mx-2 px-5 mb-4">
          <div className="flex items-center gap-4">
            <img src={metaImg} alt="Meta Mask" />
            <h2 className="text-black font-semibold text-lg md:text-base">
              Metamask
            </h2>
          </div>
          <div>
            <img src={backIcon} alt="See more icon" />
          </div>
        </div>
        <div className="flex justify-between items-center border border-line rounded-xl bg-lightMilk py-3 mx-8 md:mx-2 px-5">
          <div className="flex items-center gap-4">
            <img src={walletImg} alt="Meta Mask" />
            <h2 className="text-black font-bold text-lg md:text-base">
              WalletConnect
            </h2>
          </div>
          <div>
            <img src={backIcon} alt="See more icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
