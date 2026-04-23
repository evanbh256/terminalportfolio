export function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: "bhanadari.nirwan06@gmail.com",
      href: "mailto:bhanadari.nirwan06@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/evan-bhandari",
      href: "https://www.linkedin.com/in/evan-bhandari-aa7b19218",
    },
    {
      label: "GitHub",
      value: "github.com/evanbh256",
      href: "https://github.com/evanbh256",
    },
    {
      label: "Resume",
      value: "EvanBhandari-Web.pdf",
      href: "/EvanBhandari-Web.pdf",
    },
  ];

  return (
    <div className="w-full text-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap">
      <h3 className="text-amber-200 text-lg font-bold mb-6">Contact</h3>
      
      <div className="space-y-2">
        {contactLinks.map((link) => (
          <div key={link.label}>
            <span className="text-white font-bold">{link.label}: </span>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline cursor-pointer">
              {link.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
