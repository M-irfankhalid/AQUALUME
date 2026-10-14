"use client";

import { useState } from "react";
import { IconMail, IconPhone, IconMapPin, IconClock, IconShieldCheck, IconFileCheck } from "@tabler/icons-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    alert("✅ Thank you! Your request has been received. Our team will contact you within one business day.");
  };

  const contactDetails: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
  }[] = [
    {
      icon: <IconPhone size={20} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <IconMail size={20} />,
      label: "Email",
      value: "info@cornerstonebuild.com",
      href: "mailto:info@cornerstonebuild.com",
    },
    {
      icon: <IconMapPin size={20} />,
      label: "Office",
      value: "1234 Industrial Parkway, Suite 200, Denver, CO 80202",
    },
    {
      icon: <IconClock size={20} />,
      label: "Hours",
      value: "Monday – Friday: 7AM – 5PM",
    },
  ];

  const inputClass =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="rounded-2xl bg-dark px-8 py-16 text-center sm:px-12 sm:py-20">
        <span className="mb-4 inline-block rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
          Contact Us
        </span>
        <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
          Request a Free Quote
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Tell us about your project and our team will get back to you within one
          business day with a detailed estimate.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-8 lg:col-span-3"
        >
          <h2 className="mb-1 text-2xl font-bold text-foreground">Project Details</h2>
          <p className="mb-3 text-sm text-muted">All fields marked with * are required.</p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Project Type *</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select a service...</option>
                <option value="general">General Contracting</option>
                <option value="residential">Residential Building</option>
                <option value="renovation">Renovation & Remodeling</option>
                <option value="design-build">Design-Build</option>
                <option value="industrial">Industrial Construction</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              Project Description *
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project — scope, location, timeline, and budget if known..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-4 text-base font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg"
          >
            Submit Request
          </button>
        </form>

        {/* Info */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h2>
            <ul className="space-y-5">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {detail.icon}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-foreground">{detail.label}</span>
                    {detail.href ? (
                      <a href={detail.href} className="text-sm text-muted transition-colors hover:text-primary">
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-sm text-muted">{detail.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="mb-5 text-lg font-bold text-foreground">Why Work With Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconShieldCheck size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-muted">
                  Fully licensed, bonded, and insured contractor
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IconFileCheck size={20} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-muted">
                  Free, detailed estimates with no obligation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
