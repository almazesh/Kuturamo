import Head from "next/head"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstAuthAction } from "../../redux/App/actions";
import Chat from "../Chat";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import cls from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
    const dispatch = useDispatch();
    const { firstLoading } = useSelector(s => s.App);

    useEffect(() => {
        console.log(firstLoading);
        if(!firstLoading){
            dispatch(firstAuthAction())
        }
    }, [firstLoading, dispatch])

    return (
        <div className={cls.root}>
            <Head>
                <meta keywords='KUTARAMO' />
                <title>KUTARAMO</title>
            </Head>
            <div className={cls.container}>
                <Navbar />
                <Sidebar />
                {children}
                <Chat />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default MainLayout