
function InfoItem({ icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-base-content/60">{label}</span>
        <span className="block break-words font-medium">{value}</span>
      </span>
    </>
  );

  const base = "flex items-center gap-4";

  return href ? (
    <a href={href} className={`${base} transition hover:text-primary`}>
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  );
}


export default InfoItem