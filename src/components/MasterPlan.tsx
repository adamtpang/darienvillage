const MasterPlan = () => {
  return (
    <div id="masterplan" className="text-center">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-sm p-4 border border-brand-sand/20 aspect-video overflow-hidden">
          <img
            src="/masterplan.png"
            alt="Darien Village master plan showing village layout and development phases"
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
          />
        </div>
        <p className="text-brand-coal/60 text-sm mt-4 italic">
          Master plan showing village urbanism design with mixed-use development and community spaces
        </p>
      </div>
    </div>
  );
};

export { MasterPlan };
export default MasterPlan;