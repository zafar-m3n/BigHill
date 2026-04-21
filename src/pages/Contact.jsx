import { Icon } from "@iconify/react";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import RevealOnScroll from "../components/RevealOnScroll";

const contactDetails = [
  {
    icon: "mdi:domain",
    label: "Company",
    value: "BIG HILL Lanka Pvt Ltd",
    color: "#0E6B3C",
  },
  {
    icon: "mdi:web",
    label: "Website",
    value: "https://www.bighill.lk",
    link: "https://www.bighill.lk",
    color: "#0E6B3C",
  },
  {
    icon: "mdi:email-outline",
    label: "Sales & General Queries",
    value: "order@bighill.lk",
    link: "mailto:order@bighill.lk",
    color: "#0E6B3C",
  },
  {
    icon: "mdi:phone",
    label: "Hotline",
    value: "+94 77 167 2564",
    link: "tel:+94771672564",
    color: "#0E6B3C",
  },
  {
    icon: "mdi:map-marker",
    label: "Address",
    value: "4th Floor, Forbes & Walkers Building, 38/46 Nawam Mawatha, Colombo 02",
    color: "#D4A72C",
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

export default function Contact() {
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
      {/* HERO */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a3d24 0%, #0E6B3C 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-gold/20" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-semibold mb-6">
            <Icon icon="mdi:message-text-outline" />
            Contact Us
          </div>

          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 600,
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              lineHeight: 1.1,
            }}
          >
            Let's <span style={{ color: "#D4A72C", fontStyle: "italic" }}>Connect</span>
          </h1>

          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Reach out for product inquiries, partnerships, supply discussions, or general business communication.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, #FAF8F3 100%)",
          }}
        />
      </section>

      {/* MAIN */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <RevealOnScroll direction="left">
            <div>
              <SectionHeader
                eyebrow="Contact Information"
                title="Reach Us Anytime"
                subtitle="Connect with Big Hill Lanka through any of the following channels."
              />

              <div className="space-y-4 mb-8">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: detail.color + "15" }}
                    >
                      <Icon icon={detail.icon} className="text-xl" style={{ color: detail.color }} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        {detail.label}
                      </p>

                      {detail.link ? (
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-charcoal hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-charcoal leading-relaxed">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* MAP */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <div className="relative w-full h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.760669812595!2d79.84748607571446!3d6.919189893080469!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bde843a117f%3A0xe381e653262c45a5!2sBig%20Hill%20Lanka%20Pvt%20Ltd.!5e0!3m2!1sen!2slk!4v1776688317420!5m2!1sen!2slk"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Big Hill Lanka Location"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* RIGHT */}
          <RevealOnScroll direction="right">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="mb-7">
                <h2 className="text-xl font-extrabold text-charcoal mb-2">Send Us a Message</h2>
                <p className="text-sm text-gray-500">Fill in the form below and we’ll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-primary"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-primary resize-none"
                    placeholder="Write your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary hover:bg-[#09502d] text-white py-3 font-semibold transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            subtitle="Quick answers to common business inquiries."
            center
          />

          <div className="space-y-4 mt-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-cream rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon icon="mdi:help-circle" className="text-primary text-lg" />
                  </div>

                  <div>
                    <h4 className="font-bold text-charcoal text-sm mb-2">{faq.question}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
