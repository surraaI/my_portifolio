import { SOCIAL_LINKS } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center md:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sura Itana
        </p>
        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
