import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Sparkles, ArrowRight, Navigation } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const BRANCH_ADDRESS_LINE1 = "37 Jan van Zyl Street";
export const BRANCH_ADDRESS_LINE2 = "Monument Heights, Kimberley";
export const BRANCH_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("37 Jan van Zyl Street, Monument Heights, Kimberley");

const STORAGE_KEY = "new-branch-popup-seen";

const NewBranchPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* storage unavailable – still show once */
    }

    const timer = window.setTimeout(() => setOpen(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  const handleChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-0 gap-0">
        <div className="bg-gradient-to-br from-primary to-[hsl(174_55%_28%)] text-white px-6 pt-8 pb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Now Open
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-white leading-tight">
            We've Opened a New Branch!
          </DialogTitle>
          <DialogDescription className="text-white/85 mt-2">
            Closer to you in Monument Heights.
          </DialogDescription>
        </div>
        <div className="px-6 py-6 text-center bg-white">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <p className="text-lg font-bold text-foreground">{BRANCH_ADDRESS_LINE1}</p>
          <p className="text-foreground mb-5">{BRANCH_ADDRESS_LINE2}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="btn-primary-gradient btn-glow">
              <a href={BRANCH_MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions
              </a>
            </Button>
            <Button asChild variant="outline" onClick={() => handleChange(false)}>
              <Link to="/contact">
                Book a Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewBranchPopup;
