import { useState } from "react";
import { Icon } from "@iconify/react";

import SectionHeader from "@/components/SectionHeader";
import AnimatedContent from "@/components/AnimatedContent";

const contactDetails = [
  {
    icon: "mdi:domain",
    label: "Company",
    value: "BIG HILL Lanka Pvt Ltd",
    accent: "primary",
  },
  {
    icon: "mdi:web",
    label: "Website",
    value: "https://www.bighill.lk",
    link: "https://www.bighill.lk",
    accent: "primary",
  },
  {
    icon: "mdi:email-outline",
    label: "Sales & General Queries",
    value: "order@bighill.lk",
    link: "mailto:order@bighill.lk",
    accent: "primary",
  },
  {
    icon: "mdi:phone",
    label: "Hotline",
    value: "+94 77 167 2564",
    link: "tel:+94771672564",
    accent: "primary",
  },
  {
    icon: "mdi:map-marker",
    label: "Address",
    value: "4th Floor, Forbes & Walkers Building, 38/46 Nawam Mawatha, Colombo 02",
    accent: "gold",
  },
];

const faqs = [
  {
    question: "Do you supply to retail stores?",
    answer: "Yes. We work with supermarkets, retailers, distributors, and independent stores across Sri Lanka.",
  },
  {
    question: "Can I inquire about partnership opportunities?",
    answer:
      "Absolutely. Submit your details through the form and our team will get in touch regarding potential collaboration.",
  },
  {
    question: "How quickly do you respond?",
    answer: "Most inquiries are responded to within 1–2 business days depending on volume.",
  },
];

const accentClasses = {
  primary: {
    iconWrapper: "bg-primary/10",
    icon: "text-primary",
  },
  gold: {
    iconWrapper: "bg-gold/15",
    icon: "text-gold",
  },
};

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary px-6 pb-20 pt-32">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-secondary/5" />
        <div className="absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-gold/20" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold text-secondary/80">
            <Icon icon="mdi:message-text-outline" />
            Contact Us
          </div>

          <h1 className="mb-5 font-serif text-5xl font-semibold leading-tight text-secondary sm:text-6xl lg:text-7xl">
            Let's <span className="italic text-gold">Connect</span>
          </h1>

          <p className="mx-auto max-w-xl text-lg leading-relaxed text-secondary/70">
            Reach out for product inquiries, partnerships, supply discussions, or general business communication.
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-linear-to-b from-transparent to-secondary" />
      </section>

      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <AnimatedContent direction="horizontal" reverse>
            <div>
              <SectionHeader
                eyebrow="Contact Information"
                title="Reach Us Anytime"
                subtitle="Connect with Big Hill Lanka through any of the following channels."
              />

              <div className="mb-8 space-y-4">
                {contactDetails.map((detail) => {
                  const styles = accentClasses[detail.accent];

                  return (
                    <div
                      key={detail.label}
                      className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-secondary p-5 shadow-sm"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.iconWrapper}`}
                      >
                        <Icon icon={detail.icon} className={`text-xl ${styles.icon}`} />
                      </div>

                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-charcoal/45">
                          {detail.label}
                        </p>

                        {detail.link ? (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-charcoal transition-colors hover:text-primary"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold leading-relaxed text-charcoal">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-primary/10 bg-secondary shadow-sm">
                <div className="relative h-64 w-full md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.760669812595!2d79.84748607571446!3d6.919189893080469!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bde843a117f%3A0xe381e653262c45a5!2sBig%20Hill%20Lanka%20Pvt%20Ltd.!5e0!3m2!1sen!2slk!4v1776688317420!5m2!1sen!2slk"
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Big Hill Lanka Location"
                  />
                </div>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent direction="horizontal">
            <div className="rounded-3xl border border-primary/10 bg-secondary p-8 shadow-sm">
              <div className="mb-7">
                <h2 className="mb-2 text-xl font-extrabold text-charcoal">Send Us a Message</h2>
                <p className="text-sm text-charcoal/60">Fill in the form below and we’ll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-charcoal/70">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-primary/10 bg-secondary px-4 py-3 text-charcoal outline-none transition-colors focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-charcoal/70">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-primary/10 bg-secondary px-4 py-3 text-charcoal outline-none transition-colors focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-charcoal/70">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-primary/10 bg-secondary px-4 py-3 text-charcoal outline-none transition-colors focus:border-primary"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-charcoal/70">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-primary/10 bg-secondary px-4 py-3 text-charcoal outline-none transition-colors focus:border-primary"
                    placeholder="Write your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary py-3 font-semibold text-secondary transition-all duration-200 hover:bg-gold hover:text-charcoal"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-secondary px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            subtitle="Quick answers to common business inquiries."
            center
          />

          <div className="mt-4 space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedContent key={faq.question} direction="vertical" distance={30} delay={index * 80}>
                <div className="rounded-2xl border border-primary/10 bg-secondary p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon icon="mdi:help-circle" className="text-lg text-primary" />
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-bold text-charcoal">{faq.question}</h4>
                      <p className="text-sm leading-relaxed text-charcoal/65">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
