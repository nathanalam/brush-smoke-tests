import { useMemo } from "react";
import {
  Check,
  Eye,
  Laptop,
  Link2,
  MessageSquare,
  ScanLine,
  Smartphone,
  Tablet,
  Wand2,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { StatusPill } from "@/components/landing/StatusPill";
import { SectionHeading } from "@/components/landing/SectionHeading";

function PanelFrame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-950">
      <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute left-4 top-4 z-10">
        <Badge variant="blueprint" className="mono-badge">
          {label}
        </Badge>
      </div>
      <div className="relative p-6 pt-16">{children}</div>
    </div>
  );
}

/* ---------------- Tab 1: scan → clean geometry ---------------- */

function ScanToRenovation() {
  const noise = useMemo(() => {
    let s = 7331;
    const rand = () => {
      s = (s * 1103515245 + 12345) % 2147483648;
      return s / 2147483648;
    };
    return Array.from({ length: 120 }, () => ({
      x: 12 + rand() * 156,
      y: 12 + rand() * 156,
      r: 0.6 + rand() * 1.2,
      o: 0.25 + rand() * 0.55,
    }));
  }, []);

  return (
    <PanelFrame label="Scan → Renovation">
      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <svg viewBox="0 0 180 180" className="w-full" aria-label="Raw point cloud capture">
          {noise.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="#38BDF8" opacity={p.o} />
          ))}
          <path
            d="M20 24 H160 V158 H20 Z"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.7"
          />
        </svg>

        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-blueprint/40 bg-blueprint/10 text-blueprint">
          <Wand2 className="h-4 w-4" aria-hidden="true" />
        </div>

        <svg viewBox="0 0 180 180" className="w-full" aria-label="Clean editable CAD walls">
          <path d="M20 24 H160 V158 H20 Z" fill="#10B981" fillOpacity="0.08" />
          <path d="M20 24 H160 V158 H20 Z" fill="none" stroke="#10B981" strokeWidth="2.4" />
          <line x1="96" y1="24" x2="96" y2="86" stroke="#10B981" strokeWidth="2.4" />
          <rect x="28" y="132" width="52" height="18" rx="3" fill="#0EA5E9" fillOpacity="0.35" />
          <text
            x="90"
            y="176"
            textAnchor="middle"
            fill="#34D399"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
          >
            ±3mm
          </text>
        </svg>
      </div>
    </PanelFrame>
  );
}

/* ---------------- Tab 2: multi-device sync ---------------- */

function MultiDeviceSync() {
  const devices = [
    { icon: Laptop, name: "Studio · MacBook", note: "Editing header detail", color: "#0EA5E9" },
    { icon: Tablet, name: "On-site · iPad", note: "Checking rough-in dims", color: "#F59E0B" },
    { icon: Smartphone, name: "Field · iPhone", note: "Capturing new scan", color: "#10B981" },
  ];

  return (
    <PanelFrame label="Multi-Device Sync">
      <div className="grid gap-3 sm:grid-cols-3">
        {devices.map(({ icon: Icon, name, note, color }) => (
          <div
            key={name}
            className="rounded-xl border border-ink-600/70 bg-ink-800/70 p-4 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-5 w-5" style={{ color }} aria-hidden="true" />
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-white">{name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{note}</p>
            <p className="mono-badge mt-3 text-ink-500">synced 0.2s ago</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <StatusPill label="One model · Three devices · Zero exports" />
      </div>
    </PanelFrame>
  );
}

/* ---------------- Tab 3: client walkthrough ---------------- */

function ClientWalkthrough() {
  return (
    <PanelFrame label="Instant Client Walkthrough">
      <div className="mx-auto max-w-lg space-y-3">
        <div className="flex items-center gap-3 rounded-xl border border-ink-600/70 bg-ink-800/70 px-4 py-3">
          <Link2 className="h-4 w-4 shrink-0 text-blueprint" aria-hidden="true" />
          <span className="truncate font-mono text-xs text-muted-foreground">
            brush.app/view/maple-st?role=client
          </span>
          <Badge variant="signal" className="ml-auto shrink-0 mono-badge">
            View only
          </Badge>
        </div>

        <div className="rounded-xl border border-ink-600/70 bg-ink-800/70 p-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/90 font-mono text-xs font-bold text-ink-950">
              JT
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">
                Jordan T. <span className="font-normal text-muted-foreground">· Homeowner</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;Love the island — can we pull the pendant lights 6&quot; toward the
                window?&rdquo;
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-signal/30 bg-signal/10 px-2 py-1 text-[11px] text-signal-soft">
                  <Check className="h-3 w-3" aria-hidden="true" /> Approved layout
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-ink-600 bg-ink-700/60 px-2 py-1 text-[11px] text-muted-foreground">
                  <MessageSquare className="h-3 w-3" aria-hidden="true" /> 1 open comment
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 pt-1 text-xs text-muted-foreground">
          <Eye className="h-3.5 w-3.5 text-blueprint" aria-hidden="true" />
          No account required. No seat charged.
        </div>
      </div>
    </PanelFrame>
  );
}

const TABS = [
  { value: "scan", label: "Scan to Renovation", icon: ScanLine, Panel: ScanToRenovation },
  { value: "sync", label: "Multi-Device Sync", icon: Tablet, Panel: MultiDeviceSync },
  { value: "client", label: "Instant Client Walkthrough", icon: Eye, Panel: ClientWalkthrough },
] as const;

export function FeatureSpotlight() {
  return (
    <section id="collaboration" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent"
      />
      <div className="container">
        <SectionHeading
          eyebrow="See It Work"
          title="Three moments where legacy CAD falls apart."
          description="Getting reality into the model, keeping the crew in sync, and getting a homeowner to say yes."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="scan">
            <div className="flex justify-center">
              <TabsList>
                {TABS.map(({ value, label, icon: Icon }) => (
                  <TabsTrigger key={value} value={value}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {TABS.map(({ value, Panel }) => (
              <TabsContent key={value} value={value}>
                <Panel />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
