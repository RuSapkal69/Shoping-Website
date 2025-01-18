import { headerLogo } from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import HamburgerMenu from '../Components/HamburgerMenu';
const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 absolute w-full'>
      <nav className='flex justify-between max-container items-center'>
        <a href="/">
            <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            />
        </a>
        <ul className='flex-1 flex justify-center items-center
        gap-16 max-lg:hidden'>
            {navLinks.map((items) => (
                <li key={items.id}>
                    <a href={items.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'>
                        {items.label}
                    </a>
                </li>
            ))}
            <li>
                <a href="#register" className='font-montserrat leading-normal text-lg text-slate-gray'>
                    SignIn/SignUp
                </a>
            </li>
        </ul>
        <HamburgerMenu/>
      </nav>
    </header>
  )
}

export default Nav
