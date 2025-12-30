import Footer1 from '../Components/Footer/Footer1';
import Header1 from '../Components/Header/Header1';

export default function Layout({ children }) {
    return (
        <div className='main-page-area'>
            <Header1></Header1>
            {children}
            <Footer1></Footer1>
        </div>
    );
}