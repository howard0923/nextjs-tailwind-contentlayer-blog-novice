import { useState } from 'react';

import CustomLink from '@/components/CustomLink';
import { headerConfigs } from '@/configs/headerConfigs';

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflowY = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflowY = 'hidden';
      }
      return !status;
    });
  };

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="h-10 w-10 rounded p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 sm:h-12 sm:w-12 sm:p-3"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 transition-colors dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4 17H20M4 12H20M4 7H20"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>

      <div
        className={`fixed top-16 right-0 h-screen w-full bg-gray-200/90 transition-all duration-300 ease-in-out dark:bg-gray-800/90 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="mt-8 h-full w-full">
          {headerConfigs.navLinks.map((link) => (
            <CustomLink
              href={link.href}
              key={link.title}
              className="block px-12 py-4 text-2xl font-bold tracking-widest text-gray-900 transition-colors hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-700"
              onClick={onToggleNav}
            >
              {link.title}
            </CustomLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
