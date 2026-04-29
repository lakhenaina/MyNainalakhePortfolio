import { useMemo, useState } from "react";

export default function Contact({ active }) {
  const [form, setForm] = useState({ fullname: "", email: "", message: "" });

  const canSubmit = useMemo(() => {
    if (!form.fullname.trim()) return false;
    if (!form.message.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return false;
    return true;
  }, [form]);

  const onSubmit = (e) => {
    e.preventDefault();
    // same UI output; you can connect EmailJS/backend later
  };

  return (
    <article className={`contact ${active ? "active" : ""}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.419294872796!2d85.43280387517002!3d27.673432826986982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aad7a6c0001%3A0xc28ecfd4c98a91f4!2zRGF0dGF0cmF5YSBUZW1wbGUg4KSm4KSk4KWN4KSk4KS-4KSk4KWN4KSw4KSvIOCkruCkqOCljeCkpuCkv-CksA!5e0!3m2!1sen!2snp!4v1775662850669!5m2!1sen!2snp "
            width="400"
            height="300"
            loading="lazy"
            title="Sacramento map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={form.fullname}
              onChange={(e) =>
                setForm((f) => ({ ...f, fullname: e.target.value }))
              }
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={!canSubmit}
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}