import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  companyInfo,
  EARLY_ACCESS_URL,
  SITE_URL,
  TATHEER_URL,
} from "@/lib/constants";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "The company behind Tat’heer",
  companyInfo.description,
  "/",
);

const journey = [
  [
    "Bring in your transactions",
    "Connect a supported bank or import a statement.",
  ],
  [
    "Review possible interest",
    "Identify entries that may be bank interest and review them.",
  ],
  [
    "Understand the guidance",
    "Read source-based scholarly guidance relevant to disposal.",
  ],
  [
    "Check the recipient",
    "Check whether a recipient accepts interest money and how it may be used.",
  ],
  ["Pay directly", "Make the payment to the recipient yourself."],
  [
    "Keep your records",
    "Keep supporting records of the amount and its disposal.",
  ],
];

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/Sheriax-Logo.png`,
    email: companyInfo.email,
    foundingDate: "2024-11-07",
    description: companyInfo.description,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CIN",
      value: companyInfo.cin,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\u003c"),
        }}
      />
      <section className="shell hero" aria-labelledby="intro-title">
        <p className="eyebrow">Sheriax / Tat’heer</p>
        <h1 id="intro-title">
          The company
          <br />
          behind <span>Tat’heer.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-note">
            Our focus is Tat’heer.
            <br />
            Currently in development.
          </p>
          <div className="hero-intro">
            <p>
              We’re building Tat’heer to help people identify unwanted bank
              interest, understand scholarly guidance and keep a record of how
              they dispose of it.
            </p>
            <a className="button" href={TATHEER_URL}>
              Explore Tat’heer <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="tatheer"
        className="product-section"
        aria-labelledby="product-title"
      >
        <div className="shell">
          <div className="product-intro">
            <div className="product-identity">
              <Image
                src="/brand/tatheer.svg"
                alt="Tat’heer"
                width={480}
                height={84}
              />
              <span lang="ar" dir="rtl" className="arabic-name">
                تطهير
              </span>
              <p>A product by Sheriax</p>
            </div>
            <div className="product-copy">
              <p className="eyebrow">What we’re building</p>
              <h2 id="product-title">
                A clearer path for
                <br />
                unwanted interest.
              </h2>
              <p>
                Bank interest can arrive without being wanted. Working out what
                to do next means understanding the amount, the guidance and
                where the money can go.
              </p>
              <p>
                Tat’heer is being designed to bring those steps together, from
                reviewing transactions to keeping a record of disposal.
              </p>
            </div>
          </div>
          <div className="journey-heading">
            <h3>The planned journey</h3>
            <p>These are intended capabilities, currently in development.</p>
          </div>
          <ol className="journey">
            {journey.map(([title, text], i) => (
              <li key={title}>
                <span className="step-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="product-caveat">
            We’re seeking scholarly guidance. Bank connections, published
            guidance and recipient checks are not yet available.
          </p>
        </div>
      </section>

      <section className="status-section" aria-labelledby="status-title">
        <div className="shell status-inner">
          <div>
            <p className="eyebrow">Development status</p>
            <h2 id="status-title">
              Being built.
              <br />
              Not yet launched.
            </h2>
          </div>
          <div className="status-copy">
            <p>
              Early-access signup is open on the Tat’heer website. There’s no
              announced launch date or app-store availability.
            </p>
            <a className="text-link light" href={EARLY_ACCESS_URL}>
              Join Tat’heer early access{" "}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="shell accountability" aria-labelledby="company-title">
        <div>
          <p className="eyebrow">The company</p>
          <h2 id="company-title">
            Built by Sheriax.
            <br />
            Reach us directly.
          </h2>
          <Link className="text-link" href="/about">
            About the company <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="company-details">
          <p>
            {companyInfo.legalName} is an Indian company incorporated in 2024.
            Our work is focused on developing Tat’heer.
          </p>
          <p>For company questions or correspondence about Tat’heer:</p>
          <a className="email-link" href={`mailto:${companyInfo.email}`}>
            {companyInfo.email} <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <p className="detail-note">{companyInfo.location}</p>
        </div>
      </section>
    </>
  );
}
