import cls from './Sidebar.module.scss';
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebarAction } from '../../redux/App/actions'
import { clearCategory, setActiveCategory } from '../../redux/MainPage/actions';
import A from '../A'
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

const Sidebar = () => {
    const { sidebar } = useSelector(s => s.App);
    const { mainPage, activeCategory } = useSelector(s => s.MainPage);
    const dispatch = useDispatch();
    const router = useRouter();

    // Закрытие по ESC
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                dispatch(closeSidebarAction())
                dispatch(clearCategory())
            }
        };
        window.addEventListener('keydown', handleEsc);
     
        return () => {
           window.removeEventListener('keydown', handleEsc);
        };
    }, [dispatch])

    const handleChooseCategory = (category) => {
        router.push(`/products/${category.name}`)
        dispatch(closeSidebarAction())
    }

    const closeSidebar = () => {
        dispatch(closeSidebarAction())
        dispatch(clearCategory())
    }
    
    const setCategory = (category) => {
        dispatch(setActiveCategory(category))
    }

    return (
        <div className={`${cls.root} ${sidebar && cls.active}`}>
            <div className={cls.closeIcon}>
                <AiOutlineClose onClick={closeSidebar} />
            </div>
            <div className={cls.row}>
                <div className={cls.col}>
                    <div className={cls.navList}>
                        <ul>
                            {
                                mainPage.map(item => (
                                    <li className={activeCategory?.title === item.title ? cls.activeLink : null} key={item.id} onClick={() => setCategory(item)}>
                                        {item.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {
                        activeCategory && (
                            <div className={cls.categories}>
                                <ul>
                                    {
                                        activeCategory?.categories.map(item => (
                                            <li onClick={() => handleChooseCategory(item)} key={item.id}>{item.title}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className={cls.col}>
                    <h1 className={cls.saleTitle}>SALE</h1>
                    <div className={cls.saleProduct}>
                        <img alt='sale' src='/img/sale.png' />
                        <div className={cls.logIn}>
                            <A onClick={closeSidebar} text='LOG IN / SIGN UP TO SEE A PRICE' href='/login' />
                            <span>
                                ONLY FOR
                            </span>
                            <A onClick={closeSidebar} text='LOG IN / SIGN UP TO SEE A PRICE' href='/login' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;