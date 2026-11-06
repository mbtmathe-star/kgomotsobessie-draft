import { BRANCH_MAPS_URL } from "@/components/NewBranchPopup";

const Item = () => (
  <div className="flex shrink-0 items-center whitespace-nowrap px-8 text-xs font-semibold uppercase tracking-widest sm:text-sm">
    <span>New Branch Now Open — 37 Jan van Zyl Street, Monument Heights, Kimberley</span>
    <a
      href={BRANCH_MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-8 underline underline-offset-4 decoration-white/60 transition-colors hover:decoration-white"
    >
      Get Directions
    </a>
    <span aria-hidden="true" className="ml-8 text-white/40">/</span>
  </div>
);

const BranchMarquee = () => (
  <div className="marquee absolute inset-x-0 top-0 z-20 overflow-hidden bg-primary py-2.5 text-white">
    <div className="animate-marquee flex w-max">
      {[0, 1].map((group) => (
        <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Item key={i} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default BranchMarquee;
