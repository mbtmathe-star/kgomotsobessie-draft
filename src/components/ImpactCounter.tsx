import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { X, Calendar, Users, Briefcase, Mic, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const IMPACT_STORAGE_KEY = "impact-card-seen";
export const IMPACT_CLOSED_EVENT = "impact-card-closed";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { icon: Users, target: 1200, suffix: "+", label: "Clients Seen", sub: "Individual, family & couples sessions" },
  { icon: Briefcase, target: 30, suffix: "+", label: "Wellness Workshops", sub: "Government & private sector" },
  { icon: Mic, target: 10, suffix: "", label: "Speaking Engagements", sub: "Self-image, mental health & entrepreneurship" },
  { icon: Heart, target: 5, suffix: "", label: "Community Events", sub: "Breakfast with my Teenager, Parenting & Healthy Entrepreneur Wellness" },
];

const useCountUp = (target: number, run: boolean, duration = 1900) => {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration, reduce]);

  return value;
};

const Num = ({ target, suffix, run }: { target: number; suffix: string; run: boolean }) => {
  const v = useCountUp(target, run);
  return (
    <span className="tabular-nums">
      {v.toLocaleString("en-ZA").replace(/ /g, " ")}
      {suffix}
    </span>
  );
};

const ImpactCounter = () => {
  const [phase, setPhase] = useState<"pending" | "card" | "banner">("pending");
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerInView = useInView(bannerRef, { once: true, margin: "0px 0px -10% 0px" });

  const close = () => {
    setPhase("banner");
    try {
      sessionStorage.setItem(IMPACT_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(IMPACT_CLOSED_EVENT));
  };

  useEffect(() => {
    let seen = false;
    try {
      seen = !!sessionStorage.getItem(IMPACT_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (seen) {
      setPhase("banner");
      return;
    }
    const t = window.setTimeout(() => setPhase("card"), 700);
    return () => window.clearTimeout(t);
  }, []);

  // If the visitor leaves before closing the card, release anything waiting on it.
  useEffect(
    () => () => {
      if (phaseRef.current === "card") window.dispatchEvent(new Event(IMPACT_CLOSED_EVENT));
    },
    []
  );

  useEffect(() => {
    if (phase !== "card") return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <>
      {/* Pop-up card */}
      <AnimatePresence>
        {phase === "card" && (
          <motion.div
            key="impact-backdrop"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Our impact"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } }}
              exit={{ opacity: 0, y: 160, scale: 0.94, transition: { duration: 0.55, ease: EASE } }}
              className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded bg-white shadow-card-hover"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="px-6 pt-9 text-center sm:px-10">
                <p className="text-overline mb-3">Our Impact · Past 2 Years</p>
                <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  Trusted by Hundreds of Families, Employees and Entrepreneurs
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  In just two years, Kgomotso Bessie Social Workers & Consulting Inc. has walked alongside individuals,
                  families, organisations and communities across the Northern Cape, through counselling, workshops,
                  speaking engagements and community events.
                </p>
              </div>

              <div className="px-6 pb-8 pt-7 text-center sm:px-10">
                <div className="grid grid-cols-2 gap-x-4 gap-y-7">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.35 + i * 0.12, duration: 0.6, ease: EASE } }}
                    >
                      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-4xl font-bold leading-none text-primary sm:text-5xl">
                        <Num target={s.target} suffix={s.suffix} run />
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-foreground">{s.label}</p>
                      <p className="mx-auto mt-1 max-w-[12rem] text-xs leading-snug text-muted-foreground">{s.sub}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col items-center gap-3 border-t border-border pt-6">
                  <Button asChild size="lg" className="btn-primary-gradient btn-glow w-full sm:w-auto">
                    <Link to="/contact" onClick={close}>
                      <Calendar className="mr-2 h-5 w-5" />
                      Book a Consultation
                    </Link>
                  </Button>
                  <button onClick={close} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                    Continue to website
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slim banner (second section) */}
      <AnimatePresence initial={false}>
        {phase === "banner" && (
          <motion.section
            key="impact-banner"
            aria-label="Our impact"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, transition: { duration: 0.8, ease: EASE, delay: 0.1 } }}
            className="overflow-hidden border-b border-border bg-white"
          >
            <div ref={bannerRef} className="container-wide py-4 md:py-5">
              <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-8">
                <div className="grid w-full grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 lg:flex-1">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-center gap-3">
                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:flex">
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-center sm:text-left">
                        <p className="text-2xl font-bold leading-none text-primary md:text-3xl">
                          <Num target={s.target} suffix={s.suffix} run={bannerInView} />
                        </p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-foreground">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild className="btn-primary-gradient btn-glow w-full shrink-0 lg:w-auto">
                  <Link to="/contact">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImpactCounter;
