export const languages = {
    en: "English",
    es: "Español",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export type Mark = "live" | "included" | "excluded";

type RegisterItem = {
    name: string;
    what: string;
    url: string;
    domain: string;
    kind: "own" | "client";
    // Hidden items are kept ready but not shown until the project is live.
    hidden?: boolean;
    // Slug of the case study at /work/<case>, when there is one.
    case?: CaseSlug;
};

export type CaseSlug = "gmg" | "bohio";

// A case study page (/work/<slug>). Every statement must be verifiable: no metrics,
// quotes or results that did not happen.
type CaseStudy = {
    slug: CaseSlug;
    kind: "own" | "client";
    name: string;
    // <title> (before "— Invntio") and meta description.
    title: string;
    description: string;
    outcome: string;
    lede: string;
    url: string;
    domain: string;
    industry: string;
    built: string;
    // Timeline for finished client work, status for a product still growing.
    when: { label: "timeline" | "status"; text: string };
    challenge: string[];
    items: string[];
    stack: string;
    flow: { title: string; lede: string; steps: { name: string; body: string }[] };
    results: { title: string; body: string }[];
    // Last content change, for structured data.
    updated: string;
};

const en = {
    meta: {
        title: "Invntio — Custom software, apps and websites",
        description:
            "Custom software, mobile apps, websites, automation and integrations for businesses in the US and Latin America. Built, hosted and maintained by one studio.",
        ogAlt: "Invntio. Your ideas, shipped and running. Web and mobile apps, websites, automation and hosting.",
    },
    nav: {
        services: "Services",
        work: "Work",
        process: "Process",
        contact: "Contact",
        cta: "Start a project",
        skip: "Skip to content",
        home: "Invntio home",
        language: "Language",
        menu: "Menu",
        theme: "Switch between light and dark theme",
    },
    hero: {
        title: "Your ideas, shipped and running.",
        lede: "We design, build and run the software behind them: web and mobile apps, websites, automation and hosting. From the first call through years of maintenance, handled directly by the engineer who builds it.",
        cta: "Start a project",
        orEmail: "or write to",
        location: "Pennsylvania, US · Serving clients in the Americas",
    },
    register: {
        title: "Live now",
        caption: "Products built and operated by Invntio",
        cols: { name: "Name", what: "What it is", status: "Status" },
        ownProduct: "Own product",
        client: "Client",
        live: "Live",
        checked: "Responded {status} at the last deploy, {date}",
        down: "Did not respond at the last deploy, {date}",
        items: <RegisterItem[]>[
            {
                name: "Global Merchants Group",
                what: "B2B wholesale catalog",
                url: "https://www.theglobalmerchantsgroup.com/en/default-channel",
                domain: "theglobalmerchantsgroup.com",
                kind: "client",
                case: "gmg",
            },
            { name: "Beavo", what: "Private habit tracker for iPhone", url: "https://beavo.me", domain: "beavo.me", kind: "own" },
            { name: "Axen", what: "Training app for iOS", url: "https://getaxen.com", domain: "getaxen.com", kind: "own" },
            { name: "Bohío", what: "Condominium management SaaS", url: "https://bohio.app", domain: "bohio.app", kind: "own", case: "bohio" },
            // Client sites on the Invntio platform. Keep hidden until each has its own live domain
            // (see docs/tasks/launch-client-sites.md). url/domain are the planned values.
            { name: "OBJURI", what: "Legal-research observatory: congresses, news, articles and alliances", url: "https://objuri.com", domain: "objuri.com", kind: "client", hidden: true },
            { name: "AJMG", what: "Guatemala's association of judges and magistrates", url: "", domain: "", kind: "client", hidden: true },
        ],
    },
    services: {
        title: "What we build",
        lede: "Seven services, each scoped in a written proposal before any work or payment.",
        stackLabel: "Typical stack",
        items: [
            {
                id: "software",
                name: "Custom software development",
                body: "Web applications, internal tools and SaaS products, built around how your business actually works.",
                stack: "TypeScript · Next.js · Node.js · PostgreSQL",
            },
            {
                id: "mobile",
                name: "Mobile apps",
                body: "Native iOS apps in SwiftUI, or cross-platform apps in Flutter or React Native, depending on what the project needs, from first build to App Store and Google Play release.",
                stack: "SwiftUI · Flutter · React Native",
            },
            {
                id: "web",
                name: "Website design & development",
                body: "Institutional sites, landing pages, catalogs and blogs, with a content manager your team can edit on its own and technical SEO set up from day one.",
                stack: "Astro · Next.js · Payload CMS",
            },
            {
                id: "integration",
                name: "Systems integration & APIs",
                body: "APIs and back-end services that connect your systems (ERP, CRM, payments, e-commerce), so data moves between them without manual copying.",
                stack: "NestJS · Quarkus · REST · GraphQL · Webhooks",
            },
            {
                id: "automation",
                name: "Process automation",
                body: "Workflows and AI agents that take repetitive work off your team: lead intake, invoicing, reports, notifications and follow-ups.",
                stack: "n8n · Make · Hermes Agent · OpenClaw · Claude API",
            },
            {
                id: "consulting",
                name: "Technical consulting",
                body: "Architecture reviews, DevOps and DevSecOps, CI/CD setup, and security reviews for teams that already run software.",
                stack: "Docker · GitHub Actions · AWS · Snyk · SonarCloud · tfsec",
            },
            {
                id: "hosting",
                name: "Hosting & maintenance",
                body: "Monthly or annual plans that keep your site or app online, backed up, secure and up to date, with optional content management.",
                stack: "Cloudflare · Vercel · AWS",
            },
        ],
    },
    plans: {
        title: "Hosting & maintenance plan: what's included",
        lede: "Applies to any site or app we host and maintain for you, whatever it was built with. Billed monthly or annually; cancel before the next renewal.",
        link: "What's included",
        includedTitle: "Included",
        excludedTitle: "Not included, quoted separately",
        included: [
            "Hosting and SSL certificate",
            "Regular backups",
            "Security and dependency updates",
            "Uptime monitoring",
            "Fixes for bugs in code we delivered",
            "Small content changes, as listed in your plan",
            "Quick how-to help for your team",
            "Response within 2 business days",
        ],
        excluded: [
            "New features, pages or integrations",
            "Redesigns",
            "Issues caused by third parties or changes made by others",
            "After-hours or emergency support",
            "Ongoing SEO, content writing and marketing",
            "Extended training",
        ],
        note: "Work outside the plan is quoted separately or billed hourly from a prepaid block.",
    },
    process: {
        title: "How it works",
        lede: "Four stages, the same for every project.",
        steps: [
            {
                name: "Project Diagnostic",
                body: "A paid 30-minute session on the problem, who will use the result and your timeline, followed by a written plan. The fee is credited toward the project.",
            },
            {
                name: "Proposal & upfront payment",
                body: "You get a written proposal with scope, price, timeline and payment schedule. Work starts once it is accepted and the first payment is made. Small projects such as websites are paid in full upfront.",
            },
            {
                name: "Build & review",
                body: "We build in stages and share previews. The revisions included are listed in your proposal.",
            },
            {
                name: "Launch, handoff & support",
                body: "We launch, hand over access and documentation, train your team to use it, and keep things running on a maintenance plan if you choose one.",
            },
        ],
        payments: "Payments are processed securely by Stripe.",
    },
    about: {
        title: "You work with the person who builds it",
        body: [
            "Invntio is a small, independent software studio. There are no account managers or subcontracted handoffs: the engineer you talk to is the one who designs, writes, deploys and maintains your project.",
            "Beyond client work, we build and run products of our own, so the same standards for quality, security and uptime apply to everything we ship.",
        ],
        points: [
            { title: "Quality and security first", body: "Code review, automated tests where they matter, and security updates as part of maintenance." },
            { title: "Scope before payment", body: "Every engagement starts with a written proposal. No surprise invoices." },
            { title: "Plain-language terms", body: "Our terms, refund and privacy policies are short and readable." },
        ],
    },
    contact: {
        title: "Start a project",
        lede: "Two ways to start. Pick the one that fits.",
        diagnostic: {
            title: "Project Diagnostic",
            body: "30 minutes on your project, then a written plan with scope, risks, timeline and price range. USD\u00a095, credited if you hire us within 60 days.",
            cta: "Book a diagnostic",
            newTab: "(opens Cal.com in a new tab)",
            guarantee: "Not useful? Full refund within 7 days.",
            policy: "Refund terms",
            anchor: "#4-project-diagnostic",
        },
        alt: {
            title: "Prefer to write first?",
            body: "Free, for quick questions. We reply within 2 business days.",
        },
        email: "Email",
        phone: "Phone",
        location: "Location",
        form: {
            name: "Name",
            email: "Email",
            company: "Company",
            optional: "optional",
            service: "What do you need?",
            servicePlaceholder: "Choose a service",
            other: "Something else",
            message: "Message",
            messagePlaceholder: "What are you building, and by when?",
            consentPre: "By sending this form you agree to our",
            consentLink: "Privacy Policy",
            captcha: "Please complete the captcha check before sending.",
            submit: "Send message",
            sending: "Sending…",
            success: "Thanks — your message was sent. We'll reply within 2 business days.",
            error: "Your message couldn't be sent. Please try again, or email us directly at",
            subject: "New inquiry from invntio.com",
        },
    },
    footer: {
        tagline: "Unleash your business potential",
        legal: "Legal",
        site: "Site",
        contact: "Contact",
        terms: "Terms of Service",
        refunds: "Refund & Cancellation Policy",
        privacy: "Privacy Policy",
        rights: "All rights reserved.",
        deployed: "Deployed",
        status: "System status",
    },
    consent: {
        label: "Cookie preferences",
        body: "We use analytics cookies (PostHog) to understand how this site is used. They are only set if you accept.",
        more: "Privacy Policy",
        accept: "Accept",
        decline: "Decline",
        settings: "Cookie settings",
    },
    legal: {
        updated: "Last updated",
        back: "Back to home",
        onThisPage: "On this page",
        questions: "Questions about this policy? Write to",
    },
    work: {
        title: "Products and clients",
        lede: "Everything we have built and still run: our own products, and work for clients.",
        own: "Our products",
        clients: "Client work",
        cases: "Case studies",
    },
    cases: {
        caseStudy: "Case study",
        back: "Work",
        industry: "Industry",
        built: "What we built",
        timeline: "Timeline",
        status: "Status",
        site: "Live site",
        challenge: "The challenge",
        stackLabel: "Stack",
        result: "The result",
        ctaTitle: "Want something similar?",
        ctaBody: "Tell us what you need. We reply within 2 business days, and every project starts with a written proposal.",
        cta: "Start a project",
        other: "Another case study",
        read: "Read the case study",
        items: <CaseStudy[]>[
            {
                slug: "gmg",
                kind: "client",
                name: "Global Merchants Group",
                title: "Global Merchants Group case study",
                description:
                    "How Invntio designed, built and launched a wholesale website and self-managed product catalog for Global Merchants Group, live on its own domain in one week.",
                outcome: "A wholesale website and product catalog, live on its own domain in one week.",
                lede: "Global Merchants Group (GMG) sells inspected lots of smartphones and mobile devices in bulk to retailers, distributors and enterprise buyers worldwide. We designed, built and launched the site it sells from.",
                url: "https://theglobalmerchantsgroup.com",
                domain: "theglobalmerchantsgroup.com",
                industry: "B2B wholesale of mobile devices",
                built: "Website and product catalog with a CMS",
                when: { label: "timeline", text: "One week, July 21–27, 2026" },
                challenge: [
                    "GMG needed a website that makes its wholesale offer clear at a glance (inspected lots, bulk supply, worldwide shipping) and gives serious buyers a direct way to ask for a quote.",
                    "The product list had to stay current, and the team needed to update it on its own, without calling a developer for every change.",
                ],
                items: [
                    "A website built around the wholesale offer: inspected lots, bulk supply and worldwide shipping.",
                    "An online product catalog the GMG team updates on its own through a CMS, with no developer needed.",
                    "Clear paths for buyers to request a quote or contact sales.",
                    "Privacy Policy and Terms pages.",
                    "SEO basics in place from launch.",
                ],
                stack: "Next.js storefront · Sanity CMS · Vercel",
                flow: {
                    title: "How it works",
                    lede: "From a catalog update to a sales conversation, with no developer in the loop.",
                    steps: [
                        { name: "The GMG team updates the catalog", body: "Adds or edits products in the CMS." },
                        { name: "The site shows it", body: "Buyers see the current products and lots." },
                        { name: "A buyer requests a quote", body: "Or contacts sales directly from the site." },
                        { name: "GMG sales follows up", body: "The request reaches the sales team, who take it from there." },
                    ],
                },
                results: [
                    { title: "Live in one week", body: "Designed, built and launched between July 21 and July 27, 2026, on GMG's own domain." },
                    { title: "A catalog the team runs", body: "GMG adds and edits products in the CMS on its own, without a developer." },
                    { title: "A direct line to sales", body: "Buyers can request a quote or contact sales from the site." },
                ],
                updated: "2026-10-03",
            },
            {
                slug: "bohio",
                kind: "own",
                name: "Bohío",
                title: "Bohío case study",
                description:
                    "Bohío is Invntio's condominium management software: payments, maintenance issues and resident communication in one place. Now in early access.",
                outcome: "Condominium payments, maintenance and notices in one place, instead of a WhatsApp group.",
                lede: "Bohío is our own product, built for condominium administrators. It brings payments, maintenance issues and resident communication together, so administrators stop chasing people over WhatsApp.",
                url: "https://bohio.app",
                domain: "bohio.app",
                industry: "Condominium and property management",
                built: "Admin dashboard, resident app, payments backend and website",
                when: { label: "status", text: "Early access with its first communities" },
                challenge: [
                    "Many condominiums are run from group chats, spreadsheets and screenshots of bank transfers. Administrators chase residents for dues, lose track of repair requests and repeat the same notice in several places.",
                    "Residents, in turn, are not sure what they owe or whether anyone saw the problem they reported.",
                ],
                items: [
                    "A web dashboard where administrators manage dues, payments, maintenance issues and announcements.",
                    "A mobile app where residents see what they owe, upload proof of their bank transfers, report issues and get notices.",
                    "A billing and payments backend that ties every payment to the right invoice.",
                    "The marketing website at bohio.app, where communities request early access.",
                ],
                stack: "Flutter · NestJS · Astro on Cloudflare",
                flow: {
                    title: "How it works",
                    lede: "Administrators and residents work from the same record, not from a chat thread.",
                    steps: [
                        { name: "The administrator posts a charge or notice", body: "Once, from the web dashboard, for the whole community." },
                        { name: "Residents get it in the app", body: "They see what they owe and what is new." },
                        { name: "Residents pay or report an issue", body: "Proof of a bank transfer or a maintenance request, from their phone." },
                        { name: "The administrator sees where things stand", body: "Payments and open issues update in the dashboard." },
                    ],
                },
                results: [
                    { title: "In early access", body: "Bohío is running with its first communities. New ones can request access at bohio.app." },
                    { title: "Built and run end to end", body: "Dashboard, resident app, payments backend and website, all designed, built and operated by Invntio." },
                    { title: "One shared record", body: "Payments, maintenance issues and notices live in one system that administrators and residents both use." },
                ],
                updated: "2026-10-03",
            },
        ],
    },
    notFound: {
        title: "Page not found",
        heading: "This page isn't live",
        status: "Not live",
        body: "The page you're looking for doesn't exist or has moved.",
        cta: "Go to the home page",
    },
};

type Dict = typeof en;

const es: Dict = {
    meta: {
        title: "Invntio — Software a medida, apps y sitios web",
        description:
            "Software a medida, apps móviles, sitios web, automatización e integraciones para empresas en Latinoamérica y EE. UU. Lo construimos, alojamos y mantenemos.",
        ogAlt: "Invntio. Tus ideas, hechas realidad. Apps web y móviles, sitios web, automatización y hosting.",
    },
    nav: {
        services: "Servicios",
        work: "Trabajo",
        process: "Proceso",
        contact: "Contacto",
        cta: "Empezar un proyecto",
        skip: "Saltar al contenido",
        home: "Inicio de Invntio",
        language: "Idioma",
        menu: "Menú",
        theme: "Cambiar entre tema claro y oscuro",
    },
    hero: {
        title: "Tus ideas, hechas realidad.",
        lede: "Diseñamos, construimos y operamos el software que las hace posibles: apps web y móviles, sitios web, automatizaciones y hosting. Desde la primera llamada hasta años de mantenimiento, con trato directo con el ingeniero que lo construye.",
        cta: "Empezar un proyecto",
        orEmail: "o escribe a",
        location: "Pensilvania, EE. UU. · Clientes en toda América",
    },
    register: {
        title: "En línea hoy",
        caption: "Productos construidos y operados por Invntio",
        cols: { name: "Nombre", what: "Qué es", status: "Estado" },
        ownProduct: "Producto propio",
        client: "Cliente",
        live: "En línea",
        checked: "Respondió {status} en el último despliegue, {date}",
        down: "No respondió en el último despliegue, {date}",
        items: [
            {
                name: "Global Merchants Group",
                what: "Catálogo mayorista B2B",
                url: "https://www.theglobalmerchantsgroup.com/en/default-channel",
                domain: "theglobalmerchantsgroup.com",
                kind: "client",
                case: "gmg",
            },
            { name: "Beavo", what: "Habit tracker privado para iPhone", url: "https://beavo.me", domain: "beavo.me", kind: "own" },
            { name: "Axen", what: "App de entrenamiento para iOS", url: "https://getaxen.com", domain: "getaxen.com", kind: "own" },
            { name: "Bohío", what: "SaaS de administración de condominios", url: "https://bohio.app", domain: "bohio.app", kind: "own", case: "bohio" },
            { name: "OBJURI", what: "Observatorio de ciencias jurídicas: congresos, noticias, artículos y alianzas", url: "https://objuri.com", domain: "objuri.com", kind: "client", hidden: true },
            { name: "AJMG", what: "Asociación de Jueces y Magistrados de Guatemala", url: "", domain: "", kind: "client", hidden: true },
        ],
    },
    services: {
        title: "Qué construimos",
        lede: "Siete servicios, cada uno definido en una propuesta escrita antes de cualquier trabajo o pago.",
        stackLabel: "Tecnologías habituales",
        items: [
            {
                id: "software",
                name: "Desarrollo de software a medida",
                body: "Aplicaciones web, herramientas internas y productos SaaS, construidos según cómo funciona realmente tu negocio.",
                stack: "TypeScript · Next.js · Node.js · PostgreSQL",
            },
            {
                id: "mobile",
                name: "Apps móviles",
                body: "Apps nativas de iOS en SwiftUI, o multiplataforma en Flutter o React Native según lo que necesite el proyecto, desde la primera versión hasta su publicación en App Store y Google Play.",
                stack: "SwiftUI · Flutter · React Native",
            },
            {
                id: "web",
                name: "Diseño y desarrollo de sitios web",
                body: "Sitios institucionales, landing pages, catálogos y blogs, con un gestor de contenido que tu equipo puede editar por su cuenta y SEO técnico configurado desde el primer día.",
                stack: "Astro · Next.js · Payload CMS",
            },
            {
                id: "integration",
                name: "Integración de sistemas y APIs",
                body: "APIs y servicios back-end que conectan tus sistemas (ERP, CRM, pagos, e-commerce) para que los datos fluyan entre ellos sin copiarlos a mano.",
                stack: "NestJS · Quarkus · REST · GraphQL · Webhooks",
            },
            {
                id: "automation",
                name: "Automatización de procesos",
                body: "Flujos de trabajo y agentes de IA que le quitan trabajo repetitivo a tu equipo: captación de clientes, facturación, reportes, notificaciones y seguimientos.",
                stack: "n8n · Make · Hermes Agent · OpenClaw · Claude API",
            },
            {
                id: "consulting",
                name: "Consultoría técnica",
                body: "Revisión de arquitectura, DevOps y DevSecOps, configuración de CI/CD y revisiones de seguridad para equipos que ya operan software.",
                stack: "Docker · GitHub Actions · AWS · Snyk · SonarCloud · tfsec",
            },
            {
                id: "hosting",
                name: "Hosting y mantenimiento",
                body: "Planes mensuales o anuales que mantienen tu sitio o app en línea, respaldado, seguro y actualizado, con gestión de contenido opcional.",
                stack: "Cloudflare · Vercel · AWS",
            },
        ],
    },
    plans: {
        title: "Plan de hosting y mantenimiento: qué incluye",
        lede: "Aplica a cualquier sitio o app que alojemos y mantengamos por ti, sin importar con qué se construyó. Facturación mensual o anual; se cancela antes de la próxima renovación.",
        link: "Qué incluye",
        includedTitle: "Incluido",
        excludedTitle: "No incluido, se cotiza aparte",
        included: [
            "Hosting y certificado SSL",
            "Copias de seguridad periódicas",
            "Actualizaciones de seguridad y dependencias",
            "Monitoreo de disponibilidad",
            "Corrección de errores en el código que entregamos",
            "Cambios pequeños de contenido, según tu plan",
            "Ayuda puntual para que tu equipo use el sistema",
            "Respuesta en 2 días hábiles",
        ],
        excluded: [
            "Funcionalidades, páginas o integraciones nuevas",
            "Rediseños",
            "Problemas causados por terceros o por cambios hechos por otros",
            "Soporte fuera de horario o de emergencia",
            "SEO continuo, redacción de contenido y marketing",
            "Capacitación extensa",
        ],
        note: "El trabajo fuera del plan se cotiza aparte o se factura por horas desde un bloque prepagado.",
    },
    process: {
        title: "Cómo trabajamos",
        lede: "Cuatro etapas, iguales para cada proyecto.",
        steps: [
            {
                name: "Diagnóstico del proyecto",
                body: "Una sesión pagada de 30 minutos sobre el problema, quién usará el resultado y tus plazos, y después un plan escrito. El pago se descuenta del proyecto.",
            },
            {
                name: "Propuesta y pago inicial",
                body: "Recibes una propuesta escrita con alcance, precio, plazos y calendario de pagos. El trabajo empieza cuando la aceptas y se realiza el primer pago. Los proyectos pequeños, como sitios web, se pagan por completo por adelantado.",
            },
            {
                name: "Construcción y revisión",
                body: "Construimos por etapas y compartimos avances. Las revisiones incluidas se detallan en tu propuesta.",
            },
            {
                name: "Lanzamiento, entrega y soporte",
                body: "Lanzamos, entregamos accesos y documentación, capacitamos a tu equipo para usarlo y lo mantenemos funcionando con un plan de mantenimiento si lo eliges.",
            },
        ],
        payments: "Los pagos se procesan de forma segura con Stripe.",
    },
    about: {
        title: "Trabajas con quien lo construye",
        body: [
            "Invntio es un estudio de software pequeño e independiente. No hay account managers ni subcontrataciones: el ingeniero con quien hablas es quien diseña, programa, despliega y mantiene tu proyecto.",
            "Además del trabajo para clientes, construimos y operamos productos propios, así que los mismos estándares de calidad, seguridad y disponibilidad aplican a todo lo que entregamos.",
        ],
        points: [
            { title: "Calidad y seguridad primero", body: "Revisión de código, pruebas automatizadas donde importan y actualizaciones de seguridad como parte del mantenimiento." },
            { title: "Alcance antes del pago", body: "Todo trabajo empieza con una propuesta escrita. Sin facturas sorpresa." },
            { title: "Términos en lenguaje claro", body: "Nuestros términos y políticas de reembolso y privacidad son cortos y legibles." },
        ],
    },
    contact: {
        title: "Empezar un proyecto",
        lede: "Dos formas de empezar. Elige la que te sirva.",
        diagnostic: {
            title: "Diagnóstico del proyecto",
            body: "30 minutos sobre tu proyecto y, después, un plan escrito con alcance, riesgos, plazos y rango de precio. USD\u00a095, que se descuentan si nos contratas en los 60 días siguientes.",
            cta: "Reservar diagnóstico",
            newTab: "(abre Cal.com en una pestaña nueva)",
            guarantee: "¿No te sirvió? Reembolso completo en 7 días.",
            policy: "Condiciones de reembolso",
            anchor: "#4-diagnóstico-del-proyecto",
        },
        alt: {
            title: "¿Prefieres escribir primero?",
            body: "Sin costo, para preguntas rápidas. Respondemos en 2 días hábiles.",
        },
        email: "Correo",
        phone: "Teléfono",
        location: "Ubicación",
        form: {
            name: "Nombre",
            email: "Correo",
            company: "Empresa",
            optional: "opcional",
            service: "¿Qué necesitas?",
            servicePlaceholder: "Elige un servicio",
            other: "Otra cosa",
            message: "Mensaje",
            messagePlaceholder: "¿Qué quieres construir y para cuándo?",
            consentPre: "Al enviar este formulario aceptas nuestra",
            consentLink: "Política de Privacidad",
            captcha: "Completa la verificación del captcha antes de enviar.",
            submit: "Enviar mensaje",
            sending: "Enviando…",
            success: "Gracias, tu mensaje fue enviado. Te respondemos en 2 días hábiles.",
            error: "No se pudo enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente a",
            subject: "Nueva consulta desde invntio.com",
        },
    },
    footer: {
        tagline: "Desata el potencial de tu negocio",
        legal: "Legal",
        site: "Sitio",
        contact: "Contacto",
        terms: "Términos del Servicio",
        refunds: "Política de Reembolsos y Cancelaciones",
        privacy: "Política de Privacidad",
        rights: "Todos los derechos reservados.",
        deployed: "Publicado",
        status: "Estado del sistema",
    },
    consent: {
        label: "Preferencias de cookies",
        body: "Usamos cookies de analítica (PostHog) para entender cómo se usa este sitio. Solo se activan si las aceptas.",
        more: "Política de Privacidad",
        accept: "Aceptar",
        decline: "Rechazar",
        settings: "Configurar cookies",
    },
    legal: {
        updated: "Última actualización",
        back: "Volver al inicio",
        onThisPage: "En esta página",
        questions: "¿Preguntas sobre esta política? Escribe a",
    },
    work: {
        title: "Productos y clientes",
        lede: "Todo lo que hemos construido y seguimos operando: nuestros productos y el trabajo para clientes.",
        own: "Nuestros productos",
        clients: "Trabajo para clientes",
        cases: "Casos de estudio",
    },
    cases: {
        caseStudy: "Caso de estudio",
        back: "Trabajo",
        industry: "Sector",
        built: "Qué construimos",
        timeline: "Plazo",
        status: "Estado",
        site: "Sitio en línea",
        challenge: "El reto",
        stackLabel: "Tecnologías",
        result: "El resultado",
        ctaTitle: "¿Quieres algo similar?",
        ctaBody: "Cuéntanos qué necesitas. Respondemos en 2 días hábiles, y todo proyecto empieza con una propuesta escrita.",
        cta: "Empezar un proyecto",
        other: "Otro caso de estudio",
        read: "Leer el caso de estudio",
        items: [
            {
                slug: "gmg",
                kind: "client",
                name: "Global Merchants Group",
                title: "Caso de estudio: Global Merchants Group",
                description:
                    "Cómo Invntio diseñó, construyó y lanzó el sitio mayorista y el catálogo autogestionado de Global Merchants Group, en línea en su propio dominio en una semana.",
                outcome: "Un sitio mayorista con catálogo de productos, en línea en su propio dominio en una semana.",
                lede: "Global Merchants Group (GMG) vende lotes inspeccionados de smartphones y dispositivos móviles al por mayor a minoristas, distribuidores y compradores corporativos de todo el mundo. Diseñamos, construimos y lanzamos el sitio desde el que vende.",
                url: "https://theglobalmerchantsgroup.com",
                domain: "theglobalmerchantsgroup.com",
                industry: "Venta mayorista B2B de dispositivos móviles",
                built: "Sitio web y catálogo de productos con CMS",
                when: { label: "timeline", text: "Una semana, del 21 al 27 de julio de 2026" },
                challenge: [
                    "GMG necesitaba un sitio que dejara clara su oferta mayorista de un vistazo (lotes inspeccionados, suministro por volumen, envíos a todo el mundo) y que diera a los compradores serios una forma directa de pedir una cotización.",
                    "El catálogo tenía que mantenerse al día, y el equipo necesitaba actualizarlo por su cuenta, sin llamar a un programador para cada cambio.",
                ],
                items: [
                    "Un sitio pensado para la oferta mayorista: lotes inspeccionados, suministro por volumen y envíos a todo el mundo.",
                    "Un catálogo de productos en línea que el equipo de GMG actualiza por su cuenta desde un CMS, sin necesitar a un programador.",
                    "Caminos claros para que los compradores pidan una cotización o contacten a ventas.",
                    "Páginas de Política de Privacidad y Términos.",
                    "SEO básico configurado desde el lanzamiento.",
                ],
                stack: "Tienda en Next.js · Sanity CMS · Vercel",
                flow: {
                    title: "Cómo funciona",
                    lede: "De una actualización del catálogo a una conversación de ventas, sin un programador de por medio.",
                    steps: [
                        { name: "El equipo de GMG actualiza el catálogo", body: "Agrega o edita productos en el CMS." },
                        { name: "El sitio lo muestra", body: "Los compradores ven los productos y lotes vigentes." },
                        { name: "Un comprador pide una cotización", body: "O contacta a ventas directamente desde el sitio." },
                        { name: "Ventas de GMG da seguimiento", body: "La solicitud llega al equipo de ventas, que la atiende desde ahí." },
                    ],
                },
                results: [
                    { title: "En línea en una semana", body: "Diseñado, construido y lanzado entre el 21 y el 27 de julio de 2026, en el dominio propio de GMG." },
                    { title: "Un catálogo que maneja el equipo", body: "GMG agrega y edita productos en el CMS por su cuenta, sin un programador." },
                    { title: "Una línea directa con ventas", body: "Los compradores pueden pedir una cotización o contactar a ventas desde el sitio." },
                ],
                updated: "2026-10-03",
            },
            {
                slug: "bohio",
                kind: "own",
                name: "Bohío",
                title: "Caso de estudio: Bohío",
                description:
                    "Bohío es el software de administración de condominios de Invntio: pagos, incidencias de mantenimiento y comunicación con residentes en un solo lugar. En acceso anticipado.",
                outcome: "Pagos, mantenimiento y avisos del condominio en un solo lugar, en vez de un grupo de WhatsApp.",
                lede: "Bohío es un producto propio, pensado para administradores de condominios. Reúne pagos, incidencias de mantenimiento y comunicación con los residentes, para que la administración deje de perseguir a la gente por WhatsApp.",
                url: "https://bohio.app",
                domain: "bohio.app",
                industry: "Administración de condominios y propiedades",
                built: "Panel de administración, app para residentes, backend de pagos y sitio web",
                when: { label: "status", text: "Acceso anticipado con sus primeras comunidades" },
                challenge: [
                    "Muchos condominios se administran desde chats de grupo, hojas de cálculo y capturas de transferencias bancarias. La administración persigue a los residentes por las cuotas, pierde el hilo de las reparaciones y repite el mismo aviso en varios lugares.",
                    "Los residentes, por su parte, no tienen claro cuánto deben ni si alguien vio el problema que reportaron.",
                ],
                items: [
                    "Un panel web donde la administración gestiona cuotas, pagos, incidencias de mantenimiento y avisos.",
                    "Una app móvil donde los residentes ven cuánto deben, suben el comprobante de su transferencia, reportan incidencias y reciben avisos.",
                    "Un backend de facturación y pagos que vincula cada pago con su factura.",
                    "El sitio web bohio.app, donde las comunidades solicitan acceso anticipado.",
                ],
                stack: "Flutter · NestJS · Astro en Cloudflare",
                flow: {
                    title: "Cómo funciona",
                    lede: "Administración y residentes trabajan sobre el mismo registro, no sobre un hilo de chat.",
                    steps: [
                        { name: "La administración publica un cargo o aviso", body: "Una sola vez, desde el panel web, para toda la comunidad." },
                        { name: "Los residentes lo reciben en la app", body: "Ven cuánto deben y qué hay de nuevo." },
                        { name: "Los residentes pagan o reportan", body: "El comprobante de una transferencia o una solicitud de mantenimiento, desde el teléfono." },
                        { name: "La administración ve cómo va todo", body: "Los pagos y las incidencias abiertas se actualizan en el panel." },
                    ],
                },
                results: [
                    { title: "En acceso anticipado", body: "Bohío funciona con sus primeras comunidades. Otras pueden solicitar acceso en bohio.app." },
                    { title: "Construido y operado de punta a punta", body: "Panel, app para residentes, backend de pagos y sitio web, todo diseñado, construido y operado por Invntio." },
                    { title: "Un registro compartido", body: "Pagos, incidencias de mantenimiento y avisos viven en un solo sistema que usan tanto la administración como los residentes." },
                ],
                updated: "2026-10-03",
            },
        ],
    },
    notFound: {
        title: "Página no encontrada",
        heading: "Esta página no está en línea",
        status: "Fuera de línea",
        body: "La página que buscas no existe o cambió de lugar.",
        cta: "Ir a la página de inicio",
    },
};

export const ui: Record<Lang, Dict> = { en, es };

export function useTranslations(lang: Lang) {
    return ui[lang] ?? ui[defaultLang];
}

/** Path to the same page in another language. `/terms` <-> `/es/terms`. */
export function localizePath(path: string, lang: Lang) {
    const clean = path.replace(/^\/es(?=\/|$)/, "") || "/";
    if (lang === defaultLang) return clean;
    return clean === "/" ? "/es/" : `/es${clean}`;
}

export function getLang(url: URL): Lang {
    return url.pathname === "/es" || url.pathname.startsWith("/es/") ? "es" : "en";
}
