import InfoItem from "./InfoItem";

const CONTACT_INFO = {
  email: "zeenatshafqaat.dev@gmail.com",
  phone: "+92 306 6768109",
  location: "Yazman, Bahawalpur, Pakistan",
  socials: [
    { label: "GitHub", href: "https://github.com/zeenat2026" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zeenat-shafqaat/" },
  ],
};

const icons = {
  mail: (
    <Icon
      path={
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      }
    />
  ),
  phone: (
    <Icon
      path={
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
      }
    />
  ),
  pin: (
    <Icon
      path={
        <>
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      }
    />
  ),
};
function ContactInfo() {

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl ">
          Let's work together
        </h2>
        <p className="mt-4 max-w-md text-base-content/70">
          If you want to ask any questions or just to say hi, my inbox is open.
          I usually reply within 24 hours.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <InfoItem
          icon={icons.mail}
          label="Email"
          value={CONTACT_INFO.email}
          href={`mailto:${CONTACT_INFO.email}`}
        />
        <InfoItem
          icon={icons.phone}
          label="Phone"
          value={CONTACT_INFO.phone}
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
        />
        <InfoItem
          icon={icons.pin}
          label="Location"
          value={CONTACT_INFO.location}
        />
      </div>

      <div className="flex flex-wrap gap-3 ">
        {CONTACT_INFO.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm "
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}


function Icon({ path }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
export default ContactInfo