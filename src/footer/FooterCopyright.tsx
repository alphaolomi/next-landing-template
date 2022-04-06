import { Config } from "../utils/Config";
import Link from "next/link";

const FooterCopyright = () => (
  <div className="footer-copyright">
    &copy; Copyright {new Date().getFullYear()} {Config.title}. Made with{" "}
    <span role="img" aria-label="Love">
      ♥
    </span>{" "}
    by{" "}
    <Link href="https://alphaolomi.com">
      <a
        rel="noreferrer"
        target={"_blank"}
        className="text-primary-500 hover:underline"
      >
        Alpha Olomi
      </a>
    </Link>
  </div>
);

export { FooterCopyright };
