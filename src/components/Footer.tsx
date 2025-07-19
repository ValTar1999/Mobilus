import Logo from '../images/mobilus-white.svg';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const yearNow = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <div id='footer' className="border-t border-zinc-800">
      <div className="container max-w-screen-2xl mx-auto px-4 pt-5 pb-10 flex flex-col justify-center w-full gap-10 xl:gap-20">
        <div className="text-zinc-50 flex flex-col lg:flex-row md:items-center justify-between gap-2 xl:gap-10">
          <img className='w-32 h-32' src={Logo} alt="Logo"/> 
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-5">
            <div className="flex flex-col space-y-2 text-sm">
              <span className='text-zinc-300 font-medium font-alata'>{t('footer', 'contact')}</span>
              <a className='text-base font-montserrat font-medium' target='_blank' href="+37379779557">+37379779557</a>
            </div>
            <div className="flex flex-col space-y-2">
              <span className='text-zinc-300 font-medium text-sm'>{t('footer', 'social')}</span>          
              <div className="flex items-center space-x-4">
                <a className='rounded-full bg-white hover:bg-zinc-200 text-zinc-900 transition-colors duration-500 px-4 py-1 text-sm leading-snug' href="" target='_blank'>Telegram</a>
                <a className='rounded-full bg-white hover:bg-zinc-200 text-zinc-900 transition-colors duration-500 px-4 py-1 text-sm leading-snug' href="" target='_blank'>Viber</a>
                <a className='rounded-full bg-white hover:bg-zinc-200 text-zinc-900 transition-colors duration-500 px-4 py-1 text-sm leading-snug' href="" target='_blank'>WhatsApp</a>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className='text-zinc-300 font-medium text-sm font-alata'>{t('footer', 'email')}</span>
              <a className='text-zinc-50 text-base font-montserrat font-medium' target='_blank' href="www.vladtarna25@gamil.com">www.vladtarna25@gamil.com</a>
            </div>
          </div>
        </div>
        <div className="md:mx-auto text-xs text-zinc-400 font-montserrat">©Mobilus 2016-{yearNow}</div>
      </div>
    </div>
  );
};

export default Footer; 
