import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMapPin,
  IconMail,
  IconPhone,
  IconClock,
  IconBuildingSkyscraper,
  IconInfoCircle,
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/service" },
    { label: "Projects", href: "/project" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "General Contracting", href: "/service" },
    { label: "Commercial Building", href: "/service" },
    { label: "Renovation & Remodeling", href: "/service" },
    { label: "Project Management", href: "/service" },
  ];

  const socialLinks = [
    { icon: IconBrandFacebook, href: "#", label: "Facebook" },
    { icon: IconBrandInstagram, href: "#", label: "Instagram" },
    { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="mt-20 bg-dark text-white">
      <div className="container mx-auto px-4 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <IconBuildingSkyscraper size={24} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tight text-white">CORNERSTONE</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-primary">
                  CONSTRUCTION
                </span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              Building excellence since 1998. We deliver commercial, residential, and
              industrial projects with uncompromising quality and safety.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-dark-2 text-slate-300 transition-all hover:bg-primary hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <IconMapPin size={18} className="mt-0.5 text-primary shrink-0" />
                <span>1234 Industrial Parkway, Suite 200, Denver, CO 80202</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <IconMail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@cornerstonebuild.com" className="transition-colors hover:text-primary">
                  info@cornerstonebuild.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <IconPhone size={18} className="text-primary shrink-0" />
                <a href="tel:+15551234567" className="transition-colors hover:text-primary">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <IconClock size={18} className="mt-0.5 text-primary shrink-0" />
                <span>Mon – Fri: 7AM – 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-dark-2 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
            <p>&copy; {currentYear} Cornerstone Construction. All rights reserved.</p>
            <p className="flex items-center gap-4">
              <span>Licensed &amp; Insured</span>
              <span className="hidden sm:inline text-dark-2">|</span>
              <span>License #CB-448291</span>
            </p>
          </div>

          {/* Demo notice + credit */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-dark-2 pt-6 text-xs text-slate-500 sm:flex-row">
            <p className="flex max-w-2xl items-start gap-2 text-center sm:text-left">
              <IconInfoCircle size={15} className="mt-0.5 shrink-0 text-primary" />
              <span>
                Demo project &mdash; &ldquo;Cornerstone Construction&rdquo; is a fictional
                company built for practice and portfolio purposes. This is not a real
                business and no services are offered.
              </span>
            </p>
            <p className="shrink-0">
              Designed &amp; developed by{" "}
              <a
                href="https://irfankhalid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary transition-colors hover:text-accent hover:underline"
              >
                irfankhalid.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
