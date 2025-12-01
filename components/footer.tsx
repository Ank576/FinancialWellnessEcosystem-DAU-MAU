export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FW</span>
              </div>
              <span className="font-semibold">FinWell</span>
            </div>
            <p className="text-sm text-foreground/60">Building the financial wellness ecosystem.</p>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Roadmap", "API"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security", "Compliance"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h3 className="font-semibold text-foreground mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-foreground/60 text-center">© 2025 FinWell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
