"""
agitru — Professional PDF Data Sheet Generator
Generates a polished, multi-page data sheet from the agitru service content.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch, mm
from reportlab.lib.colors import HexColor, white, black, Color
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# ── Brand Colors ──
INDIGO = HexColor("#4f46e5")
INDIGO_LIGHT = HexColor("#818cf8")
INDIGO_BG = HexColor("#eef2ff")
INDIGO_DARK = HexColor("#3730a3")
TEXT_PRIMARY = HexColor("#1e1b4b")
TEXT_SECONDARY = HexColor("#475569")
TEXT_MUTED = HexColor("#64748b")
BORDER_LIGHT = HexColor("#e2e8f0")
BG_LIGHT = HexColor("#f8fafc")
WHITE = white

OUTPUT_PATH = "/Users/lelo/DevOps/GitHub/RAI SMB/agitru/agitru-datasheet.pdf"


def build_styles():
    """Create all paragraph styles for the document."""
    styles = {}

    styles["title"] = ParagraphStyle(
        "title",
        fontName="Helvetica-Bold",
        fontSize=28,
        leading=34,
        textColor=INDIGO_DARK,
        spaceAfter=4,
    )
    styles["subtitle"] = ParagraphStyle(
        "subtitle",
        fontName="Helvetica",
        fontSize=11,
        leading=16,
        textColor=INDIGO,
        spaceAfter=20,
        tracking=0.5,
    )
    styles["h2"] = ParagraphStyle(
        "h2",
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=24,
        textColor=INDIGO_DARK,
        spaceBefore=24,
        spaceAfter=10,
    )
    styles["h3"] = ParagraphStyle(
        "h3",
        fontName="Helvetica-Bold",
        fontSize=13,
        leading=18,
        textColor=TEXT_PRIMARY,
        spaceBefore=14,
        spaceAfter=6,
    )
    styles["body"] = ParagraphStyle(
        "body",
        fontName="Helvetica",
        fontSize=9.5,
        leading=14.5,
        textColor=TEXT_SECONDARY,
        spaceAfter=8,
        alignment=TA_JUSTIFY,
    )
    styles["body_tight"] = ParagraphStyle(
        "body_tight",
        fontName="Helvetica",
        fontSize=9,
        leading=13.5,
        textColor=TEXT_SECONDARY,
        spaceAfter=4,
    )
    styles["bullet"] = ParagraphStyle(
        "bullet",
        fontName="Helvetica",
        fontSize=9,
        leading=13,
        textColor=TEXT_SECONDARY,
        leftIndent=14,
        bulletIndent=0,
        spaceAfter=2,
    )
    styles["service_title"] = ParagraphStyle(
        "service_title",
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=14,
        textColor=TEXT_PRIMARY,
        spaceAfter=3,
    )
    styles["service_meta"] = ParagraphStyle(
        "service_meta",
        fontName="Helvetica",
        fontSize=8,
        leading=11,
        textColor=INDIGO,
    )
    styles["service_desc"] = ParagraphStyle(
        "service_desc",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12.5,
        textColor=TEXT_SECONDARY,
        spaceAfter=4,
    )
    styles["service_deliverable"] = ParagraphStyle(
        "service_deliverable",
        fontName="Helvetica",
        fontSize=8,
        leading=11.5,
        textColor=TEXT_SECONDARY,
        leftIndent=8,
        bulletIndent=0,
        spaceAfter=1,
    )
    styles["table_header"] = ParagraphStyle(
        "table_header",
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=12,
        textColor=white,
    )
    styles["table_cell"] = ParagraphStyle(
        "table_cell",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        textColor=TEXT_SECONDARY,
    )
    styles["table_cell_bold"] = ParagraphStyle(
        "table_cell_bold",
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=12,
        textColor=TEXT_PRIMARY,
    )
    styles["footer"] = ParagraphStyle(
        "footer",
        fontName="Helvetica",
        fontSize=7,
        leading=10,
        textColor=TEXT_MUTED,
        alignment=TA_CENTER,
    )
    styles["disclaimer"] = ParagraphStyle(
        "disclaimer",
        fontName="Helvetica-Oblique",
        fontSize=7,
        leading=10,
        textColor=TEXT_MUTED,
        spaceAfter=4,
    )
    styles["highlight"] = ParagraphStyle(
        "highlight",
        fontName="Helvetica",
        fontSize=9.5,
        leading=14.5,
        textColor=INDIGO_DARK,
        backColor=INDIGO_BG,
        borderPadding=(10, 12, 10, 12),
        spaceAfter=12,
    )
    styles["faq_q"] = ParagraphStyle(
        "faq_q",
        fontName="Helvetica-Bold",
        fontSize=9,
        leading=13,
        textColor=TEXT_PRIMARY,
        spaceBefore=6,
        spaceAfter=2,
    )
    styles["faq_a"] = ParagraphStyle(
        "faq_a",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12.5,
        textColor=TEXT_SECONDARY,
        spaceAfter=8,
    )
    return styles


def add_header_footer(canvas, doc):
    """Draw page header line and footer on each page."""
    canvas.saveState()
    w, h = letter

    # Header line
    canvas.setStrokeColor(INDIGO)
    canvas.setLineWidth(2)
    canvas.line(0.75 * inch, h - 0.6 * inch, w - 0.75 * inch, h - 0.6 * inch)

    # Header: logo text left, tagline right
    canvas.setFont("Helvetica-Bold", 10)
    canvas.setFillColor(INDIGO_DARK)
    canvas.drawString(0.75 * inch, h - 0.52 * inch, "agitru")

    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawRightString(w - 0.75 * inch, h - 0.52 * inch, "Responsible & Secure AI for SMBs")

    # Footer
    canvas.setStrokeColor(BORDER_LIGHT)
    canvas.setLineWidth(0.5)
    canvas.line(0.75 * inch, 0.65 * inch, w - 0.75 * inch, 0.65 * inch)

    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawString(0.75 * inch, 0.45 * inch, "contact@agitru.com  |  US \u00b7 LATAM \u00b7 EU")
    canvas.drawRightString(w - 0.75 * inch, 0.45 * inch, f"Page {doc.page}")

    # Small indigo accent dot
    canvas.setFillColor(INDIGO)
    canvas.circle(0.75 * inch + 1, h - 0.52 * inch + 3.5, 1.8, fill=1, stroke=0)

    canvas.restoreState()


def add_first_page_header(canvas, doc):
    """First page has a larger branded header."""
    canvas.saveState()
    w, h = letter

    # Top indigo bar
    canvas.setFillColor(INDIGO)
    canvas.rect(0, h - 4, w, 4, fill=1, stroke=0)

    # Footer (same as other pages)
    canvas.setStrokeColor(BORDER_LIGHT)
    canvas.setLineWidth(0.5)
    canvas.line(0.75 * inch, 0.65 * inch, w - 0.75 * inch, 0.65 * inch)

    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawString(0.75 * inch, 0.45 * inch, "contact@agitru.com  |  US \u00b7 LATAM \u00b7 EU")
    canvas.drawRightString(w - 0.75 * inch, 0.45 * inch, f"\u00a9 2026 agitru")

    canvas.restoreState()


def hr():
    return HRFlowable(width="100%", thickness=0.5, color=BORDER_LIGHT, spaceAfter=12, spaceBefore=8)


def build_service_block(styles, number, title, timeline, scope, description, deliverables):
    """Build a compact service block as a KeepTogether group."""
    elements = []

    # Number + Title
    num_color = INDIGO.hexval() if INDIGO.hexval().startswith("#") else f"#{INDIGO.hexval()}"
    elements.append(Paragraph(
        f'<font color="{num_color}"><b>{number}</b></font>  '
        f'<font color="#1e1b4b"><b>{title}</b></font>',
        styles["service_title"]
    ))

    # Meta: timeline and scope
    elements.append(Paragraph(
        f'{timeline}  \u00b7  {scope}',
        styles["service_meta"]
    ))
    elements.append(Spacer(1, 3))

    # Description
    elements.append(Paragraph(description, styles["service_desc"]))

    # Deliverables
    for d in deliverables:
        elements.append(Paragraph(f'\u2022  {d}', styles["service_deliverable"]))

    elements.append(Spacer(1, 10))

    return KeepTogether(elements)


def build_pdf():
    """Main function to build the PDF data sheet."""
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=letter,
        topMargin=0.85 * inch,
        bottomMargin=0.85 * inch,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        title="agitru — Responsible & Secure AI for SMBs",
        author="agitru",
        subject="Service Data Sheet",
    )

    styles = build_styles()
    story = []

    # ═══════════════════════════════════════════
    # PAGE 1: Cover / Overview
    # ═══════════════════════════════════════════

    story.append(Spacer(1, 20))
    story.append(Paragraph("agitru", styles["title"]))
    story.append(Paragraph(
        "AI Security Testing  |  Practical Governance  |  Ongoing AI Security Operations",
        styles["subtitle"]
    ))
    story.append(Spacer(1, 8))

    # ── The Problem ──
    story.append(Paragraph("The Problem", styles["h2"]))
    story.append(Paragraph(
        "AI systems can leak data, take unsafe actions, or break compliance expectations \u2014 "
        "often through predictable failures like prompt injection, insecure output handling, "
        "or weak supply-chain controls. OWASP\u2019s GenAI security guidance and NIST\u2019s GenAI "
        "profile both highlight the importance of testing and controls for these realities.",
        styles["body"]
    ))
    story.append(Paragraph(
        "<b>SMBs usually don\u2019t need a 12-month governance program to start.</b> They need "
        "clear risks, practical fixes, and repeatable guardrails that match their people and "
        "budget \u2014 while still mapping to recognized standards for customers in the US, LATAM, "
        "and the EU. The AI RMF was explicitly designed to be flexible and usable by "
        "organizations of all sizes.",
        styles["highlight"]
    ))

    # ── Why agitru ──
    story.append(Paragraph("Why agitru", styles["h2"]))

    value_data = [
        [
            Paragraph("<b>Right-Sized Assessments</b>", styles["table_cell_bold"]),
            Paragraph("<b>Built for SMB AI Reality</b>", styles["table_cell_bold"]),
            Paragraph("<b>Audit-Ready Evidence</b>", styles["table_cell_bold"]),
        ],
        [
            Paragraph(
                "Fixed-scope packages with clear deliverables and timelines \u2014 built on "
                "OWASP GenAI guidance and NIST AI RMF functions. No enterprise overhead.",
                styles["table_cell"]
            ),
            Paragraph(
                "Your stack is vendors, SaaS copilots, and open-weight models. We test the "
                "way you actually use AI \u2014 including third-party resources and value chain risks.",
                styles["table_cell"]
            ),
            Paragraph(
                "Lightweight, audit-friendly artifacts: system documentation, evidence plans, "
                "and reusable test suites. EU AI Act allows SMEs simplified documentation.",
                styles["table_cell"]
            ),
        ],
    ]

    value_table = Table(value_data, colWidths=[2.25 * inch, 2.25 * inch, 2.25 * inch])
    value_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), INDIGO_BG),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER_LIGHT),
        ("ROUNDEDCORNERS", [4, 4, 4, 4]),
    ]))
    story.append(value_table)
    story.append(Spacer(1, 16))

    # ── Standards Alignment ──
    standards_data = [
        [
            Paragraph("<b>Standard</b>", styles["table_header"]),
            Paragraph("<b>Focus</b>", styles["table_header"]),
        ],
        [Paragraph("<b>NIST AI RMF</b>", styles["table_cell_bold"]),
         Paragraph("Risk management framework \u2014 GOVERN, MAP, MEASURE, MANAGE", styles["table_cell"])],
        [Paragraph("<b>NIST GenAI Profile</b>", styles["table_cell_bold"]),
         Paragraph("Generative AI-specific risk guidance and red teaming", styles["table_cell"])],
        [Paragraph("<b>ISO/IEC 42001</b>", styles["table_cell_bold"]),
         Paragraph("AI management system standard", styles["table_cell"])],
        [Paragraph("<b>OWASP GenAI Security</b>", styles["table_cell_bold"]),
         Paragraph("LLM Top 10 & Agentic AI Top 10", styles["table_cell"])],
        [Paragraph("<b>EU AI Act</b>", styles["table_cell_bold"]),
         Paragraph("European regulatory framework for AI systems", styles["table_cell"])],
    ]

    standards_table = Table(standards_data, colWidths=[2.0 * inch, 4.75 * inch])
    standards_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), INDIGO),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("BACKGROUND", (0, 1), (-1, -1), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, BG_LIGHT]),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER_LIGHT),
        ("LINEBELOW", (0, 0), (-1, 0), 1, INDIGO_DARK),
    ]))
    # Keep the entire standards section together to prevent orphan rows
    story.append(KeepTogether([
        Paragraph("Standards Alignment", styles["h2"]),
        standards_table,
    ]))

    # Remove the standalone h2 we added before the table data
    # (it's now inside KeepTogether above)

    # ═══════════════════════════════════════════
    # PAGE 2-3: Services (natural flow, no forced page break)
    # ═══════════════════════════════════════════
    story.append(Spacer(1, 8))
    story.append(Paragraph("Services", styles["h2"]))
    story.append(Paragraph(
        "Our services are packaged so SMBs can pick what they need now and add maturity "
        "over time. We use the AI RMF as the organizing spine \u2014 because it is designed to be "
        "resource-efficient, voluntary, and adaptable by context.",
        styles["body"]
    ))
    story.append(Spacer(1, 6))

    services = [
        {
            "num": "01", "title": "AI Security QuickScan for LLM Apps & Agents",
            "timeline": "1\u20132 weeks", "scope": "Fixed scope",
            "desc": "Best for SMBs piloting or already using GenAI \u2014 chatbots, RAG search, customer support automation, agentic workflows. Baseline: OWASP Top 10 for LLMs & Agentic AI + AI RMF MAP/MEASURE outcomes.",
            "deliverables": [
                "Architecture and dataflow review",
                "OWASP-aligned test summary with prioritized fixes",
                "Release Gate Checklist for production readiness",
                "One-page executive readout with 30-day recommendations",
            ]
        },
        {
            "num": "02", "title": "LLM & Agent Red Team Sprint",
            "timeline": "3\u20135 weeks", "scope": "Fixed scope",
            "desc": "Best for SMBs with real production usage, customer-facing AI, or AI connected to tools like email, CRM, ticketing, code, and workflows. Aligned to OWASP\u2019s Top 10 for Agentic AI and the NIST GenAI red teaming guidance.",
            "deliverables": [
                "Threat model + abuse-case catalog tailored to your agent/tool permissions",
                "Adversarial test suite with reproducible prompts and regression set",
                "Findings report with exploit narratives and engineering-ready mitigations",
                "Retest validation confirming risk reduction",
            ]
        },
        {
            "num": "03", "title": "Open-Weight Model Intake Gate",
            "timeline": "2\u20133 weeks", "scope": "Fixed scope",
            "desc": "Best for SMBs downloading models from public hubs, fine-tuning, or embedding open models in products. Unsafe model artifacts can enable arbitrary code execution \u2014 intake controls matter.",
            "deliverables": [
                "Model intake checklist and risk rating (approve / containment / reject)",
                "Artifact review with safe-loading control recommendations",
                "Sandbox execution plan for safe pre-production testing",
                "Supply-chain bill of materials for AI components",
            ]
        },
        {
            "num": "04", "title": "Responsible AI Starter Kit for SMBs",
            "timeline": "4\u20136 weeks", "scope": "Fixed scope",
            "desc": "Best for SMBs that need governance without bureaucracy \u2014 especially when customers ask \u201chow do you manage AI risk?\u201d Anchored in AI RMF GOVERN outcomes.",
            "deliverables": [
                "AI use-case inventory + basic risk tiering",
                "Lightweight governance charter (decision rights, approvals, escalation)",
                "SMB-friendly AI policies and baselines",
                "Current vs. Target AI RMF profile with 90-day action plan",
            ]
        },
        {
            "num": "05", "title": "ISO 42001 & EU AI Act Readiness Accelerator",
            "timeline": "6\u201310 weeks", "scope": "Fixed scope",
            "desc": "Best for SMBs selling into the EU, working with enterprise customers, or preparing for procurement/audit requirements. ISO 42001 + EU AI Act documentation, logging, and cybersecurity controls.",
            "deliverables": [
                "ISO 42001 readiness snapshot + roadmap",
                "EU AI Act applicability and timeline briefing",
                "EU AI Act evidence starter pack (Articles 11\u201312\u201315)",
                "SME-friendly documentation approach",
            ]
        },
        {
            "num": "06", "title": "Continuous AI Evals & AI SecOps Light",
            "timeline": "Monthly", "scope": "Retainer",
            "desc": "Best for SMBs that want ongoing protection after go-live without building a dedicated AI security team. The AI RMF emphasizes risk management as continuous across the lifecycle.",
            "deliverables": [
                "Monthly eval runs: security regressions, safety regressions, abuse scenarios",
                "CI/CD gates and stop/ship criteria for prompts, tools, and model updates",
                "Logging + evidence hygiene support",
                "Quarterly executive risk review",
            ]
        },
        {
            "num": "07", "title": "Virtual CAIO & AI Steering Committee Support",
            "timeline": "Ongoing", "scope": "Advisory",
            "desc": "Best for SMBs that need senior AI leadership without a full-time hire. A fractional Chief AI Officer embedded in your governance structure \u2014 bringing NIST AI RMF expertise, vendor oversight, and strategic direction.",
            "deliverables": [
                "AI steering committee participation with defined governance cadence",
                "AI roadmap co-ownership, vendor/model evaluation, and use-case prioritization",
                "Board-ready AI risk briefings and regulatory change monitoring",
                "AI literacy workshops for leadership and team capability assessments",
            ]
        },
    ]

    for svc in services:
        story.append(build_service_block(
            styles, svc["num"], svc["title"], svc["timeline"], svc["scope"],
            svc["desc"], svc["deliverables"]
        ))

    # ═══════════════════════════════════════════
    # How It Works + FAQ + Contact (natural flow)
    # ═══════════════════════════════════════════

    # ── How It Works ──
    story.append(Paragraph("How It Works", styles["h2"]))
    story.append(Paragraph(
        "A quick-start engagement flow designed for SMBs who need to move fast without cutting corners.",
        styles["body"]
    ))

    steps_data = [
        [
            Paragraph("<b>Step</b>", styles["table_header"]),
            Paragraph("<b>Action</b>", styles["table_header"]),
            Paragraph("<b>Detail</b>", styles["table_header"]),
        ],
        [
            Paragraph("<b>1</b>", styles["table_cell_bold"]),
            Paragraph("<b>30-Minute Scoping Call</b>", styles["table_cell_bold"]),
            Paragraph("We map your AI use cases, where sensitive data lives, and whether tools or agents can take actions. Free, no pressure.", styles["table_cell"]),
        ],
        [
            Paragraph("<b>2</b>", styles["table_cell_bold"]),
            Paragraph("<b>Fixed-Scope Proposal</b>", styles["table_cell_bold"]),
            Paragraph("Clear package, timeline, deliverables, and access requirements. Within 2 business days.", styles["table_cell"]),
        ],
        [
            Paragraph("<b>3</b>", styles["table_cell_bold"]),
            Paragraph("<b>Execute &amp; Handoff</b>", styles["table_cell_bold"]),
            Paragraph("Actionable artifacts \u2014 test suite, roadmap, evidence starter pack \u2014 and a short leadership readout.", styles["table_cell"]),
        ],
    ]

    steps_table = Table(steps_data, colWidths=[0.5 * inch, 1.6 * inch, 4.65 * inch])
    steps_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), INDIGO),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, BG_LIGHT]),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER_LIGHT),
        ("LINEBELOW", (0, 0), (-1, 0), 1, INDIGO_DARK),
    ]))
    story.append(steps_table)
    story.append(Spacer(1, 16))

    # ── FAQ (compact) ──
    story.append(Paragraph("Frequently Asked Questions", styles["h2"]))

    faqs = [
        ("Do you guarantee that our AI will be \u201csafe\u201d or \u201ccompliant\u201d?",
         "No. AI risk cannot be reduced to zero, and the NIST AI RMF frames risk management as continuous. We provide risk reduction, evidence, and practical controls \u2014 but not a guarantee of outcomes."),
        ("Do you provide legal advice for the EU AI Act?",
         "No. We provide technical, operational, and evidence implementation support. Legal interpretation should come from qualified counsel."),
        ("We\u2019re outside the EU \u2014 does the EU AI Act still matter?",
         "It can. The EU AI Act scope includes providers in third countries placing AI systems on the EU market, and deployers where AI output is used in the EU."),
        ("What\u2019s the fastest way to start?",
         "Most SMBs start with the AI Security QuickScan (1\u20132 weeks) to identify highest-impact risks, then expand to a Red Team Sprint or governance kit as needed."),
        ("Will you test our agent tools (CRM, email, APIs)?",
         "Yes. Agent and tool testing is a core focus because insecure output handling and prompt injection can trigger downstream actions if tool permissions are not controlled."),
        ("How do you handle our data and customer records?",
         "We default to working inside your environment. If access is needed, we apply minimization, retention limits, and secure deletion aligned to your needs."),
        ("What\u2019s required from our team?",
         "Usually: a technical sponsor, read-only access to relevant repos/environments, and short interviews with engineering, product, and security. We keep the burden on our side."),
        ("What happens after the assessment?",
         "We can deliver a remediation sprint and/or provide a monthly AI SecOps Light retainer to keep protections current as models and tools change."),
    ]

    for q, a in faqs:
        story.append(Paragraph(q, styles["faq_q"]))
        story.append(Paragraph(a, styles["faq_a"]))

    story.append(hr())

    # ── Contact ──
    story.append(Paragraph("Get Started", styles["h2"]))
    story.append(Paragraph(
        "Schedule a free 30-minute scoping call with a principal consultant. "
        "We\u2019ll map your AI risk landscape and recommend the right starting point.",
        styles["body"]
    ))

    contact_data = [
        [
            Paragraph("<b>Email</b>", styles["table_cell_bold"]),
            Paragraph("<b>WhatsApp</b>", styles["table_cell_bold"]),
            Paragraph("<b>Regions</b>", styles["table_cell_bold"]),
        ],
        [
            Paragraph("contact@agitru.com", styles["table_cell"]),
            Paragraph("Available", styles["table_cell"]),
            Paragraph("US  \u00b7  LATAM  \u00b7  EU", styles["table_cell"]),
        ],
    ]

    contact_table = Table(contact_data, colWidths=[2.75 * inch, 1.75 * inch, 2.25 * inch])
    contact_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), INDIGO_BG),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER_LIGHT),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 14))

    # Sister company
    story.append(Paragraph(
        '<b>Sister Company:</b> Need responsible AI systems built from scratch? '
        'Meet <b>aibeja</b> (aibeja.com) \u2014 secure AI design, development, and operations.',
        styles["body_tight"]
    ))

    story.append(Spacer(1, 10))
    story.append(hr())

    # Disclaimer
    story.append(Paragraph(
        "agitru provides technical, security, and operational risk management services. "
        "We do not provide legal advice. Regulatory applicability and interpretation "
        "(including EU AI Act scopes and obligations) should be confirmed with qualified "
        "legal counsel. Pricing, SLAs, and timelines are illustrative until confirmed in "
        "a signed statement of work.",
        styles["disclaimer"]
    ))
    story.append(Paragraph("\u00a9 2026 agitru", styles["footer"]))

    # Build
    doc.build(
        story,
        onFirstPage=add_first_page_header,
        onLaterPages=add_header_footer,
    )
    print(f"PDF generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    build_pdf()
