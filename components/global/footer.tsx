const Footer = () => {
  const links = {
    company: ['About', 'How It Works', 'Eligibility', 'Contact'],
  };

  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          <div className='col-span-2'>
            <img
              src='/catalyst-logo.png'
              alt='Catalyst Executive Group Logo'
              className='w-48 mb-4 brightness-0 invert'
            />
            <h3 className='text-2xl font-heading font-bold text-secondary-foreground mb-2'>
              Catalyst Executive Group
            </h3>
            <p className='text-secondary-foreground/70 italic mb-4'>
              Igniting Renewal. Restoring Strength.
            </p>
            <p className='text-secondary-foreground/80 text-sm leading-relaxed'>
              A boutique turnaround and revival firm partnering with distressed
              businesses through strategic equity investment and hands-on
              leadership.
            </p>
          </div>

          <div>
            <h4 className='text-lg font-heading font-bold text-secondary-foreground mb-4'>
              Company
            </h4>
            <ul className='space-y-2'>
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href='#'
                    className='text-secondary-foreground/70 hover:text-accent transition-colors duration-200'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='border-t border-secondary-foreground/20 pt-8'>
          <p className='text-center text-secondary-foreground/60 text-sm'>
            © {new Date().getFullYear()} Catalyst Executive Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
