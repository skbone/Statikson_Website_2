import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Building2,
  Calculator,
  Coins,
  TrendingUp,
  FileText,
  Lock,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

type Language = "en" | "ru" | "de";

const content = {
  en: {
    nav: {
      services: "Services",
      approach: "Approach",
      contact: "Contact",
    },
    hero: {
      title: "Statikson",
      subtitle:
        "Private advisory office in Lugano, Switzerland",
      description:
        "We advise on cross-border ownership structures, international taxation, digital assets, banking relations and transactions. Our work is discreet, context-driven and tailored to the individual situation.",
    },
    contexts: {
      title: "Contexts we work with:",
      items: [
        "digital technology founders and shareholder groups",
        "private investors and family offices",
        "platforms and institutions in the digital asset sector",
        "asset, inheritance and regulatory matters",
      ],
    },
    services: {
      title: "Advisory Areas",
      items: [
        {
          title: "Business & Ownership Structuring",
          description:
            "Equity structuring, governance and transaction preparation (incl. M&A).",
        },
        {
          title: "International Tax Consulting",
          description:
            "Cross-border tax positioning for private and corporate clients. Capital gains and dividend taxation. Intellectual property and revenue allocation.",
        },
        {
          title: "Crypto Advisory",
          description:
            "Digital asset holdings, including DeFi. Custody and exchange relations. Regulatory and tax considerations.",
        },
        {
          title: "Financial Advisory",
          description:
            "Access to private banking and independent asset managers. Portfolio and mandate structuring for UHNW/HNW clients.",
        },
        {
          title: "Legal Consulting & Asset Situations",
          description:
            "Banking and regulatory communications. Asset unblocking and pre-litigation negotiation. Legal opinions — issued on request, following context and document review (tax, digital assets / DeFi, real estate, succession).",
        },
        {
          title: "Fiduciary Services & Governance Support",
          description:
            "Nominee arrangements and corporate continuity where lawful and appropriate.",
        },
      ],
    },
    approach: {
      title: "Approach",
      description:
        "No standard packages. Engagement terms are defined after understanding the context.",
    },
    contact: {
      title: "Contact",
      description:
        "Introductions are made through professional referral or direct request.",
      email: "contact@statikson.com",
    },
    legal: {
      title: "Legal Note",
      description:
        "Statikson Srl — registered office: Romania. Private advisory office operates in Lugano, Switzerland.",
    },
  },
  ru: {
    nav: {
      services: "Услуги",
      approach: "Подход",
      contact: "Контакт",
    },
    hero: {
      title: "Statikson",
      subtitle:
        "Private advisory office in Lugano, Switzerland",
      description:
        "Мы сопровождаем принятие решений в условиях трансграничного права, частных капиталов и цифровой экономики. Работаем с структурами владения, международным налогообложением, цифровыми активами, банковскими отношениями и сделками.",
    },
    contexts: {
      title: "Контексты, в которых мы вовлечены:",
      items: [
        "стартапы в сфере цифровых технологий и их учредители",
        "частные инвесторы и family offices",
        "платформы и проекты в области цифровых активов",
        "ситуации, связанные с активами, наследством и регулированием",
      ],
    },
    services: {
      title: "Сферы работы",
      items: [
        {
          title: "Business & Management Advisory",
          description:
            "Структура владения и корпоративная модель. Подготовка к продаже долей и M&A. Сопровождение сделок.",
        },
        {
          title: "International Tax Consulting",
          description:
            "Трансграничные налоговые позиции для частных и корпоративных клиентов. Налоги при продаже долей и приросте капитала. Конфигурации IP и распределение доходов.",
        },
        {
          title: "Crypto Advisory",
          description:
            "Стратегии владения цифровыми активами, включая DeFi. Взаимодействие с провайдерами кастоди и биржами. Налоговые и регуляторные аспекты.",
        },
        {
          title: "Financial Advisory",
          description:
            "Доступ к частным банкам и независимым управляющим. Построение портфелей и инвестиционных мандатов UHNW/HNW. Долгосрочное сопровождение капитала.",
        },
        {
          title: "Legal Consulting & Asset Situations",
          description:
            "Работа с банками, страховыми и регуляторами. Ситуации ограниченного доступа к активам и досудебное урегулирование. Legal opinion — по запросу, после анализа контекста (налоги, цифровые активы / DeFi, недвижимость, наследование).",
        },
        {
          title: "Fiduciary Services & Governance Support",
          description:
            "Фидуциарные договорённости, nominee-структуры и секретариальные функции — там и тогда, где это допустимо и оправдано. Цель — конфиденциальность, управляемость, преемственность.",
        },
      ],
    },
    approach: {
      title: "Подход",
      description:
        "Работа строится индивидуально. Без публичных кейсов. Без заранее заданных пакетов. Стоимость обсуждается после понимания ситуации.",
    },
    contact: {
      title: "Контакт",
      description:
        "Контакт устанавливается через профессиональную рекомендацию или прямой запрос.",
      email: "contact@statikson.com",
    },
    legal: {
      title: "Юридическая информация",
      description:
        "Statikson Srl — зарегистрированный офис в Румынии. Private advisory office — в Лугано, Швейцария. Сопровождение осуществляется командой швейцарского офиса.",
    },
  },
  de: {
    nav: {
      services: "Dienstleistungen",
      approach: "Ansatz",
      contact: "Kontakt",
    },
    hero: {
      title: "Statikson",
      subtitle: "Private Advisory Office in Lugano, Schweiz",
      description:
        "Begleitung bei Fragen der grenzüberschreitenden Strukturierung, internationalen Besteuerung, digitalen Vermögenswerte, Bankbeziehungen und Transaktionen. Die Arbeit erfolgt diskret und fallbezogen.",
    },
    contexts: {
      title: "Kontexte:",
      items: [
        "Technologie-Gründer und Gesellschafterstrukturen",
        "Private Investoren und Family Offices",
        "Plattformen im Bereich digitaler Vermögenswerte",
        "Vermögens-, Erbschafts- und Regulierungsfragen",
      ],
    },
    services: {
      title: "Beratungsbereiche",
      items: [
        {
          title: "Business & Eigentumsstrukturen",
          description:
            "Equity-Struktur, Governance und Vorbereitung auf Transaktionen (inkl. M&A).",
        },
        {
          title: "International Tax Consulting",
          description:
            "Grenzüberschreitende Steuerpositionierung für private und juristische Personen.",
        },
        {
          title: "Crypto Advisory",
          description:
            "Strukturen für digitale Vermögenswerte (inkl. DeFi). Custody und Austauschbeziehungen. Steuerliche und regulatorische Aspekte.",
        },
        {
          title: "Financial Advisory",
          description:
            "Zugang zu Private Banking und unabhängigen Vermögensverwaltern. Portfolio- und Mandatsgestaltung (UHNW/HNW).",
        },
        {
          title: "Legal Consulting & Vermögenssituationen",
          description:
            "Bank- und Regulierungsbegleitung. Freigabe eingeschränkter Vermögenswerte. Legal Opinions — nur auf Anfrage, nach Dokumenten- und Kontextprüfung (Steuern, digitale Vermögenswerte, Immobilien, Nachfolge).",
        },
        {
          title: "Fiduciary Services & Governance",
          description:
            "Nominee-Strukturen und Sekretariatsfunktionen (wo rechtlich zulässig).",
        },
      ],
    },
    approach: {
      title: "Ansatz",
      description:
        "Keine Standardpakete. Honorare nach individueller Situationsbewertung.",
    },
    contact: {
      title: "Kontakt",
      description:
        "Kontakt erfolgt über Empfehlung oder direkte Anfrage.",
      email: "contact@statikson.com",
    },
    legal: {
      title: "Rechtlicher Hinweis",
      description:
        "Statikson Srl — eingetragen in Rumänien. Private advisory office in Lugano, Schweiz.",
    },
  },
};

const languageNames = {
  en: "EN",
  ru: "RU",
  de: "DE",
};

const serviceIcons = [
  Building2,
  Calculator,
  Coins,
  TrendingUp,
  FileText,
  Lock,
];

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
  src="/statikson_logo.svg"
  alt="Statikson"
  className="h-8"
/>

            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {t.nav.approach}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {t.nav.contact}
              </button>

              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>{languageNames[language]}</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("ru")}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    Русский
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("de")}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    Deutsch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>{languageNames[language]}</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("ru")}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    Русский
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("de")}
                    className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    Deutsch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <nav className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("approach")}
                className="block w-full text-left py-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {t.nav.approach}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative py-32 sm:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden">

  <div className="absolute inset-0 z-0">
    <ImageWithFallback
      src="/statikson_bg.png"
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h1 className="text-5xl sm:text-6xl lg:text-7xl text-zinc-900 dark:text-zinc-100 mb-6">
      {t.hero.title}
    </h1>
    <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 mb-12">
      {t.hero.subtitle}
    </p>
    <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto">
      {t.hero.description}
    </p>
  </div>

</section>

        {/* Contexts Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-100 dark:bg-zinc-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-zinc-900 dark:text-zinc-100 mb-8">
              {t.contexts.title}
            </h2>
            <ul className="space-y-3">
              {t.contexts.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-zinc-400 dark:text-zinc-500 mr-3">
                    –
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-zinc-900 dark:text-zinc-100 mb-12 text-center">
              {t.services.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.items.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <div
                    key={index}
                    className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-zinc-600 dark:text-zinc-400 mb-4" />
                    <h3 className="text-zinc-900 dark:text-zinc-100 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section
          id="approach"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-100 dark:bg-zinc-900/50"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-zinc-900 dark:text-zinc-100 mb-12 text-center">
              {t.approach.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-center text-lg">
                  {t.approach.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Legal Section */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl text-zinc-900 dark:text-zinc-100 mb-12 text-center">
              {t.contact.title}
            </h2>
            <div className="text-center mb-12">
              <p className="text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed max-w-2xl mx-auto text-lg">
                {t.contact.description}
              </p>
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-block text-xl text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors border-b border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500"
              >
                {t.contact.email}
              </a>
            </div>

            {/* Legal Note */}
            <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-zinc-900 dark:text-zinc-100 mb-4 text-center">
                {t.legal.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mx-auto">
                {t.legal.description}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-zinc-500 dark:text-zinc-500">
              © 2025 Statikson Srl. Copyright Licensed.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}