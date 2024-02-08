import { useState } from "react";
import { hamburger, close } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>


        {/* mobile nav */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : hamburger}
            alt='hamburger icon'
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}

          />

          <div
            className={`${toggle ? 'flex' : 'hidden'}
              p-6 absolute top-20 right-0 mx-4 my-2 bg-blue-400 min-w-[150px] rounded-xl sidebar` }
          >
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((item) => (
                <li className=' mb-4' key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray '
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/' className="">Sign in</a>
        </div>

      </nav>
    </header>
  );
};

export default Nav;