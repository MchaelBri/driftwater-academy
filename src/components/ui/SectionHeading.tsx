type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-14`}>
      {label && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-600 bg-sky-50 px-4 py-1.5 rounded-full mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {/* Decorative accent bar */}
      <div className={`flex items-center gap-2 mb-5 ${centered ? "justify-center" : ""}`}>
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span className="w-12 h-1 rounded-full bg-sky-500" />
        <span className="w-2 h-2 rounded-full bg-amber-400" />
      </div>
      {subtitle && (
        <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
