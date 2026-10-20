import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell inner-page not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        This page
        <br />
        isn’t here.
      </h1>
      <p>The page may have been removed or the address may be incorrect.</p>
      <Link className="button" href="/">
        Return to Sheriax <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
