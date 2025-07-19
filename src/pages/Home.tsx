import Header from '../components/base/Header';
import Project from '../components/base/Project/ProjectsBlock';
import Swiper from '../components/base/Swiper/Swiper';
import InfoBox from '../components/base/InfoBox';
import VideoBlock from '../components/base/VideoBlock';

// Video
import video from '../../public/video/Home-page-video.mp4'

const Home = () => (
  <div className='relative overflow-hidden'>
    <Header/>
    <Project/>
    <VideoBlock src={video}/>
    <InfoBox/>
    <Swiper/>
  </div>
);

export default Home; 