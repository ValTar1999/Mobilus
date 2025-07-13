import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const InfoBox = () => {
  const yers = new Date().getFullYear() - 2016;
  const { t } = useLanguage();
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10 xl:my-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0 }}
        viewport={{ once: true, amount: 0 }}
        className="flex flex-col sm:items-center"
      >
        <span className='text-zinc-50 text-3xl font-bold font-montserrat'>{yers} {t('infobox', 'years')}</span>
        <span className='text-zinc-300 text-sm font-medium font-alata'>{t('infobox', 'founded')}</span> 
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        viewport={{ once: true, amount: 0 }}
        className="flex flex-col sm:items-center"
      >
        <span className='text-zinc-50 text-3xl font-bold font-montserrat'>10 {t('infobox', 'pro')}</span>
        <span className='text-zinc-300 text-sm font-medium font-alata'>{t('infobox', 'pro_desc')}</span> 
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        viewport={{ once: true, amount: 0 }}
        className="flex flex-col sm:items-center"
      >
        <span className='text-zinc-50 text-3xl font-bold font-montserrat'>150+</span>
        <span className='text-zinc-300 text-sm font-medium font-alata'>{t('infobox', 'projects')}</span> 
      </motion.div>
    </div>
  );
};

export default InfoBox; 
