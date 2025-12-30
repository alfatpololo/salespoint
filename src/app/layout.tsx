import { Sora, DM_Sans} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import Footer1 from './Components/Footer/Footer1';
import Header1 from './Components/Header/Header1';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: 'Salespoint - Untuk Pointing Sales Anda',
    default: 'Salespoint - Untuk Pointing Sales Anda',
    template: '%s | Salespoint',
  },
  description: 'Platform SaaS B2B untuk memantau dan meningkatkan performa tim sales dengan dashboard real-time dan analitik lengkap',
  openGraph: {
    title: 'Salespoint - Untuk Pointing Sales Anda',
    description: 'Platform SaaS B2B untuk memantau dan meningkatkan performa tim sales dengan dashboard real-time dan analitik lengkap',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="author" content="Salespoint" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
      </head>
      <body className={`${sora.variable} ${dm_sans.variable}`}>
        <div className='main-page-area'>
          <Header1></Header1>
          {children}
          <Footer1></Footer1>
        </div>
      </body>
    </html>
  );
}
