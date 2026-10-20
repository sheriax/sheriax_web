import Link from "next/link";
import {
  companyInfo,
  legalLinks,
  mainNavLinks,
  TATHEER_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-name">
              Sheriax
            </Link>
            <p>The company behind Tat’heer.</p>
          </div>
          <nav aria-label="Footer" className="footer-links">
            {mainNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.name}
                </Link>
              ))}
            <a href={TATHEER_URL}>Tat’heer ↗</a>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {companyInfo.companyName}
          </p>
          <p>{companyInfo.location}</p>
        </div>
      </div>
    </footer>
  );
}
