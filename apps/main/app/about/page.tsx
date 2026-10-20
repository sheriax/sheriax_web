import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companyInfo, TATHEER_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About",
  `${companyInfo.companyName} is the company developing Tat’heer. Company information and contact details.`,
  "/about",
);

export default function AboutPage() {
  return (
    <div className="shell inner-page">
      <p className="eyebrow">About Sheriax</p>
      <h1>
        One company.
        <br />
        <span>Focused on Tat’heer.</span>
      </h1>
      <div className="page-columns">
        <div className="prose">
          <p>
            Sheriax is the company behind Tat’heer. Our work is focused on
            building a way for people to identify unwanted bank interest,
            understand scholarly guidance and record its disposal.
          </p>
          <p>
            Tat’heer is in development. We’re seeking scholarly guidance, and
            the planned product capabilities are not yet available.
          </p>
          <a className="text-link" href={TATHEER_URL}>
            Explore Tat’heer <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="company-register">
          <h2>Company details</h2>
          <dl>
            <div>
              <dt>Company name</dt>
              <dd>{companyInfo.companyName}</dd>
            </div>
            <div>
              <dt>Incorporated</dt>
              <dd>{companyInfo.incorporationDate}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{companyInfo.location}</dd>
            </div>
          </dl>
          <Link className="text-link" href="/contact">
            Contact Sheriax <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
