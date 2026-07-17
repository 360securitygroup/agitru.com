/* ============================================
   agitru — Internationalization (EN / ES)
   Uses textContent only — no innerHTML
   ============================================ */

(function () {
  'use strict';

  var T = {
    en: {
      'nav.services': 'Services',
      'nav.team': 'Team',
      'nav.how': 'How It Works',
      'nav.faq': 'FAQ',
      'nav.cta': 'Book a Call',
      'mobile.contact': 'Contact',
      'mobile.cta': 'Book a Call',

      'hero.pretitle': 'Responsible & Secure AI for SMBs',
      'hero.headline.pre': '',
      'hero.headline.ai': 'AI',
      'hero.headline.p1': ' is your biggest ',
      'hero.headline.opp': 'opportunity',
      'hero.headline.p2': '. Don\u2019t let it become your biggest\u00a0',
      'hero.headline.risk': 'risk.',
      'hero.sub.brand': 'agitru',
      'hero.sub.mid': ' helps SMBs adopt AI\u2014from AI tools for their teams to models, agents, and AI-powered applications\u2014',
      'hero.sub.resp': 'responsibly',
      'hero.sub.and': ' and ',
      'hero.sub.conf': 'with confidence',
      'hero.sub.through': ' through\u00a0',
      'hero.sub.strong': 'security testing, practical governance, and ongoing AI security operations',
      'hero.sub.post': '\u00a0aligned to recognized AI security and governance standards.',
      'hero.cta1': 'Book a 30-Minute Call',
      'hero.cta2': 'Get a Fixed-Scope Quote',

      'trust.label': 'Aligned to recognized standards & guidance',

      'problem.pretitle': 'The Problem',
      'problem.title': 'AI risks are predictable. Ignoring them isn\u2019t a strategy.',
      'problem.p1': 'AI systems can leak data, take unsafe actions, or break compliance expectations\u2014often through predictable failures like prompt injection, insecure output handling, or weak supply-chain controls.',
      'problem.p2': 'OWASP\u2019s GenAI security guidance and NIST\u2019s GenAI profile both highlight the importance of testing and controls for these realities.',
      'problem.hl.bold': 'SMBs usually don\u2019t need a 12-month governance program to start.',
      'problem.hl.text': ' They need clear risks, practical fixes, and repeatable guardrails that match their people and budget\u2014while still mapping to recognized standards for customers in the US, LATAM, and the EU. The AI RMF was explicitly designed to be flexible and usable by organizations of all sizes.',

      'values.pretitle': 'Why agitru',
      'values.title.1': 'AI security and governance,',
      'values.title.2': 'right-sized for SMBs.',
      'values.c1.title': 'Right-Sized Assessments',
      'values.c1.desc': 'Fixed-scope security and governance packages with clear deliverables and timelines\u2014built on OWASP\u2019s GenAI security guidance and the NIST AI RMF functions. No 12-month programs, no enterprise overhead.',
      'values.c2.title': 'Built for SMB AI Reality',
      'values.c2.desc': 'Your stack is vendors, SaaS copilots, and open-weight models. We test the way you actually use AI\u2014including third-party resources, procurement controls, and value chain integration risks.',
      'values.c3.title': 'Audit-Ready Evidence',
      'values.c3.desc': 'Lightweight, audit-friendly artifacts: system documentation, evidence plans, and reusable test suites. The EU AI Act even allows SMEs to provide technical documentation in a simplified manner.',

      'team.pretitle': 'The Team',
      'team.title.1': 'Senior practitioners,',
      'team.title.2': 'not generalists.',
      'team.p1': 'Every engagement is led by consultants with hands-on backgrounds spanning cybersecurity and artificial intelligence\u2014not analysts reading from playbooks. Our team has designed and broken AI systems, built security programs for regulated industries, and helped organizations navigate the intersection of emerging technology and operational risk across the US, LATAM, and the EU.',
      'team.p2': 'We bring the same depth of expertise to a two-week SMB engagement as an enterprise would expect from a senior partner\u2014without the overhead, without the sales cycle, and without the generalist filler.',

      'hero.creds.pre': 'Team certified by ',
      'hero.creds.post': ': AAISM\u2122 & AAIR\u2122 AI security & risk credentials',
      'creds.pretitle': 'Credentials',
      'creds.title.1': 'Certified in AI security and AI risk',
      'creds.title.2': 'by ISACA.',
      'creds.desc': 'Our consultants hold ISACA\u2019s advanced AI credentials\u2014among the first globally recognized certifications dedicated to managing AI security and AI risk. The same rigor auditors and boards trust, applied to your AI systems.',
      'creds.aaism.name': 'Advanced in AI Security Management',
      'creds.aaism.desc': 'ISACA\u2019s AI-centric security management certification\u2014covering AI governance, security program oversight, and the controls required to protect AI systems in production.',
      'creds.aair.name': 'Advanced in AI Risk',
      'creds.aair.desc': 'ISACA\u2019s advanced AI risk certification\u2014identifying, assessing, and governing AI risk across the lifecycle, aligned with recognized frameworks such as the NIST AI RMF.',
      'creds.note': 'AAISM\u2122 and AAIR\u2122 are trademarks of ISACA. Badges identify individual certified professionals on the agitru team.',

      'services.pretitle': 'Services',
      'services.title.1': 'SMB packages built on',
      'services.title.2': 'GOVERN, MAP, MEASURE, MANAGE.',
      'services.intro': 'Our services are packaged so SMBs can pick what they need now and add maturity over time. We use the AI RMF as the organizing spine\u2014because it is designed to be resource-efficient, voluntary, and adaptable by context.',
      'services.deliverables': 'Deliverables',
      'services.quote': 'Get a quote',

      's0.title': 'Secure & Responsible AI Posture Assessment',
      's0.b1': '2\u20134 weeks', 's0.b2': 'Start here',
      's0.desc': 'Best for SMBs that haven\u2019t yet run a structured AI risk review\u2014or that want a consolidated picture before investing in targeted programs. Maps your current state across both security and governance dimensions, then calibrates gaps against the standards and market requirements that actually apply to your context: NIST AI RMF, OWASP GenAI, ISO 42001, and EU AI Act.',
      's0.d1': 'AI system and model inventory with data flow and trust boundary mapping',
      's0.d2': 'Dual-dimension posture scorecard: security (OWASP GenAI-aligned) + governance (AI RMF GOVERN/MAP functions)',
      's0.d3': 'Gap analysis calibrated to your applicable standards and target markets (US, LATAM, EU)',
      's0.d4': 'Prioritized remediation roadmap with effort/impact ratings for each finding',
      's0.d5': 'Recommended service path with sequenced next steps to reach your required posture level',

      's1.title': 'AI Security QuickScan for LLM Apps & Agents',
      's1.b1': '1\u20132 weeks', 's1.b2': 'Fixed scope',
      's1.desc': 'Best for SMBs piloting or already using GenAI\u2014chatbots, RAG search, customer support automation, agentic workflows. Baseline: OWASP Top 10 for LLMs & Agentic AI + AI RMF MAP/MEASURE outcomes.',
      's1.d1': 'Architecture and dataflow review',
      's1.d2': 'OWASP-aligned test summary with prioritized fixes',
      's1.d3': 'Release Gate Checklist for production readiness',
      's1.d4': 'One-page executive readout with 30-day recommendations',

      's2.title': 'LLM & Agent Red Team Sprint',
      's2.b1': '3\u20135 weeks', 's2.b2': 'Fixed scope',
      's2.desc': 'Best for SMBs with real production usage, customer-facing AI, or AI connected to tools like email, CRM, ticketing, code, and workflows. Aligned to OWASP\u2019s Top 10 for Agentic AI and the NIST GenAI red teaming guidance.',
      's2.d1': 'Threat model + abuse-case catalog tailored to your agent/tool permissions',
      's2.d2': 'Adversarial test suite with reproducible prompts and regression set',
      's2.d3': 'Findings report with exploit narratives and engineering-ready mitigations',
      's2.d4': 'Retest validation confirming risk reduction',

      's3.title': 'Open-Weight Model Intake Gate',
      's3.b1': '2\u20133 weeks', 's3.b2': 'Fixed scope',
      's3.desc': 'Best for SMBs downloading models from public hubs, fine-tuning, or embedding open models in products. Unsafe model artifacts can enable arbitrary code execution\u2014intake controls matter.',
      's3.d1': 'Model intake checklist and risk rating (approve / containment / reject)',
      's3.d2': 'Artifact review with safe-loading control recommendations',
      's3.d3': 'Sandbox execution plan for safe pre-production testing',
      's3.d4': 'Supply-chain bill of materials for AI components',

      's4.title': 'Responsible AI Starter Kit for SMBs',
      's4.b1': '4\u20136 weeks', 's4.b2': 'Fixed scope',
      's4.desc': 'Best for SMBs that need governance without bureaucracy\u2014especially when customers ask \u201chow do you manage AI risk?\u201d Anchored in AI RMF GOVERN outcomes.',
      's4.d1': 'AI use-case inventory + basic risk tiering',
      's4.d2': 'Lightweight governance charter (decision rights, approvals, escalation)',
      's4.d3': 'SMB-friendly AI policies and baselines',
      's4.d4': 'Current vs. Target AI RMF profile with 90-day action plan',

      's5.title': 'ISO 42001 & EU AI Act Readiness Accelerator',
      's5.b1': '6\u201310 weeks', 's5.b2': 'Fixed scope',
      's5.desc': 'Best for SMBs selling into the EU, working with enterprise customers, or preparing for procurement/audit requirements. ISO 42001 + EU AI Act documentation, logging, and cybersecurity controls.',
      's5.d1': 'ISO 42001 readiness snapshot + roadmap',
      's5.d2': 'EU AI Act applicability and timeline briefing',
      's5.d3': 'EU AI Act evidence starter pack (Articles 11\u201312\u201315)',
      's5.d4': 'SME-friendly documentation approach',

      's6.title': 'Continuous AI Evals & AI SecOps Light',
      's6.b1': 'Monthly', 's6.b2': 'Retainer',
      's6.desc': 'Best for SMBs that want ongoing protection after go-live without building a dedicated AI security team. The AI RMF emphasizes risk management as continuous across the lifecycle.',
      's6.d1': 'Monthly eval runs: security regressions, safety regressions, abuse scenarios',
      's6.d2': 'CI/CD gates and stop/ship criteria for prompts, tools, and model updates',
      's6.d3': 'Logging + evidence hygiene support',
      's6.d4': 'Quarterly executive risk review',

      's7.title': 'Virtual CAIO & AI Steering Committee Support',
      's7.b1': 'Ongoing', 's7.b2': 'Advisory',
      's7.desc': 'Best for SMBs that need senior AI leadership without a full-time hire. A fractional Chief AI Officer or external committee member embedded in your governance structure\u2014bringing NIST AI RMF expertise, vendor oversight, and strategic direction on a part-time basis.',
      's7.d1': 'AI steering committee participation with defined governance cadence',
      's7.d2': 'AI roadmap co-ownership, vendor/model evaluation, and use-case prioritization',
      's7.d3': 'Board-ready AI risk briefings and regulatory change monitoring',
      's7.d4': 'AI literacy workshops for leadership and team capability assessments',

      'how.pretitle': 'How It Works',
      'how.title.1': 'From scoping call to',
      'how.title.2': 'actionable results.',
      'how.desc': 'A quick-start engagement flow designed for SMBs who need to move fast without cutting corners.',
      'how.s1.title': '30-Minute Scoping Call',
      'how.s1.desc': 'We quickly map your AI use cases, where sensitive data lives, and whether tools or agents can take actions. No charge, no pressure.',
      'how.s1.tag': 'Free',
      'how.s2.title': 'Fixed-Scope Proposal',
      'how.s2.desc': 'You get a clear package, timeline, deliverables, and access requirements. Within 2 business days.',
      'how.s2.tag': '2 business days',
      'how.s3.title': 'Execute & Handoff',
      'how.s3.desc': 'You receive actionable artifacts\u2014test suite, roadmap, evidence starter pack\u2014and a short leadership readout so you can implement immediately.',
      'how.s3.tag': 'Actionable artifacts',

      'faq.pretitle': 'FAQ',
      'faq.title': 'Common questions.',
      'faq.q1': 'Do you guarantee that our AI will be \u201csafe\u201d or \u201ccompliant\u201d?',
      'faq.a1': 'No. AI risk cannot be reduced to zero, and the NIST AI RMF frames risk management as continuous across the lifecycle. We provide risk reduction, evidence, and practical controls\u2014but not a guarantee of outcomes or regulatory decisions.',
      'faq.q2': 'Do you provide legal advice for the EU AI Act or local laws?',
      'faq.a2': 'No. We provide technical, operational, and evidence implementation support. Legal interpretation and jurisdiction-specific advice should come from qualified counsel.',
      'faq.q3': 'We\u2019re outside the EU\u2014does the EU AI Act still matter?',
      'faq.a3': 'It can. The EU AI Act scope includes providers established in third countries placing AI systems or models on the EU market, and also includes third-country providers or deployers where the AI output is used in the EU.',
      'faq.q4': 'What\u2019s the fastest way to start?',
      'faq.a4': 'Most SMBs start with the AI Security QuickScan (1\u20132 weeks) to identify the highest-impact risks and fixes, then expand to a Red Team Sprint or governance starter kit as needed.',
      'faq.q5': 'Will you test our agent tools (CRM, email, ticketing, APIs)?',
      'faq.a5': 'Yes. Agent and tool testing is a core focus because insecure output handling and prompt injection can trigger downstream actions if tool permissions are not controlled. Both the OWASP Top 10 for LLMs and the OWASP Top 10 for Agentic AI explicitly highlight these risks.',
      'faq.q6': 'We use open-weight models\u2014what\u2019s the real risk?',
      'faq.a6': 'Open-weight usage is a supply-chain problem. Loading unsafe model artifacts can enable arbitrary code execution. Our intake gate adds isolation, promotion controls, and business-level risk decisions on top of platform scanning features.',
      'faq.q7': 'How do you handle our data, prompts, and customer records?',
      'faq.a7': 'We default to working inside your environment to minimize data movement. If access is needed, we apply minimization, retention limits, and secure deletion aligned to your needs and applicable privacy requirements.',
      'faq.q8': 'Do we need ISO 42001 certification?',
      'faq.a8': 'Not always. Many SMBs benefit from \u201cISO-aligned readiness\u201d without pursuing certification immediately. ISO 42001 provides integrated guidance for managing AI projects from risk assessment through treatment\u2014useful even without formal certification.',
      'faq.q9': 'What\u2019s required from our team during an engagement?',
      'faq.a9': 'Usually: a technical sponsor, read-only access to relevant repos and environments, and short interviews with engineering, product, and security. We keep the burden on our side.',
      'faq.q10': 'What happens after the assessment\u2014do you help fix issues?',
      'faq.a10': 'Yes. We can deliver a remediation sprint (architecture hardening, CI/CD eval gates, logging and evidence upgrades) and/or provide a monthly AI SecOps Light retainer to keep protections current as models, prompts, and tools change.',

      'cta.pretitle': 'Get Started',
      'cta.title.1': 'Talk to a senior consultant.',
      'cta.title.2': 'No sales gate.',
      'cta.desc': 'Schedule a free 30-minute scoping call with a principal consultant. We\u2019ll map your AI risk landscape and recommend the right starting point.',
      'cta.btn1': 'Book a 30-Minute Call',
      'cta.btn2': 'Email Us Directly',
      'cta.whatsapp': 'WhatsApp available',
      'cta.geo': 'US \u00b7 LATAM \u00b7 EU',
      'cta.regions': 'Service regions: United States (US-based delivery), Latin America (remote + partner-supported), and EU-facing readiness support.',

      'footer.desc': 'Responsible & Secure AI services for SMBs. Security testing, practical governance, and ongoing AI security operations.',
      'footer.col.services': 'Services',
      'footer.col.company': 'Company',
      'footer.col.standards': 'Standards',
      'footer.fn.posture': 'AI Posture Assessment',
      'footer.fn.quickscan': 'AI Security QuickScan',
      'footer.fn.redteam': 'Red Team Sprint',
      'footer.fn.intake': 'Model Intake Gate',
      'footer.fn.rai': 'RAI Starter Kit',
      'footer.fn.iso': 'ISO & EU AI Act',
      'footer.fn.evals': 'Continuous Evals',
      'footer.fn.caio': 'Virtual CAIO',
      'footer.fn.team': 'Team',
      'footer.fn.how': 'How It Works',
      'footer.fn.faq': 'FAQ',
      'footer.fn.contact': 'Contact',
      'footer.disclaimer': 'agitru provides technical, security, and operational risk management services. We do not provide legal advice. Regulatory applicability and interpretation (including EU AI Act scopes and obligations) should be confirmed with qualified legal counsel. Pricing, SLAs, and timelines are illustrative until confirmed in a signed statement of work.',
      'footer.copy': '\u00a9 2026 agitru',
    },

    es: {
      'nav.services': 'Servicios',
      'nav.team': 'Equipo',
      'nav.how': 'C\u00f3mo Funciona',
      'nav.faq': 'FAQ',
      'nav.cta': 'Agendar Llamada',
      'mobile.contact': 'Contacto',
      'mobile.cta': 'Agendar Llamada',

      'hero.pretitle': 'IA Responsable y Segura para PYMEs',
      'hero.headline.pre': 'La ',
      'hero.headline.ai': 'IA',
      'hero.headline.p1': ' es tu mayor ',
      'hero.headline.opp': 'oportunidad',
      'hero.headline.p2': '. No dejes que se convierta en tu mayor\u00a0',
      'hero.headline.risk': 'riesgo.',
      'hero.sub.brand': 'agitru',
      'hero.sub.mid': ' ayuda a las PYMEs a adoptar IA\u2014desde herramientas de IA para su equipo hasta modelos, agentes y aplicaciones basadas en IA\u2014',
      'hero.sub.resp': 'con responsabilidad',
      'hero.sub.and': ' y ',
      'hero.sub.conf': 'con confianza',
      'hero.sub.through': ', mediante\u00a0',
      'hero.sub.strong': 'pruebas de seguridad, gobernanza pr\u00e1ctica y operaciones de seguridad de IA continuas',
      'hero.sub.post': '\u00a0alineadas con los est\u00e1ndares reconocidos de seguridad y gobernanza de IA.',
      'hero.cta1': 'Agenda una Llamada de 30 Minutos',
      'hero.cta2': 'Solicita una Cotizaci\u00f3n',

      'trust.label': 'Alineado con est\u00e1ndares y gu\u00edas reconocidos',

      'problem.pretitle': 'El Problema',
      'problem.title': 'Los riesgos de IA son predecibles. Ignorarlos no es una estrategia.',
      'problem.p1': 'Los sistemas de IA pueden filtrar datos, ejecutar acciones inseguras o romper expectativas de cumplimiento\u2014a menudo a trav\u00e9s de fallas predecibles como la inyecci\u00f3n de prompts, el manejo inseguro de salidas o controles d\u00e9biles en la cadena de suministro.',
      'problem.p2': 'La gu\u00eda de seguridad GenAI de OWASP y el perfil GenAI del NIST destacan la importancia de implementar pruebas y controles para estas realidades.',
      'problem.hl.bold': 'Las PYMEs generalmente no necesitan un programa de gobernanza de 12 meses para comenzar.',
      'problem.hl.text': ' Necesitan riesgos claros, correcciones pr\u00e1cticas y controles repetibles que se adapten a su equipo y presupuesto\u2014y que al mismo tiempo se alineen con est\u00e1ndares reconocidos para clientes en EE.UU., LATAM y la UE. El AI RMF fue dise\u00f1ado expl\u00edcitamente para ser flexible y aplicable por organizaciones de todos los tama\u00f1os.',

      'values.pretitle': 'Por qu\u00e9 agitru',
      'values.title.1': 'Seguridad y gobernanza de IA,',
      'values.title.2': 'a la medida de las PYMEs.',
      'values.c1.title': 'Evaluaciones a tu Medida',
      'values.c1.desc': 'Paquetes de seguridad y gobernanza de alcance fijo con entregables y plazos claros\u2014basados en la gu\u00eda de seguridad GenAI de OWASP y las funciones del NIST AI RMF. Sin programas de 12 meses, sin sobrecarga empresarial.',
      'values.c2.title': 'Dise\u00f1ado para la Realidad IA de las PYMEs',
      'values.c2.desc': 'Tu stack son proveedores, copilotos SaaS y modelos de c\u00f3digo abierto. Probamos la IA tal como la usas realmente\u2014incluyendo recursos de terceros, controles de adquisici\u00f3n y riesgos de integraci\u00f3n en la cadena de valor.',
      'values.c3.title': 'Evidencia Lista para Auditor\u00eda',
      'values.c3.desc': 'Artefactos ligeros y listos para auditor\u00eda: documentaci\u00f3n del sistema, planes de evidencia y suites de prueba reutilizables. La Ley de IA de la UE permite que las PYMEs presenten documentaci\u00f3n t\u00e9cnica de forma simplificada.',

      'team.pretitle': 'El Equipo',
      'team.title.1': 'Profesionales senior,',
      'team.title.2': 'no generalistas.',
      'team.p1': 'Cada compromiso es liderado por consultores con experiencia pr\u00e1ctica en ciberseguridad e inteligencia artificial\u2014no por analistas que leen manuales. Nuestro equipo ha dise\u00f1ado y vulnerado sistemas de IA, construido programas de seguridad para industrias reguladas y ayudado a organizaciones a navegar la intersecci\u00f3n entre tecnolog\u00eda emergente y riesgo operacional en EE.UU., LATAM y la UE.',
      'team.p2': 'Aportamos la misma profundidad de experiencia a un compromiso de dos semanas con una PYME que la que una empresa grande esperar\u00eda de un socio senior\u2014sin la sobrecarga, sin el ciclo de ventas y sin el relleno generalista.',

      'hero.creds.pre': 'Equipo certificado por ',
      'hero.creds.post': ': credenciales AAISM\u2122 y AAIR\u2122 en seguridad y riesgo de IA',
      'creds.pretitle': 'Credenciales',
      'creds.title.1': 'Certificados en seguridad y riesgo de IA',
      'creds.title.2': 'por ISACA.',
      'creds.desc': 'Nuestros consultores poseen las credenciales avanzadas de IA de ISACA\u2014entre las primeras certificaciones reconocidas globalmente dedicadas a gestionar la seguridad y el riesgo de la IA. El mismo rigor en el que conf\u00edan auditores y juntas directivas, aplicado a sus sistemas de IA.',
      'creds.aaism.name': 'Advanced in AI Security Management',
      'creds.aaism.desc': 'La certificaci\u00f3n de ISACA centrada en la gesti\u00f3n de seguridad de IA\u2014gobernanza de IA, supervisi\u00f3n del programa de seguridad y los controles necesarios para proteger sistemas de IA en producci\u00f3n.',
      'creds.aair.name': 'Advanced in AI Risk',
      'creds.aair.desc': 'La certificaci\u00f3n avanzada de ISACA en riesgo de IA\u2014identificar, evaluar y gobernar el riesgo de IA a lo largo del ciclo de vida, alineada con marcos reconocidos como el NIST AI RMF.',
      'creds.note': 'AAISM\u2122 y AAIR\u2122 son marcas de ISACA. Las insignias identifican a profesionales certificados individuales del equipo de agitru.',

      'services.pretitle': 'Servicios',
      'services.title.1': 'Paquetes para PYMEs basados en',
      'services.title.2': 'GOBERNAR, MAPEAR, MEDIR, GESTIONAR.',
      'services.intro': 'Nuestros servicios est\u00e1n empaquetados para que las PYMEs puedan elegir lo que necesitan ahora y agregar madurez con el tiempo. Usamos el AI RMF como columna vertebral\u2014porque est\u00e1 dise\u00f1ado para ser eficiente en recursos, voluntario y adaptable al contexto.',
      'services.deliverables': 'Entregables',
      'services.quote': 'Solicitar cotizaci\u00f3n',

      's0.title': 'Evaluaci\u00f3n de Postura de IA Segura y Responsable',
      's0.b1': '2\u20134 semanas', 's0.b2': 'Empieza aqu\u00ed',
      's0.desc': 'Ideal para PYMEs que a\u00fan no han realizado una revisi\u00f3n estructurada de riesgo de IA\u2014o que quieren tener un panorama consolidado antes de invertir en programas espec\u00edficos. Mapea tu estado actual en ambas dimensiones: seguridad y gobernanza, y calibra las brechas frente a los est\u00e1ndares y requisitos de mercado que aplican a tu contexto: NIST AI RMF, OWASP GenAI, ISO 42001 y Ley de IA de la UE.',
      's0.d1': 'Inventario de sistemas y modelos de IA con mapeo de flujos de datos y l\u00edmites de confianza',
      's0.d2': 'Scorecard de postura en dos dimensiones: seguridad (alineada a OWASP GenAI) + gobernanza (funciones GOBERNAR/MAPEAR del AI RMF)',
      's0.d3': 'An\u00e1lisis de brechas calibrado a los est\u00e1ndares aplicables y mercados objetivo (EE.UU., LATAM, UE)',
      's0.d4': 'Hoja de ruta de remediaci\u00f3n priorizada con calificaciones de esfuerzo/impacto por hallazgo',
      's0.d5': 'Ruta de servicios recomendada con pr\u00f3ximos pasos secuenciados para alcanzar el nivel de postura requerido',

      's1.title': 'QuickScan de Seguridad IA para Apps LLM y Agentes',
      's1.b1': '1\u20132 semanas', 's1.b2': 'Alcance fijo',
      's1.desc': 'Ideal para PYMEs que pilotean o ya usan IA generativa\u2014chatbots, b\u00fasqueda RAG, automatizaci\u00f3n de soporte al cliente, flujos de trabajo ag\u00e9nticos. Base: OWASP Top 10 para LLMs y IA Ag\u00e9ntica + resultados MAP/MEASURE del AI RMF.',
      's1.d1': 'Revisi\u00f3n de arquitectura y flujos de datos',
      's1.d2': 'Resumen de pruebas alineado a OWASP con correcciones priorizadas',
      's1.d3': 'Lista de verificaci\u00f3n de Release Gate para preparaci\u00f3n en producci\u00f3n',
      's1.d4': 'Informe ejecutivo de una p\u00e1gina con recomendaciones a 30 d\u00edas',

      's2.title': 'Sprint de Red Team para LLMs y Agentes',
      's2.b1': '3\u20135 semanas', 's2.b2': 'Alcance fijo',
      's2.desc': 'Ideal para PYMEs con uso real en producci\u00f3n, IA orientada al cliente, o IA conectada a herramientas como email, CRM, ticketing, c\u00f3digo y flujos de trabajo. Alineado al Top 10 de OWASP para IA Ag\u00e9ntica y la gu\u00eda de red teaming GenAI del NIST.',
      's2.d1': 'Modelo de amenazas + cat\u00e1logo de casos de abuso adaptado a los permisos de tus agentes/herramientas',
      's2.d2': 'Suite de pruebas adversariales con prompts reproducibles y set de regresi\u00f3n',
      's2.d3': 'Informe de hallazgos con narrativas de explotaci\u00f3n y mitigaciones listas para ingenier\u00eda',
      's2.d4': 'Validaci\u00f3n de retesting que confirma la reducci\u00f3n de riesgo',

      's3.title': 'Puerta de Ingreso para Modelos de C\u00f3digo Abierto',
      's3.b1': '2\u20133 semanas', 's3.b2': 'Alcance fijo',
      's3.desc': 'Ideal para PYMEs que descargan modelos de hubs p\u00fablicos, hacen fine-tuning o embeben modelos abiertos en productos. Los artefactos de modelos inseguros pueden habilitar ejecuci\u00f3n arbitraria de c\u00f3digo\u2014los controles de ingreso importan.',
      's3.d1': 'Lista de verificaci\u00f3n de ingreso de modelos y calificaci\u00f3n de riesgo (aprobar / contenci\u00f3n / rechazar)',
      's3.d2': 'Revisi\u00f3n de artefactos con recomendaciones de controles de carga segura',
      's3.d3': 'Plan de ejecuci\u00f3n en sandbox para pruebas seguras en pre-producci\u00f3n',
      's3.d4': 'Lista de materiales de la cadena de suministro para componentes de IA',

      's4.title': 'Kit Inicial de IA Responsable para PYMEs',
      's4.b1': '4\u20136 semanas', 's4.b2': 'Alcance fijo',
      's4.desc': 'Ideal para PYMEs que necesitan gobernanza sin burocracia\u2014especialmente cuando los clientes preguntan \u00bfc\u00f3mo gestionas el riesgo de IA? Anclado en los resultados GOBERNAR del AI RMF.',
      's4.d1': 'Inventario de casos de uso de IA + clasificaci\u00f3n b\u00e1sica de riesgos',
      's4.d2': 'Carta de gobernanza ligera (derechos de decisi\u00f3n, aprobaciones, escalamiento)',
      's4.d3': 'Pol\u00edticas y l\u00edneas base de IA amigables para PYMEs',
      's4.d4': 'Perfil AI RMF actual vs. objetivo con plan de acci\u00f3n a 90 d\u00edas',

      's5.title': 'Acelerador de Preparaci\u00f3n ISO 42001 y Ley de IA de la UE',
      's5.b1': '6\u201310 semanas', 's5.b2': 'Alcance fijo',
      's5.desc': 'Ideal para PYMEs que venden a la UE, trabajan con clientes empresariales o se preparan para requisitos de adquisici\u00f3n/auditor\u00eda. Documentaci\u00f3n ISO 42001 + Ley de IA de la UE, registro y controles de ciberseguridad.',
      's5.d1': 'Instant\u00e1nea de preparaci\u00f3n ISO 42001 + hoja de ruta',
      's5.d2': 'Informe de aplicabilidad de la Ley de IA de la UE y plazos',
      's5.d3': 'Paquete inicial de evidencia para la Ley de IA de la UE (Art\u00edculos 11\u201312\u201315)',
      's5.d4': 'Enfoque de documentaci\u00f3n amigable para PYMEs',

      's6.title': 'Evaluaciones Continuas de IA y AI SecOps Ligero',
      's6.b1': 'Mensual', 's6.b2': 'Retainer',
      's6.desc': 'Ideal para PYMEs que quieren protecci\u00f3n continua despu\u00e9s del go-live sin construir un equipo dedicado de seguridad de IA. El AI RMF enfatiza la gesti\u00f3n de riesgos como un proceso continuo a lo largo del ciclo de vida.',
      's6.d1': 'Ejecuciones mensuales de evaluaci\u00f3n: regresiones de seguridad, regresiones funcionales, escenarios de abuso',
      's6.d2': 'Puertas CI/CD y criterios de parada/entrega para prompts, herramientas y actualizaciones de modelos',
      's6.d3': 'Soporte de higiene de registros y evidencia',
      's6.d4': 'Revisi\u00f3n trimestral de riesgo ejecutivo',

      's7.title': 'CAIO Virtual y Apoyo al Comit\u00e9 de Direcci\u00f3n de IA',
      's7.b1': 'Continuo', 's7.b2': 'Asesor\u00eda',
      's7.desc': 'Ideal para PYMEs que necesitan liderazgo senior en IA sin contratar a tiempo completo. Un Chief AI Officer fraccional o miembro externo del comit\u00e9 integrado en tu estructura de gobernanza\u2014aportando experiencia en NIST AI RMF, supervisi\u00f3n de proveedores y direcci\u00f3n estrat\u00e9gica a tiempo parcial.',
      's7.d1': 'Participaci\u00f3n en el comit\u00e9 de direcci\u00f3n de IA con cadencia de gobernanza definida',
      's7.d2': 'Co-propiedad del roadmap de IA, evaluaci\u00f3n de proveedores/modelos y priorizaci\u00f3n de casos de uso',
      's7.d3': 'Informes de riesgo de IA listos para la junta directiva y monitoreo de cambios regulatorios',
      's7.d4': 'Talleres de alfabetizaci\u00f3n en IA para liderazgo y evaluaciones de capacidad del equipo',

      'how.pretitle': 'C\u00f3mo Funciona',
      'how.title.1': 'De la llamada inicial a',
      'how.title.2': 'resultados accionables.',
      'how.desc': 'Un flujo de compromiso de inicio r\u00e1pido dise\u00f1ado para PYMEs que necesitan avanzar r\u00e1pido sin tomar atajos.',
      'how.s1.title': 'Llamada de Alcance de 30 Minutos',
      'how.s1.desc': 'Mapeamos r\u00e1pidamente tus casos de uso de IA, d\u00f3nde viven los datos sensibles y si las herramientas o agentes pueden tomar acciones. Sin costo, sin presi\u00f3n.',
      'how.s1.tag': 'Gratis',
      'how.s2.title': 'Propuesta de Alcance Fijo',
      'how.s2.desc': 'Recibes un paquete claro, plazos, entregables y requisitos de acceso. En 2 d\u00edas h\u00e1biles.',
      'how.s2.tag': '2 d\u00edas h\u00e1biles',
      'how.s3.title': 'Ejecuci\u00f3n y Entrega',
      'how.s3.desc': 'Recibes artefactos accionables\u2014suite de pruebas, hoja de ruta, paquete inicial de evidencia\u2014y un resumen ejecutivo para que puedas implementar de inmediato.',
      'how.s3.tag': 'Artefactos accionables',

      'faq.pretitle': 'FAQ',
      'faq.title': 'Preguntas frecuentes.',
      'faq.q1': '\u00bfGarantizan que nuestra IA ser\u00e1 \u201csegura\u201d o \u201cconforme\u201d?',
      'faq.a1': 'No. El riesgo de IA no puede reducirse a cero, y el NIST AI RMF enmarca la gesti\u00f3n de riesgos como un proceso continuo a lo largo del ciclo de vida. Proporcionamos reducci\u00f3n de riesgos, evidencia y controles pr\u00e1cticos\u2014pero no garant\u00edas de resultados o decisiones regulatorias.',
      'faq.q2': '\u00bfBrindan asesor\u00eda legal sobre la Ley de IA de la UE o leyes locales?',
      'faq.a2': 'No. Proporcionamos soporte t\u00e9cnico, operacional y de implementaci\u00f3n de evidencia. La interpretaci\u00f3n legal y el asesoramiento espec\u00edfico por jurisdicci\u00f3n deben provenir de abogados calificados.',
      'faq.q3': 'Estamos fuera de la UE\u2014\u00bfla Ley de IA de la UE sigue siendo relevante?',
      'faq.a3': 'Puede serlo. El alcance de la Ley de IA de la UE incluye a proveedores establecidos en terceros pa\u00edses que colocan sistemas o modelos de IA en el mercado de la UE, y tambi\u00e9n incluye a proveedores o desplegadores de terceros pa\u00edses cuando el resultado de la IA se usa en la UE.',
      'faq.q4': '\u00bfCu\u00e1l es la forma m\u00e1s r\u00e1pida de comenzar?',
      'faq.a4': 'La mayor\u00eda de las PYMEs comienzan con el QuickScan de Seguridad IA (1\u20132 semanas) para identificar los riesgos y correcciones de mayor impacto, y luego ampl\u00edan a un Sprint de Red Team o un kit inicial de gobernanza seg\u00fan sea necesario.',
      'faq.q5': '\u00bfProbar\u00e1n nuestras herramientas de agentes (CRM, email, ticketing, APIs)?',
      'faq.a5': 'S\u00ed. Las pruebas de agentes y herramientas son un foco central porque el manejo inseguro de salidas y la inyecci\u00f3n de prompts pueden desencadenar acciones en cascada si los permisos de las herramientas no est\u00e1n controlados. Tanto el OWASP Top 10 para LLMs como el OWASP Top 10 para IA Ag\u00e9ntica destacan expl\u00edcitamente estos riesgos.',
      'faq.q6': 'Usamos modelos de c\u00f3digo abierto\u2014\u00bfcu\u00e1l es el riesgo real?',
      'faq.a6': 'El uso de modelos de c\u00f3digo abierto es un problema de cadena de suministro. Cargar artefactos de modelos inseguros puede habilitar ejecuci\u00f3n arbitraria de c\u00f3digo. Nuestra puerta de ingreso a\u00f1ade aislamiento, controles de promoci\u00f3n y decisiones de riesgo a nivel de negocio sobre las funciones de escaneo de plataforma.',
      'faq.q7': '\u00bfC\u00f3mo manejan nuestros datos, prompts y registros de clientes?',
      'faq.a7': 'Por defecto trabajamos dentro de tu entorno para minimizar el movimiento de datos. Si se requiere acceso, aplicamos minimizaci\u00f3n, l\u00edmites de retenci\u00f3n y eliminaci\u00f3n segura alineados con tus necesidades y los requisitos de privacidad aplicables.',
      'faq.q8': '\u00bfNecesitamos la certificaci\u00f3n ISO 42001?',
      'faq.a8': 'No siempre. Muchas PYMEs se benefician de una \u201cpreparaci\u00f3n alineada a ISO\u201d sin buscar la certificaci\u00f3n de inmediato. ISO 42001 proporciona orientaci\u00f3n integrada para gestionar proyectos de IA desde la evaluaci\u00f3n hasta el tratamiento de riesgos\u2014\u00fatil incluso sin certificaci\u00f3n formal.',
      'faq.q9': '\u00bfQu\u00e9 se requiere de nuestro equipo durante un compromiso?',
      'faq.a9': 'Normalmente: un patrocinador t\u00e9cnico, acceso de solo lectura a repositorios y entornos relevantes, y entrevistas cortas con ingenier\u00eda, producto y seguridad. Mantenemos la carga de trabajo de nuestro lado.',
      'faq.q10': '\u00bfQu\u00e9 pasa despu\u00e9s de la evaluaci\u00f3n\u2014ayudan a corregir los problemas?',
      'faq.a10': 'S\u00ed. Podemos entregar un sprint de remediaci\u00f3n (endurecimiento de arquitectura, puertas de evaluaci\u00f3n CI/CD, mejoras de registro y evidencia) y/o proporcionar un retainer mensual de AI SecOps Ligero para mantener las protecciones actualizadas a medida que cambian los modelos, prompts y herramientas.',

      'cta.pretitle': 'Comenzar',
      'cta.title.1': 'Habla con un consultor senior.',
      'cta.title.2': 'Sin filtro de ventas.',
      'cta.desc': 'Agenda una llamada de alcance gratuita de 30 minutos con un consultor principal. Mapearemos tu panorama de riesgo de IA y recomendaremos el punto de partida adecuado.',
      'cta.btn1': 'Agenda una Llamada de 30 Min',
      'cta.btn2': 'Escr\u00edbenos Directamente',
      'cta.whatsapp': 'WhatsApp disponible',
      'cta.geo': 'EE.UU. \u00b7 LATAM \u00b7 UE',
      'cta.regions': 'Regiones de servicio: Estados Unidos (entrega desde EE.UU.), Am\u00e9rica Latina (remoto + soporte de partners) y soporte de preparaci\u00f3n orientado a la UE.',

      'footer.desc': 'Servicios de IA Responsable y Segura para PYMEs. Pruebas de seguridad, gobernanza pr\u00e1ctica y operaciones de seguridad de IA continuas.',
      'footer.col.services': 'Servicios',
      'footer.col.company': 'Empresa',
      'footer.col.standards': 'Est\u00e1ndares',
      'footer.fn.posture': 'Evaluaci\u00f3n de Postura IA',
      'footer.fn.quickscan': 'QuickScan de Seguridad IA',
      'footer.fn.redteam': 'Sprint de Red Team',
      'footer.fn.intake': 'Puerta de Ingreso de Modelos',
      'footer.fn.rai': 'Kit Inicial IA Responsable',
      'footer.fn.iso': 'ISO y Ley IA UE',
      'footer.fn.evals': 'Evaluaciones Continuas',
      'footer.fn.caio': 'CAIO Virtual',
      'footer.fn.team': 'Equipo',
      'footer.fn.how': 'C\u00f3mo Funciona',
      'footer.fn.faq': 'FAQ',
      'footer.fn.contact': 'Contacto',
      'footer.disclaimer': 'agitru presta servicios t\u00e9cnicos, de seguridad y de gesti\u00f3n de riesgos operacionales. No prestamos asesor\u00eda legal. La aplicabilidad e interpretaci\u00f3n regulatoria (incluidos los alcances y obligaciones de la Ley de IA de la UE) debe confirmarse con asesor\u00eda legal calificada. Los precios, SLAs y plazos son ilustrativos hasta su confirmaci\u00f3n en una declaraci\u00f3n de trabajo firmada.',
      'footer.sister.pre': '\u00bfNecesitas sistemas de IA responsable construidos desde cero? Conoce a nuestra empresa hermana\u00a0',
      'footer.sister.post': '\u2014dise\u00f1o, desarrollo y operaciones de IA segura.',
      'footer.copy': '\u00a9 2026 agitru',
    }
  };

  function setLanguage(lang) {
    if (!T[lang]) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) {
        el.textContent = T[lang][key];
      }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('agitru-lang', lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  function detectLanguage() {
    var saved = localStorage.getItem('agitru-lang');
    if (saved && T[saved]) return saved;
    var browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return browser.startsWith('es') ? 'es' : 'en';
  }

  document.addEventListener('DOMContentLoaded', function () {
    // SEO-friendly: HTML is the source of truth. Don't overwrite content on load.
    // Only mark the active language button and wire navigation between pages.
    var isEsPage = window.location.pathname.indexOf('/es') !== -1;
    var currentLang = isEsPage ? 'es' : 'en';
    document.documentElement.lang = currentLang;
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-lang');
        if (target === currentLang) return;
        window.location.href = target === 'es' ? '/es/' : '/';
      });
    });
  });

})();
