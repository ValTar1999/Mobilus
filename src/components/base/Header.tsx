// import Bgimg from '../../images/home/photo_2025-06-23_18-00-58.jpg';
import Bgvideo from 'video/Home-page-bg.mp4';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useLanguage();
  return (
    <div className="relative h-screen">
      <video preload="auto" autoPlay muted loop className='w-full h-dvh brightness-50 object-cover'>
        <source src={Bgvideo} type="video/mp4" />
      </video>
      {/* <img src={Bgimg} alt="Bg-img" className='w-full h-dvh brightness-50 object-cover'/> */}
      <div className="absolute bottom-20 xl:bottom-40 flex md:items-center justify-center flex-col mx-auto w-full gap-4 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className='text-5xl xl:text-6xl text-zinc-50 font-semibold font-montserrat'
        >
          {t('header', 'title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className='text-zinc-50 font-medium text-base font-gabarito'
        >
          {t('header', 'subtitle')}
        </motion.p>
      </div>
    </div>
  );
};

export default Header; 
