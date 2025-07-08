import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Projects } from '../../../data/data';
import { useLanguage } from '../../../context/LanguageContext';
import { motion } from 'framer-motion';

type LangString = string | { ro: string; ru: string };
type LangStringArr = string[] | { ro: string[]; ru: string[] };

type Room = {
  title: LangString;
  imgs: string[];
};

type Project = {
  name: LangString;
  yers: string;
  city: LangString;
  m2: number;
  description: LangStringArr;
  rooms: Room[];
};

const getLang = (val: LangString, lang: 'ro' | 'ru') => typeof val === 'object' ? val[lang] : val;
const getLangArr = (val: LangStringArr, lang: 'ro' | 'ru') => Array.isArray(val) ? val : val[lang];

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const { language, t } = useLanguage();
  const projectIdx = id ? parseInt(id as string, 10) - 1 : -1;
  const project = Projects[projectIdx] as Project | undefined;

  if (!project) {
    return <div className="text-center py-20">{t('notFound')}</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-10 lg:py-28">
      <div className="grid gap-10">
        <div className="flex flex-col md:flex-row md:items-end items-start gap-2 justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-4xl lg:text-7xl font-semibold text-zinc-50 uppercase"
          >
            {getLang(project.name, language)}
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className='text-base text-zinc-300'
          >
            {project.yers} {getLang(project.city, language)} {project.m2}m²
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          {getLangArr(project.description, language).map((desc: string, idx: number) => (
            <p key={idx} className='text-base md:text-xl text-zinc-300 mb-4 font-alata'>{desc}</p>
          ))}
        </motion.div>
      </div>
      <div className="flex flex-col pt-10 md:pt-20 gap-16 md:gap-32">
        {project.rooms.map((room, roomIdx) => (
          <div key={roomIdx} className="grid gap-3 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-3xl md:text-5xl font-medium font-montserrat text-zinc-50"
            >
              {getLang(room.title, language)}
            </motion.div>
            <div className={`flex gap-10 overflow-hidden ${room.imgs.length > 1 ? 'flex-col lg:flex-row' : 'flex-wrap'}`}>
              {room.imgs.map((img, imgIdx) => (
                <motion.img
                  key={imgIdx}
                  src={img}
                  alt={`${getLang(project.name, language)} - ${getLang(room.title, language)} ${imgIdx + 1}`}
                  className={`w-screen object-cover ${room.imgs.length > 1 ? 'h-[500px]' : 'h-full'}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 + imgIdx * 0.15 }}
                  viewport={{ once: true, amount: 0.4 }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
