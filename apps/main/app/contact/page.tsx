import { ArrowUpRight } from "lucide-react";
import { companyInfo, EARLY_ACCESS_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact",
  `Contact Sheriax at ${companyInfo.email} for company questions and correspondence about Tat’heer.`,
  "/contact",
);

export default function ContactPage() {
  return (
    <div className="shell inner-page contact-page">
      <p className="eyebrow">Contact</p>
      <h1>
        Reach the company
        <br />
        <span>behind Tat’heer.</span>
      </h1>
      <div className="page-columns">
        <div className="prose">
          <p>
            For company questions, feedback or correspondence about Tat’heer,
            email us directly.
          </p>
          <a
            className="email-link contact-email"
            href={`mailto:${companyInfo.email}`}
          >
            {companyInfo.email}
            <ArrowUpRight size={24} aria-hidden="true" />
          </a>
          <p className="detail-note">
            This link opens your email app. You can also copy the address into
            your email provider.
          </p>
          <p>
            Don’t send bank statements, account credentials or other sensitive
            financial information by email.
          </p>
        </div>
        <aside className="contact-aside">
          <h2>Looking for early access?</h2>
          <p>
            Tat’heer is currently in development. Sign up on the product website
            for updates.
          </p>
          <a className="text-link" href={EARLY_ACCESS_URL}>
            Join Tat’heer early access{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="detail-note">
            {companyInfo.companyName}
            <br />
            {companyInfo.location}
          </p>
        </aside>
      </div>
    </div>
  );
}
