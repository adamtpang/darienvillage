export const Trust = () => {
  const partners = [
    'Iternum Construction',
    'Próspera ZEDE',
    'Rubén Fajardo PM',
    'Caribbean Development',
    'Roatán Partners'
  ];

  return (
    <div className="text-center">
      <p className="text-brand-gray text-lg font-medium mb-8">
        Backed by experienced developers and trusted partners in Caribbean real estate
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 trust-partners">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 px-8 py-4 rounded-xl text-brand-gray font-semibold border border-brand-primary/10 hover:border-brand-primary/20 hover:bg-brand-primary/10 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};