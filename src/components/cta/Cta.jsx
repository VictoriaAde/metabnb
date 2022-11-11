import ctaImage from './cta-image.svg';

const Cta = () => {
  return (
    <section className="purple_bg grid xxl:grid-cols-2 md:!grid-cols-1 xxl:gap-24 xxl:px-24 md:!px-6 xxl:py-24">
      <div className="flex flex-col justify-center">
        <h1 className="text-white xxl:text-5xl md:!text-4xl font-bold mb-9">
          Metabnb NFTs
        </h1>
        <p className="text-white text-lg">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <div>
          {' '}
          <button className="mt-4 bg-white text-purple py-3 px-8 rounded-lg">
            Learn more
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <img src={ctaImage} alt="call to action" />
      </div>
    </section>
  );
};

export default Cta;
