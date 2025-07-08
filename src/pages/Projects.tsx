import { Projects } from '../data/data';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

type LangString = string | { ro: string; ru: string };
const getLang = (val: LangString, lang: 'ro' | 'ru') => typeof val === 'object' ? val[lang] : val;

const ProjectsPage = () => {
  const { t, language } = useLanguage();
  return (
    <div className="py-20">
      <div className="px-4 lg:max-w-3xl flex items-center justify-center flex-col mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="text-4xl lg:text-7xl font-semibold mb-4 text-zinc-50 font-montserrat"
        >
          {t('projectsPage', 'title')}
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className='text-zinc-300 font-alata text-base lg:text-xl'
        >
          {t('projectsPage', 'desc')}
        </motion.span>
      </div>
      <div className="grid md:grid-cols-2 gap-y-32 md:gap-y-28 xl:gap-y-20 mt-10 xl:mt-20">
        {Projects.slice(0).map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 + idx * 0.15 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Link to={`/project/${idx + 1}`} className='group'>
              <div className="px-4 md:px-6 pb-3 font-medium flex md:flex-col md:items-start items-end justify-between gap-2">
                <span className='text-2xl font-bold text-zinc-50 mb-2'>{getLang(project.name, language)}</span>
                <span className='text-base text-zinc-300 font-normal'>{project.yers} {getLang(project.city, language)} {project.m2}m²</span>
              </div>
              <img 
                src={project.rooms[0]?.imgs[0]} 
                alt="project-img" 
                className='w-full object-cover h-full max-h-[450px] group-hover:brightness-50 transition-all duration-500'/>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 