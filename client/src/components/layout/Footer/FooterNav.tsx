const navLinks = [
  {
    title: "Products",
    links: ["Prices drop", "New products", "Best sales", "Contact us", "Sitemap", "Stores"],
  },
  {
    title: "Our Company",
    links: ["Delivery", "Legal Notice", "Terms and conditions of use", "About us", "Secure payment", "Login"],
  },
];

const FooterNav = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 font-semibold justify-between border-b pb-6 lg:border-b-0 lg:border-r lg:px-6 lg:pb-0">
      {navLinks.map(({ title, links }) => (
        <div key={title} className="space-y-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link} className="text-gray-500 hover:text-purple-500 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNav;
