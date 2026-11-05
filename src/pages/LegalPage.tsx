
import Nav from '../components/Nav'
import Footer from '../components/Footer'

type LegalKind =
  | 'accessibility'
  | 'terms'
  | 'privacy-policy'

const content: Record<
  LegalKind,
  {
    title: string
    eyebrow: string
    intro: string
    sections: string[]
  }
> = {
  accessibility: {
    title: 'ACCESSIBILITY',
    eyebrow: 'INFORMATION / 01',
    intro:
      'We want the EvolX Games website to be usable and welcoming to as many visitors as possible. This page is a working placeholder pending an accessibility review and confirmation of the standards and support commitments adopted by EvolX Games.',
    sections: [
      'Accessibility statement pending review',
      'The website should be reviewed for keyboard navigation, readable contrast, meaningful image alternatives, responsive layouts and assistive-technology compatibility.',
      'If you encounter an accessibility barrier, please contact the team at amit@evolxgames.com and include the page and issue so it can be reviewed.'
    ]
  },

  terms: {
    title: 'TERMS & CONDITIONS',
    eyebrow: 'INFORMATION / 02',
    intro:
      'This page is reserved for the official EvolX Games website terms. The complete terms have not been provided in the project files, so no contractual terms are being invented here.',
    sections: [
      'Terms awaiting publication',
      'Before publication, the company should review and approve the terms governing website access, intellectual property, external links, game downloads, acceptable use, liability and applicable law.',
      'For questions while this page is under review, contact amit@evolxgames.com.'
    ]
  },

  'privacy-policy': {
    title: 'PRIVACY POLICY',
    eyebrow: 'INFORMATION / 03',
    intro:
      'Your privacy matters. This page is a placeholder until EvolX Games confirms the data practices for this website and its services. It should not be treated as the final privacy notice.',
    sections: [
      'Privacy notice pending review',
      'The final policy should identify the data controller, information collected, purposes and legal bases, cookies and analytics, service providers, retention periods, user rights, international transfers and contact details.',
      'For privacy-related enquiries while this page is under review, contact amit@evolxgames.com.'
    ]
  }
}

export default function LegalPage({
  kind
}: {
  kind: LegalKind
}) {
  const page = content[kind]

  return (
    <div className="legal-page">
      <Nav />

      <main className="legal-main">
        <span className="ludaro-section-index">
          {page.eyebrow} / EVOLX GAMES
        </span>

        <h1>{page.title}</h1>

        <p className="legal-lead">{page.intro}</p>

        <div className="legal-content">
          {page.sections.map((section, i) => (
            <section key={section}>
              <span>0{i + 1}</span>
              <p>{section}</p>
            </section>
          ))}
        </div>

        <p className="legal-review-note">
          DRAFT PLACEHOLDER — REQUIRES COMPANY REVIEW
          BEFORE PUBLICATION
        </p>

        <a className="text-link" href="/">
          ← BACK TO EVOLX GAMES
        </a>
      </main>

      <Footer />
    </div>
  )
}
