import Bgimg from '../../../public/video/Home-page-bg - frame at 0m0s.jpg';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';


const Header = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen">
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-dvh brightness-50 object-cover"
        poster={Bgimg}
      >
        {/* <source src={`${import.meta.env.BASE_URL}video/Home-page-bg.mp4`} type="video/mp4" /> */}
        <source src='https://885542.fs1.hubspotusercontent-na1.net/hubfs/885542/Home-page-bg.mp4' type="video/mp4" />

      </video>
      <div className="absolute bottom-20 xl:bottom-40 flex md:items-center justify-center flex-col mx-auto w-full gap-4 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="text-5xl xl:text-6xl text-zinc-50 font-semibold font-montserrat"
        >
          {t('header', 'title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="text-zinc-50 font-medium text-base font-gabarito"
        >
          {t('header', 'subtitle')}
        </motion.p>
      </div>
    </div>
  );
};

export default Header;
