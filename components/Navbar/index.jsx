import cls from './Navbar.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi'
import A from '../A'
import { useDispatch, useSelector } from 'react-redux';
import { openSidebarAction } from '../../redux/App/actions';
import { useRouter } from 'next/dist/client/router';
import { phones } from '../../configs/businessConfig';

const Navbar = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useSelector(s => s.User);
    
    const openSearch = () => {
        router.push('/search')
    }
    
    return (
        <div className={cls.root}>
            <div className={cls.sidebarIcon}>
                <button onClick={() => dispatch(openSidebarAction())}>
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className={cls.logo}>
                <A text='LOGO' href='/' />
            </div>
            <div className={cls.phones}>
                {
                    phones.map((phone, i) => (
                        <a key={i} href={`tel:${phone}`}>{phone}</a>
                    ))
                }
            </div>
            <div className={cls.langs}>
                <span className={cls.activeLang}>EN</span> / <span>RU</span>
            </div>
            <div className={cls.search}>
                <button onClick={openSearch}>
                    <span>SEARCH</span>
                    <div className={cls.line}></div>
                </button>
            </div>
            <div className={cls.navs}>
                <ul>
                    {
                        user ? (
                            <li><A href={'/'} text={user.first_name} /></li>
                        ) : 
                        <li>
                            <A href='/login' text='LOG IN' />
                        </li>
                    }
                    <li>
                        <A href='/liked' text='LIKED' />
                    </li>
                    <li>
                        <A href='/cart' text='CART' />
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar