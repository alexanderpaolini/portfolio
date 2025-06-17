import { PAGES } from '@/constants';
import { PageButton } from './page';

export function HeaderPagesList({ onNavClick, isOpen }: {
  onNavClick: (href: string) => void;
  isOpen: boolean;
}) {
  return (
    <nav
      className={`${isOpen ? "flex" : "hidden"} z-10 absolute top-16 left-0 w-full flex-col justify-end space-y-2 bg-background border-y px-2 py-4 sm:static sm:flex sm:flex-row sm:w-auto sm:items-center sm:space-x-4 sm:space-y-0 sm:px-0 sm:py-0 sm:border-0`}
    >
      {PAGES.map(({ href, label, icon }) => (
        <PageButton
          key={href}
          href={href}
          label={label}
          icon={icon}
          onClick={onNavClick}
        />
      ))}
    </nav>
  );
}
