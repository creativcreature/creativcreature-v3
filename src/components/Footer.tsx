const Footer = () => {
  const currentYear = new Date().getFullYear()

  const archiveLinks = [
    { label: 'Original', href: 'https://creativcreature.github.io/', version: 'V0' },
    { label: 'Version 1', href: 'https://cparker-portfolio-premium.netlify.app/', version: 'V1' },
    { label: 'Version 2', href: 'https://creativcreature.github.io/creativcreature-v3/', version: 'V2' },
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/creativcreature' },
    { label: 'Behance', href: 'https://behance.net/creativcreature' },
    { label: 'Instagram', href: 'https://instagram.com/creativcreature' },
  ]

  return (
    <footer className="bg-light-200 border-t border-dark-900/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-dark-900 mb-4">
              Christopher James Parker
            </h3>
            <p className="text-dark-600 text-sm leading-relaxed mb-4">
              AI-Augmented Creative Director
              <br />
              Neo RenAIssance Man
            </p>
            <a 
              href="mailto:hello@creativcreature.com"
              className="text-dark-900 text-sm hover-underline"
            >
              hello@creativcreature.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-wider text-dark-600 uppercase mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-700 text-sm hover:text-dark-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive */}
          <div>
            <h4 className="text-xs tracking-wider text-dark-600 uppercase mb-4">
              Archive
            </h4>
            <ul className="space-y-2">
              {archiveLinks.map((link) => (
                <li key={link.version}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-700 text-sm hover:text-dark-900 transition-colors"
                  >
                    <span className="text-xs font-mono text-dark-500">
                      {link.version}
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-900/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <p className="text-dark-500 text-xs text-center">
            © {currentYear} Christopher James Parker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
