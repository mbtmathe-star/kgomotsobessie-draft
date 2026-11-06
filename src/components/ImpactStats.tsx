import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const stats = [
  { target: 1200, suffix: "+", label: "Clients Seen" },
  { target: 30, suffix: "+", label: "Wellness Workshops" },
  { target: 10, suffix: "", label: "Speaking Engagements" },
  { target: 5, suffix: "", label: "Community Events" },
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

const Stat = ({ target, suffix, label, run }: { target: number; suffix: string; label: string; run: boolean }) => {
  const v = useCountUp(target, run);
  return (
    <div className="text-center">
      <p className="text-xl md:text-2xl font-bold text-primary tabular-nums">
        {v.toLocaleString("en-ZA").replace(/\u00a0/g, " ")}
        {suffix}
      </p>
      <p className="text-xs text-foreground">{label}</p>
    </div>
  );
};

const ImpactStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <div ref={ref} className="mt-6 border-b border-border pb-6">
      <p className="text-overline mb-4 text-center text-xs">Our Impact · Past 2 Years</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5">
        {stats.map((s) => (
          <Stat key={s.label} {...s} run={inView} />
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
