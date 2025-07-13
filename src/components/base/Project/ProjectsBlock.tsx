import { Link } from 'react-router-dom';
import { Projects } from '../../../data/data';
import { useLanguage } from '../../../context/LanguageContext';
import { motion } from 'framer-motion';

const Project = () => {
  const { t } = useLanguage();
  return (
    <div className="py-10 xl:py-20 container mx-auto max-w-screen-2xl px-4">
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 mt-5 xl:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          viewport={{ once: true, amount: 0 }}
          className="flex flex-col justify-center lg:max-w-lg"
        >
          <h2 className='text-4xl lg:text-5xl text-zinc-50 font-bold font-montserrat'>{t('projectsBlock', 'title')}</h2>
          <span className='py-5 lg:py-10 text-zinc-300 text-xl font-gabarito'>
            {t('projectsBlock', 'desc')}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-2 gap-5 lg:gap-10"
        >
          {Projects.slice(0, 4).map((project, idx) => (
            <Link to={`/project/${idx + 1}`} className='relative group border border-transparent hover:border-zinc-900 transition-all duration-500' key={idx}>
              <img 
                src={project.rooms[0]?.imgs[0]} 
                alt="project-img" 
                className='w-full object-cover h-full max-h-52 group-hover:brightness-50 transition-all duration-500'/>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project; 