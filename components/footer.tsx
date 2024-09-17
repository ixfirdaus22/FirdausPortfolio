import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
    <div className="pt-6 w-full text-xs border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
      <div className="text-neutral-500">
        Built by Firdaus Mazumdar | ©2024 Next.js Project. All Rights Reserved
        <br />
        <span className="italic text-neutral-400">
          ~ It&apos;s not a bug, it&apos;s a feature!
        </span>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Footer;
