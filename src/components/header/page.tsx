export function PageButton({ href, label, icon: Icon, onClick }: {
  href: string;
  label: string;
  icon: React.ElementType;
  onClick: (href: string) => void;
}) {
  return (
    <button
      key={href}
      onClick={() => onClick(href)}
      className="w-full text-left border-b border-transparent py-1 hover:underline hover:underline-offset-4 sm:w-auto sm:py-0 sm:px-2 sm:hover:bg-transparent sm:hover:underline-offset-0"
      type="button"
    >
      <p className="flex items-center gap-2">
        <Icon size={24} />
        {label}
      </p>
    </button>
  );
}