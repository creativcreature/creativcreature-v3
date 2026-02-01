import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-light-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-dark-800">
                CreativCreature
              </span>
            </Link>
            <p className="text-dark-600/70 text-sm leading-relaxed">
              AI-Augmented Creative Studio.<br />
              Brand strategy & experiential design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm tracking-wider uppercase text-dark-800 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/#work" className="text-dark-600/70 hover:text-dark-800 transition-colors text-sm">
                  Work
                </a>
              </li>
              <li>
                <a href="/#about" className="text-dark-600/70 hover:text-dark-800 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-dark-600/70 hover:text-dark-800 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-sm tracking-wider uppercase text-dark-800 mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://linkedin.com/in/creativcreature" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-600/70 hover:text-dark-800 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.behance.net/Chrisparker21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-600/70 hover:text-dark-800 transition-colors text-sm"
                >
                  Behance
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@thehumancenter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-600/70 hover:text-dark-800 transition-colors text-sm"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="mailto:chris@creativcreature.com"
                  className="text-dark-600/70 hover:text-dark-800 transition-colors text-sm"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-800/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-600/50 text-xs">
            © {currentYear} CreativCreature. All rights reserved.
          </p>
          <p className="text-dark-600/50 text-xs">
            Christopher James Parker · Atlanta, GA
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
