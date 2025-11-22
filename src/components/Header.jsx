import logo from '/logo.png'

function Header() {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold text-primary">Mutuelle Chrétienne nationnale</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#accueil" className="link link-hover">Accueil</a>
            <a href="#services" className="link link-hover">Services</a>
            <a href="#contact" className="link link-hover">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header


