import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
        Beranda
        </Link>
      </li>

      <li>
        <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
        Tentang Kami
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
        Layanan
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
              Layanan
              </Link>
            </li>
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
              Detail Layanan
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>


      <li className="menu-item-has-children">
        <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>Halaman</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
               Tim Kami
              </Link>
            </li>            
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
                Detail Tim
              </Link>
            </li>             
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
              Proyek Kami
              </Link>
            </li> 
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
              Detail Proyek
              </Link>
            </li>    
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
             Paket Harga
              </Link>
            </li>   
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
             Integrasi
              </Link>
            </li>                                             
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
              FAQ
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>        

      <li className="menu-item-has-children">
        <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
                Blog dengan Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                href="#"
                onClick={(e) => { e.preventDefault(); setMobileToggle(false); }}
                style={{ cursor: 'not-allowed', pointerEvents: 'none' }}
              >
                Detail Blog
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="#" onClick={(e) => { e.preventDefault(); setMobileToggle(false); }} style={{ cursor: 'not-allowed', pointerEvents: 'none' }}>
          Kontak
        </Link>
      </li>
    </ul>
  );
}
