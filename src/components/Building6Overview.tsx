export const Building6Overview = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">
          Project <span className="text-brand-gradient">Overview</span>
        </h2>
        <h3 className="text-2xl font-semibold text-brand-gray mb-8">
          Building 6 Overview
        </h3>
        <p className="text-brand-gray text-lg leading-relaxed max-w-3xl mx-auto">
          Strategic development with professional management and proven construction
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Project Details */}
        <div className="space-y-8">
          <div className="impact-card p-8">
            <h4 className="text-xl font-bold text-brand-dark mb-4">Project Details</h4>
            <ul className="space-y-3 text-brand-gray">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                Community Features
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                Unit Distribution
              </li>
            </ul>
          </div>

          <div className="impact-card p-8">
            <h4 className="text-xl font-bold text-brand-dark mb-4">Próspera Location</h4>
            <p className="text-brand-gray leading-relaxed mb-4">
              Building 6 is strategically positioned within Próspera, Honduras' innovative special economic zone with proper setbacks consistent with Buildings 1-5.
            </p>
          </div>

          <div className="impact-card p-8">
            <h4 className="text-xl font-bold text-brand-dark mb-4">Proven Development</h4>
            <p className="text-brand-gray leading-relaxed">
              Delivered by Iternum, the same contractor behind successful Buildings 1-5. Managed by Rubén Fajardo with 20+ Roatán projects experience.
            </p>
          </div>
        </div>

        {/* Master Plan Image */}
        <div className="relative">
          <img
            src="/src/assets/site-plan-detailed.png"
            alt="Darien Village Master Plan showing building layouts, amenities, and landscape design"
            className="w-full h-auto rounded-2xl shadow-lg"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};