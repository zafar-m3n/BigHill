import SectionHeader from "@/components/SectionHeader";
import AnimatedContent from "@/components/AnimatedContent";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import arpicoLogo from "@/assets/arpico.png";
import cargillsLogo from "@/assets/cargills.png";
import glomarkLogo from "@/assets/glowmark.png";
import navalankaLogo from "@/assets/navalanka.jfif";
import harcourtsLogo from "@/assets/harcourts.png";
import healthguardLogo from "@/assets/healthguard.png";
import keellsLogo from "@/assets/keellslogo.webp";
import onlinekadeLogo from "@/assets/onlinekade.png";
import mkb from "@/assets/mkb.png";
import triplea from "@/assets/triplea.png";
import aladdindarbar from "@/assets/aladdindarbar.png";
import mummysdelight from "@/assets/mummysdelight.jfif";
import alreem from "@/assets/alreem.jfif";
import fazlys from "@/assets/fazlys.png";
import arabianknights from "@/assets/arabianknights.jfif";
import almaas from "@/assets/almaas.jfif";
import spar from "@/assets/spar.jfif";
import kandoori from "@/assets/kandoori.jfif";

const supermarketClients = [
  { name: "Arpico", logo: arpicoLogo },
  { name: "Cargills", logo: cargillsLogo },
  { name: "GloMark", logo: glomarkLogo },
  { name: "Harcourts Pharmacy", logo: harcourtsLogo },
  { name: "Healthguard Pharmacy", logo: healthguardLogo },
  { name: "Keells", logo: keellsLogo },
  { name: "Spar", logo: spar },
  { name: "OnlineKade", logo: onlinekadeLogo },
];

const gtClients = [
  { name: "Navalanka", logo: navalankaLogo },
  { name: "Nawayuga Supermart", logo: null },
  { name: "MKB Dehiwala", logo: mkb },
  { name: "FNR Trading", logo: null },
  { name: "Kollonawa Food City", logo: null },
  { name: "Triple A Supermart", logo: triplea },
  { name: "Udayagiri Super", logo: null },
];

const horecaClients = [
  { name: "Al-Maas Restaurant", logo: almaas },
  { name: "Arabian Knights", logo: arabianknights },
  { name: "Eastern Rice Shop", logo: null },
  { name: "Fazlys Restaurant", logo: fazlys },
  { name: "Al-Reem", logo: alreem },
  { name: "Mummy's Delight", logo: mummysdelight },
  { name: "Kandoori Restaurant", logo: kandoori },
  { name: "Cafe Karachi", logo: null },
  { name: "Aladdin Darbar", logo: aladdindarbar },
];

const clientGroups = [
  {
    eyebrow: "Modern Trade",
    title: "Supermarkets",
    description: "Top supermarket, pharmacy, and online retail customers.",
    icon: "mdi:cart-outline",
    count: "8",
    clients: supermarketClients,
  },
  {
    eyebrow: "General Trade",
    title: "GT Customers",
    description: "Selected major general trade customers from the wider retail network.",
    icon: "mdi:store-outline",
    count: "6",
    clients: gtClients,
  },
  {
    eyebrow: "HORECA",
    title: "Foodservice",
    description: "Restaurants and foodservice customers supplied by Big Hill Lanka.",
    icon: "mdi:silverware-fork-knife",
    count: "8",
    clients: horecaClients,
  },
];

const networkStats = [
  { value: "3", label: "Channels" },
  { value: "22", label: "Featured Accounts" },
  { value: "750+", label: "HORECA Reach" },
  { value: "40K+", label: "Retailer Network" },
];

function LogoTile({ client }) {
  return (
    <div className="group aspect-square overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10">
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-secondary px-3 text-center">
          <span className="font-serif font-extrabold uppercase tracking-wide text-charcoal text-base">
            {client.name}
          </span>
        </div>
      )}
    </div>
  );
}

function ClientRow({ group, index }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm">
      <div className="grid grid-cols-1 gap-4 p-4 sm:p-5 md:grid-cols-12 md:items-center">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Icon icon={group.icon} className="text-2xl text-primary" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{group.eyebrow}</p>
              <h3 className="text-xl font-extrabold leading-tight text-charcoal">{group.title}</h3>
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-charcoal/60">{group.description}</p>
        </div>

        <div className="min-w-0 md:col-span-8">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={850}
            spaceBetween={12}
            autoplay={{
              delay: 1500 + index * 250,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2.25,
              },
              420: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3.4,
              },
              1024: {
                slidesPerView: 4.2,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {group.clients.map((client) => (
              <SwiperSlide key={client.name}>
                <LogoTile client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function ClientNetworkSection() {
  return (
    <section className="overflow-hidden bg-secondary px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Client Network"
          title="A Strong Supply Network Across Sri Lanka"
          subtitle="Some of the top customers supplied across modern trade, general trade, and HORECA."
          center
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <AnimatedContent direction="horizontal" reverse>
              <div className="h-full rounded-3xl bg-primary p-7 text-secondary shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                  <Icon icon="mdi:network-outline" className="text-3xl text-gold" />
                </div>

                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">Distribution Reach</p>

                <h3 className="font-serif text-4xl font-normal leading-none sm:text-5xl lg:text-4xl xl:text-5xl">
                  Connected to customers that move products.
                </h3>

                <p className="mt-5 text-sm leading-7 text-secondary/70">
                  A focused look at selected major accounts from Big Hill Lanka’s wider customer base across retail,
                  general trade, and foodservice.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {networkStats.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-secondary/10 p-4">
                      <div className="text-2xl font-extrabold leading-none text-gold">{item.value}</div>
                      <div className="mt-2 text-xs font-bold uppercase tracking-wide text-secondary/55">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div className="space-y-4 lg:col-span-8">
            {clientGroups.map((group, index) => (
              <AnimatedContent key={group.title} direction="vertical" delay={index * 80}>
                <ClientRow group={group} index={index} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientNetworkSection;
