export const languages = {
    en: "English",
    es: "Español",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export type Mark = "live" | "included" | "excluded";

const en = {
    meta: {
        title: "Invntio — Software design, development and hosting",
        description:
            "Invntio designs, builds and maintains web apps, mobile apps and websites for small businesses and startups, with monthly hosting and maintenance plans.",
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
        title: "Build what your business is capable of.",
        lede: "We design, build and run the software behind it: web and mobile apps, websites, automation and hosting. From the first call through years of maintenance, handled directly by the engineer who builds it.",
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
        items: [
            {
                name: "Global Merchants Group",
                what: "B2B wholesale catalog",
                url: "https://www.theglobalmerchantsgroup.com/en/default-channel",
                domain: "theglobalmerchantsgroup.com",
                kind: "client",
            },
            { name: "Beavo", what: "Private habit tracker for iPhone", url: "https://beavo.me", domain: "beavo.me", kind: "own" },
            { name: "Axen", what: "Training app for iOS", url: "https://getaxen.com", domain: "getaxen.com", kind: "own" },
            { name: "Bohío", what: "Condominium management SaaS", url: "https://bohio.app", domain: "bohio.app", kind: "own" },
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
                body: "Architecture reviews, DevOps and CI/CD setup, and security reviews for teams that already run software.",
                stack: "Docker · GitHub Actions · AWS",
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
                name: "Discovery call",
                body: "We talk through the problem, who will use the result, and your timeline.",
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
                body: "We launch, hand over access and documentation, and keep things running on a maintenance plan if you choose one.",
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
        lede: "Tell us what you need. We reply within 2 business days.",
        email: "Email",
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
    notFound: {
        title: "Page not found",
        body: "The page you're looking for doesn't exist or has moved.",
        cta: "Go to the home page",
    },
};

type Dict = typeof en;

const es: Dict = {
    meta: {
        title: "Invntio — Diseño, desarrollo y hosting de software",
        description:
            "Invntio diseña, construye y mantiene aplicaciones web, apps móviles y sitios web para pymes y startups, con planes mensuales de hosting y mantenimiento.",
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
        title: "Construye todo lo que tu negocio puede ser.",
        lede: "Diseñamos, construimos y operamos el software que lo hace posible: apps web y móviles, sitios web, automatizaciones y hosting. Desde la primera llamada hasta años de mantenimiento, con trato directo con el ingeniero que lo construye.",
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
        items: [
            {
                name: "Global Merchants Group",
                what: "Catálogo mayorista B2B",
                url: "https://www.theglobalmerchantsgroup.com/en/default-channel",
                domain: "theglobalmerchantsgroup.com",
                kind: "client",
            },
            { name: "Beavo", what: "Habit tracker privado para iPhone", url: "https://beavo.me", domain: "beavo.me", kind: "own" },
            { name: "Axen", what: "App de entrenamiento para iOS", url: "https://getaxen.com", domain: "getaxen.com", kind: "own" },
            { name: "Bohío", what: "SaaS de administración de condominios", url: "https://bohio.app", domain: "bohio.app", kind: "own" },
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
                body: "Revisión de arquitectura, configuración de DevOps y CI/CD, y revisiones de seguridad para equipos que ya operan software.",
                stack: "Docker · GitHub Actions · AWS",
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
                name: "Llamada inicial",
                body: "Conversamos sobre el problema, quién usará el resultado y tus plazos.",
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
                body: "Lanzamos, entregamos accesos y documentación, y lo mantenemos funcionando con un plan de mantenimiento si lo eliges.",
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
        lede: "Cuéntanos qué necesitas. Respondemos en 2 días hábiles.",
        email: "Correo",
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
        tagline: "Libera el potencial de tu negocio",
        legal: "Legal",
        site: "Sitio",
        contact: "Contacto",
        terms: "Términos del Servicio",
        refunds: "Política de Reembolsos y Cancelaciones",
        privacy: "Política de Privacidad",
        rights: "Todos los derechos reservados.",
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
    notFound: {
        title: "Página no encontrada",
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
