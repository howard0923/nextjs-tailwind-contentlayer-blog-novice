import { useTranslation } from 'next-i18next';

import CommandPaletteToggle from '@/components/CommandPaletteToggle';
import CustomLink from '@/components/CustomLink';
import LanguageSwitch from '@/components/LanguageSwitch';
import MobileNav from '@/components/MobileNav';
import SectionContainer from '@/components/SectionContainer';
import ThemeSwitch from '@/components/ThemeSwitch';
import { headerConfigs } from '@/configs/headerConfigs';
export default function Header() {
  const { t } = useTranslation(['common']);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-900/10 bg-white/70 py-3 backdrop-blur transition-colors dark:border-slate-50/[0.06] dark:bg-gray-900/60">
      <div className="mx-8 max-w-full px-4">
        <div className="flex items-center justify-between ml-0 sm:ml-4">
          <CustomLink href="/" aria-label={headerConfigs.title}>
            <div className="flex items-center">
              <div className="text-2xl font-semibold sm:text-3xl">
                {headerConfigs.title}
              </div>
            </div>
          </CustomLink>

          <div className="flex items-center text-base leading-5 sm:gap-1">
            <div className="hidden gap-1 sm:flex">
              {headerConfigs.navLinks.map((link) => (
                <CustomLink
                  key={link.title}
                  href={link.href}
                  className="rounded p-3 font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                >
                  {t(link.title)}
                </CustomLink>
              ))}
            </div>

            <LanguageSwitch />
            <ThemeSwitch />
            <CommandPaletteToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
