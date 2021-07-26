import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import MainLayout from '../components/MainLayout'
import cls from '../styles/Home.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { setActiveCategory } from '../redux/MainPage/actions';
import { openSidebarAction } from '../redux/App/actions';

SwiperCore.use([Navigation]);

export default function Home() {
  const { mainPage } = useSelector(s => s.MainPage);
  const dispatch = useDispatch();

  const handleSelectedCategory = (category) => {
    dispatch(setActiveCategory(category));
    dispatch(openSidebarAction());
  }

  return (
    <div className={cls.container}>
      <MainLayout>
        <div className={cls.slider}>
          <Swiper
            loop={true}
            slidesPerView={1}
            followFinger={false}
            navigation={{
              nextEl: '.next-el-btn',
              prevEl: '.prev-el-btn'
            }}
            simulateTouch={false}
          >
            {
              mainPage.map((item, i, arr) => (
                <SwiperSlide key={item.id}>
                  <div className={cls.sliderItem}>
                    <div onClick={() => handleSelectedCategory(item)}>
                      <img className={cls.img} src={item.img} alt='' />
                      <h1 className={cls.title}>{item.title}&rsquo;s</h1>
                    </div>
                    <div className={'prev-el-btn'}>
                      <IoIosArrowBack />
                      <p>{i === 0 ? arr[arr.length -1].title : arr[i-1].title }</p>
                    </div>
                    <div className={'next-el-btn'}>
                      <p>{i === arr.length - 1 ? arr[0].title : arr[i+1].title }</p>
                      <IoIosArrowForward />
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </MainLayout>
    </div>
  )
}
