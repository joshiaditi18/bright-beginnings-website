const items = [
  "🎓 Admissions Open 2025-26",
  "⭐ Playgroup • Nursery • Jr KG • Sr KG",
  "🐘 Activity-Based Learning",
  "🇮🇳 Indian Values & Culture",
  "🎨 Art • Music • Dance",
  "🛡️ Safe & Hygienic Campus",
  "📞 Call: +91 12345 67890",
];

const AdmissionTicker = () => {
  return (
    <div className="bg-sunshine overflow-hidden py-2.5 relative">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-body text-sm font-bold text-sunshine-foreground mx-8 inline-block"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AdmissionTicker;
