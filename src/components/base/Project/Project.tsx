import { useParams } from 'react-router-dom';
import { Projects } from '../../../data/data';
import { useLanguage } from '../../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

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
  const { id } = useParams();
  const { language, t } = useLanguage();
  const projectIdx = id ? parseInt(id as string, 10) - 1 : -1;
  const project = Projects[projectIdx] as Project | undefined;

  // Состояния для fullscreen просмотра
  const [fullscreen, setFullscreen] = useState<null | { roomIdx: number; imgIdx: number }>(null);

  // Для хуков: пустые значения, если project нет
  const allImages: { src: string; alt: string; roomIdx: number; imgIdx: number }[] = [];
  if (project) {
    project.rooms.forEach((room, roomIdx) => {
      room.imgs.forEach((img, imgIdx) => {
        allImages.push({
          src: img,
          alt: `${getLang(project.name, language)} - ${getLang(room.title, language)} ${imgIdx + 1}`,
          roomIdx,
          imgIdx,
        });
      });
    });
  }

  const getGlobalIdx = (roomIdx: number, imgIdx: number) => {
    if (!project) return 0;
    let idx = 0;
    for (let i = 0; i < roomIdx; i++) idx += project.rooms[i].imgs.length;
    return idx + imgIdx;
  };

  const handleArrow = useCallback((dir: -1 | 1) => {
    if (!fullscreen || allImages.length === 0) return;
    const currentIdx = getGlobalIdx(fullscreen.roomIdx, fullscreen.imgIdx);
    let nextIdx = currentIdx + dir;
    if (nextIdx < 0) nextIdx = allImages.length - 1;
    if (nextIdx >= allImages.length) nextIdx = 0;
    const { roomIdx, imgIdx } = allImages[nextIdx];
    setFullscreen({ roomIdx, imgIdx });
  }, [fullscreen, allImages, project]);

  useEffect(() => {
    if (!fullscreen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(null);
      if (e.key === 'ArrowLeft') handleArrow(-1);
      if (e.key === 'ArrowRight') handleArrow(1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [fullscreen, handleArrow]);

  if (!project) {
    return <div className="text-center py-20">{t('notFound')}</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-10 lg:py-28">
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/90"
            onClick={() => setFullscreen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-5 right-5 text-white text-3xl font-bold z-50"
              onClick={e => { e.stopPropagation(); setFullscreen(null); }}
              aria-label="Закрыть"
            >×</button>
            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl z-50 px-2 py-1 hover:bg-white/20 rounded"
              onClick={e => { e.stopPropagation(); handleArrow(-1); }}
              aria-label="Предыдущее фото"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="M19 12H5"/><path d="M12 19L5 12 12 5"/></svg>
            </button>
            <motion.img
              src={allImages[getGlobalIdx(fullscreen.roomIdx, fullscreen.imgIdx)].src}
              alt={allImages[getGlobalIdx(fullscreen.roomIdx, fullscreen.imgIdx)].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-lg"
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl z-50 px-2 py-1 hover:bg-white/20 rounded"
              onClick={e => { e.stopPropagation(); handleArrow(1); }}
              aria-label="Следующее фото"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
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
          <div key={roomIdx} className="grid gap-3 md:gap-6 xl:grid-cols-4">
            <div>              
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true, amount: 0 }}
              className="text-3xl md:text-5xl font-medium font-montserrat text-zinc-50 sticky top-16 z-10"
            >
              {getLang(room.title, language)}
            </motion.div>
            </div>
            <div className={`flex gap-5 overflow-hidden xl:col-span-3 ${room.imgs.length > 1 ? 'grid xl:grid-cols-2' : 'flex-wrap'}`}>
              {room.imgs.map((img, imgIdx) => (
                <motion.img
                  key={imgIdx}
                  src={img}
                  alt={`${getLang(project.name, language)} - ${getLang(room.title, language)} ${imgIdx + 1}`}
                  className={`w-screen object-cover cursor-pointer max-h-[900px] ${room.imgs.length > 1 ? 'h-[500px]' : 'h-full'}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 + imgIdx * 0.15 }}
                  viewport={{ once: true, amount: 0 }}
                  onClick={() => setFullscreen({ roomIdx, imgIdx })}
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
