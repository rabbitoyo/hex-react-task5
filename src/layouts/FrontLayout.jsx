import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router';
import NavBar from '../components/common/NavBar';
import Footer from '../components/layout/Footer';

const FrontLayout = () => {
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = 'unset';

        // 切換頁面自動滾回頂部
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
export default FrontLayout;
