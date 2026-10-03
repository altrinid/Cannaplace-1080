import type { Dict } from "@/content/types";
import { AgeGate } from "./AgeGate";
import { Bestsellers } from "./Bestsellers";
import { CartProvider } from "./CartProvider";
import { Categories } from "./Categories";
import { FontSwitcher } from "./FontSwitcher";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Journal } from "./Journal";
import { LabReports } from "./LabReports";
import { Newsletter } from "./Newsletter";
import { ValueProps } from "./ValueProps";
import { VisitStore } from "./VisitStore";

function AnnouncementBar({ items }: { items: string[] }) {
  return (
    <div className="bg-forest-900 text-cream">
      <div className="container-x t-body-sm flex items-center justify-center gap-6 py-2.5 text-center">
        {items.map((item, i) => (
          <span key={item} className={`items-center gap-6 ${i === 0 ? "flex" : "hidden md:flex"}`}>
            {i > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-kraft-400" />}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HomePage({ t }: { t: Dict }) {
  return (
    <CartProvider addedLabel={t.cart.added}>
      <AnnouncementBar items={t.announcement} />
      <Header t={t.header} nav={t.nav} lang={t.lang} />
      <main>
        <Hero t={t.hero} />
        <ValueProps items={t.valueProps} />
        <Categories t={t.categories} />
        <Bestsellers t={t.bestsellers} />
        <LabReports t={t.lab} />
        <VisitStore t={t.store} />
        <Journal t={t.journal} />
        <Newsletter t={t.newsletter} />
      </main>
      <Footer t={t.footer} city={t.store.city} />
      <AgeGate t={t.ageGate} />
      <FontSwitcher t={t.fontSwitch} />
    </CartProvider>
  );
}
