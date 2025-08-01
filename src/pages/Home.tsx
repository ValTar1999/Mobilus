import Header from '../components/base/Header';
import Project from '../components/base/Project/ProjectsBlock';
import Swiper from '../components/base/Swiper/Swiper';
import InfoBox from '../components/base/InfoBox';
import VideoBlock from '../components/base/VideoBlock';

// Video
import postervideo from '../../public/video/Home-page-video - frame at 0m0s.jpg'

const Home = () => (
  <div className='relative overflow-hidden'>
    <Header/>
    <Project/>
    <VideoBlock poster={postervideo} src="https://885542.fs1.hubspotusercontent-na1.net/hubfs/885542/Home-page-video.mp4"/>
    <InfoBox/>
    <Swiper/>
  </div>
);

export default Home; 