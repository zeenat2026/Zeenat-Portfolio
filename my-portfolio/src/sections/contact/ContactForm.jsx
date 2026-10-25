import { useEffect, useState } from "react";


const INITIAL_VALUES = { name: "", email: "", subject: "", message: "" };
const MESSAGE_MAX = 600;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Name must be at least 2 characters long.";

  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
    errors.email = "Please enter a valid email address.";

  if (!values.subject.trim()) errors.subject = "Please enter a subject.";

  if (!values.message.trim()) errors.message = "Please write a message.";
  else if (values.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters long.";

  return errors;
}
const ContactForm = () => {
  const [values, setValues] = useState({name:'',email:'',subject:'',message:''});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
   
    if (touched[name]) setErrors(validate(next));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          botcheck: "", // spam honeypot
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setValues(INITIAL_VALUES);
        setTouched({});
       setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };


 useEffect(()=>{
   if (status === 'success') {
    const timeoutId = setTimeout(() => {
       setStatus('idle')
    },5000);
    return () =>clearTimeout(timeoutId)
   }
    },[status]);

    useEffect(()=>{
    if (Object.keys(errors).length > 0) {
    const timeoutId=  setTimeout(() => {
        setErrors({});
        setTouched({})
      }, 6000);

      return () => clearTimeout(timeoutId)
    }
    },[errors])


  const showError = (name) => touched[name] && errors[name];
  const inputClass = (name) =>
    `input input-bordered w-full ${showError(name) ? "input-error" : ""}`;

  const isSending = status === "sending";

  return (
    <div className="card bg-base-100 shadow-xl">
      <form onSubmit={handleSubmit}  noValidate className="card-body gap-4">
        <div className="grid gap-4 sm:grid-cols-2 ">
          <Field id="name" label="Name"
           error={showError("name")}
           >
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(showError("name"))}
              aria-describedby={showError("name") ? "name-error" : undefined}
              className={inputClass("name")}
            />
          </Field>

          <Field id="email" label="Email"
           error={showError("email")}
           >
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(showError("email"))}
              aria-describedby={showError("email") ? "email-error" : undefined}
              className={inputClass("email")}
            />
          </Field>
        </div>

        <Field id="subject" label="Subject" 
        error={showError("subject")}
        >
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this regarding?"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("subject"))}
            aria-describedby={showError("subject") ? "subject-error" : undefined}
            className={inputClass("subject")}
          />
        </Field>

        <Field
          id="message"
          label="Message"
          error={showError("message")}
          hint={`${values.message.length}/${MESSAGE_MAX}`}
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={MESSAGE_MAX}
            placeholder="Describe your inquiry in detail..."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("message"))}
            aria-describedby={showError("message") ? "message-error" : undefined}
            className={`textarea textarea-bordered
                 w-full resize-none leading-relaxed
                 
            `}
          />
        </Field>

        {status === "success" && (
          <div role="status" className="alert alert-success">
            <span>Message sent successfully. Thanks, I will reply soon.</span>
          </div>
        )}
        {status === "error" && (
          <div role="alert" className="alert alert-error">
            <span>Message not sent.Try again or send it on email.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="btn btn-primary mt-2 w-full sm:w-auto sm:self-end"
        >
          {isSending && <span className="loading loading-spinner loading-sm" />}
          {isSending ? "Sending..." : "Send Message"}
        
        </button>
      </form>
    </div>
  );
}


function Field({ id, label, error, hint, children }) {
  return (
    <div className="form-control w-full ">
      <label htmlFor={id} className="label pb-1">
        <span className="label-text font-medium">{label}</span>
        {hint && <span className="label-text-alt text-base-content/50">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}




export default ContactForm;