/*
 * CANOPY EDITORIAL — Contact section on cream paper. Asymmetric split:
 * form card left with warm inputs, contact info + leaf imagery right.
 */
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionLabel from "../SectionLabel.jsx";

const LEAF_IMG = "/images/leaf-texture.png";

/** Lightweight replacement for sonner toast — no external UI deps. */
function useToast() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(t);
  }, [visible]);
  const show = (msg) => {
    toastMsg = msg;
    setVisible(true);
  };
  return { visible, show };
}

let toastMsg = "";

function Toast() {
  const toast = useToast();
  return { visible: toast.visible, show: toast.show };
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Demo form — static site has no backend; acknowledge and clear.
    setTimeout(() => {
      setSubmitting(false);
      setToastMsg(
        "Thanks! We've received your message. This is a demo form — in production it would be wired to a backend."
      );
      setToastVisible(true);
      e.target.reset();
    }, 600);
  };

  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 3500);
    return () => clearTimeout(t);
  }, [toastVisible]);

  return (
    <section id="contact" className="relative bg-background py-24 md:py-32">
      <div className="container grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div className="reveal">
          <SectionLabel index="06" label="Contact" />
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Let's grow something together
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Questions, demos, or just a hello — leave your details and a member
            of our team will reply within one business day.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-9 space-y-5 rounded-2xl border border-border bg-card p-7 shadow-sm md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your team and your sustainability goals…"
                className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-leaf px-8 py-6 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-leaf-dark disabled:opacity-60 active:scale-[0.97] sm:w-auto"
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>

        <div className="reveal flex flex-col gap-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={LEAF_IMG}
              alt="Close-up of a green leaf with delicate veins"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf-dark" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:hello@verdant.example"
                  className="link-underline text-sm font-medium text-ink"
                >
                  hello@verdant.example
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf-dark" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Phone
                </p>
                <a
                  href="tel:+15551234567"
                  className="link-underline text-sm font-medium text-ink"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf-dark" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Studio
                </p>
                <p className="text-sm font-medium text-ink">
                  14 Canopy Lane, Portland, OR
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Demo success toast */}
      {toastVisible && <div className="toast toast-visible">{toastMsg}</div>}
    </section>
  );
}
