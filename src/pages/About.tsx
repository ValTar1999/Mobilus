import VideoCP from '../video/Consultation-and-proecting.mp4'
import VideoP from '../video/Inplemintation.mp4'
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useLanguage();
  const block2List = t('about', 'block2_list') as string[];
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-10 lg:py-20">
      <div className="px-4 lg:max-w-3xl flex items-center justify-center flex-col mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="text-4xl lg:text-7xl font-semibold mb-4 text-zinc-50 font-montserrat"
        >
          {t('about', 'title')}
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className='text-zinc-300 font-alata text-base lg:text-xl'
        >
          {t('about', 'block1_desc')}
        </motion.span>
      </div>
      <div className="py-20 grid gap-20">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0 }}
            className="flex justify-center flex-col gap-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-50 font-montserrat font-semibold text-2xl'
            >
              {t('about', 'block1_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-300 font-alata text-lg'
            >
              {t('about', 'block1_desc')}
            </motion.p>
          </motion.div>
          <video className='w-full h-full object-cover' autoPlay loop muted src={VideoCP}></video>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <video className='w-[500px] object-cover h-[750px]' autoPlay loop muted src={VideoP}></video>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0 }}
            className="flex justify-center flex-col gap-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-50 font-montserrat font-semibold text-2xl'
            >
              {t('about', 'block2_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-300 font-alata text-lg'
            >
              {t('about', 'block2_desc')}
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-300 list-disc ml-4 text-base font-alata'
            >
              {block2List.map((item, idx) => <li key={idx}>{item}</li>)}
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-300 font-alata text-lg'
            >
              {t('about', 'block2_desc2')}
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0 }}
            className="flex justify-center flex-col gap-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-50 font-montserrat font-semibold text-2xl'
            >
              {t('about', 'block3_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-300 font-alata text-lg'
            >
              {t('about', 'block3_desc')}
            </motion.p>
          </motion.div>  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0 }}
            className="flex justify-center flex-col gap-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-50 font-montserrat font-semibold text-2xl'
            >
              {t('about', 'block4_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0 }}
              className='text-zinc-300 font-alata text-lg'
            >
              {t('about', 'block4_desc')}
            </motion.p>
          </motion.div>  
        </div>

      </div>

      
    </div>
  );
};

export default About; 