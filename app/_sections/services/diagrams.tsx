/**
 * SVG diagrams used in the Services section. Each function returns a
 * complete <svg> sized to its parent. They are deterministic and have
 * no client-side state — safe to keep as plain server-renderable JSX.
 */
import type { ReactElement } from "react";

const baseSvgProps = {
  width: "100%",
  height: "100%",
  viewBox: "0 0 320 280",
  preserveAspectRatio: "xMidYMid meet" as const,
  fill: "none" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false,
};

function StrategyDiagram(): ReactElement {
  return (
    <svg {...baseSvgProps}>
      <rect x={20} y={20} width={80} height={36} rx={8} fill="rgba(219,4,0,0.12)" stroke="rgba(219,4,0,0.4)" />
      <text x={60} y={43} textAnchor="middle" fontSize={11} fill="#f5f5f7">Discovery</text>
      <line x1={100} y1={38} x2={130} y2={38} stroke="rgba(255,255,255,0.2)" strokeDasharray="3,3" />
      <rect x={130} y={20} width={80} height={36} rx={8} fill="rgba(219,4,0,0.12)" stroke="rgba(219,4,0,0.4)" />
      <text x={170} y={43} textAnchor="middle" fontSize={11} fill="#f5f5f7">Research</text>
      <line x1={210} y1={38} x2={240} y2={38} stroke="rgba(255,255,255,0.2)" strokeDasharray="3,3" />
      <rect x={240} y={20} width={60} height={36} rx={8} fill="rgba(219,4,0,0.12)" stroke="rgba(219,4,0,0.4)" />
      <text x={270} y={43} textAnchor="middle" fontSize={11} fill="#f5f5f7">Define</text>
      <line x1={270} y1={56} x2={270} y2={80} stroke="rgba(255,255,255,0.15)" />
      <line x1={160} y1={56} x2={160} y2={80} stroke="rgba(255,255,255,0.15)" />
      <rect x={100} y={80} width={120} height={36} rx={8} fill="rgba(219,4,0,0.2)" stroke="rgba(219,4,0,0.6)" strokeWidth={1.5} />
      <text x={160} y={103} textAnchor="middle" fontSize={12} fill="#fff" fontWeight={600}>Strategy &amp; Roadmap</text>
      <rect x={20} y={140} width={82} height={28} rx={6} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <text x={61} y={158} textAnchor="middle" fontSize={10} fill="#a1a1a6">User personas</text>
      <rect x={119} y={140} width={82} height={28} rx={6} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <text x={160} y={158} textAnchor="middle" fontSize={10} fill="#a1a1a6">Journey maps</text>
      <rect x={218} y={140} width={82} height={28} rx={6} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <text x={259} y={158} textAnchor="middle" fontSize={10} fill="#a1a1a6">Tech stack</text>
      <line x1={160} y1={116} x2={160} y2={140} stroke="rgba(255,255,255,0.12)" strokeDasharray="3,3" />
      <text x={20} y={198} fontSize={10} fill="#6e6e73" fontWeight={600} letterSpacing="0.06em">AI-ACCELERATED TIMELINE</text>
      <rect x={20} y={206} width={280} height={6} rx={3} fill="rgba(255,255,255,0.06)" />
      <rect x={20} y={206} width={80} height={6} rx={3} fill="rgba(219,4,0,0.5)" />
      <text x={20} y={228} fontSize={10} fill="#6e6e73">Week 1–2</text>
      <text x={108} y={228} fontSize={10} fill="#a1a1a6">Strategy locked</text>
      <circle cx={100} cy={209} r={4} fill="#DB0400" />
    </svg>
  );
}

function DesignDiagram(): ReactElement {
  return (
    <svg {...baseSvgProps}>
      <rect x={90} y={14} width={140} height={240} rx={16} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth={1.5} />
      <rect x={90} y={14} width={140} height={24} rx={16} fill="rgba(255,255,255,0.05)" />
      <line x1={90} y1={36} x2={230} y2={36} stroke="rgba(255,255,255,0.07)" />
      <rect x={98} y={42} width={124} height={10} rx={3} fill="rgba(255,255,255,0.07)" />
      <rect x={98} y={58} width={124} height={60} rx={6} fill="rgba(219,4,0,0.08)" stroke="rgba(219,4,0,0.2)" />
      <text x={160} y={93} textAnchor="middle" fontSize={9} fill="rgba(219,4,0,0.6)">hero image</text>
      <rect x={98} y={124} width={80} height={8} rx={2} fill="rgba(255,255,255,0.14)" />
      <rect x={98} y={136} width={124} height={5} rx={1} fill="rgba(255,255,255,0.06)" />
      <rect x={98} y={145} width={100} height={5} rx={1} fill="rgba(255,255,255,0.06)" />
      <rect x={98} y={154} width={110} height={5} rx={1} fill="rgba(255,255,255,0.06)" />
      <rect x={98} y={168} width={80} height={22} rx={11} fill="rgba(219,4,0,0.35)" stroke="rgba(219,4,0,0.5)" />
      <text x={138} y={183} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={600}>Get started</text>
      <line x1={90} y1={225} x2={230} y2={225} stroke="rgba(255,255,255,0.07)" />
      <rect x={102} y={230} width={22} height={16} rx={3} fill="rgba(219,4,0,0.2)" />
      <rect x={134} y={230} width={22} height={16} rx={3} fill="rgba(255,255,255,0.04)" />
      <rect x={166} y={230} width={22} height={16} rx={3} fill="rgba(255,255,255,0.04)" />
      <rect x={198} y={230} width={22} height={16} rx={3} fill="rgba(255,255,255,0.04)" />
      <line x1={58} y1={88} x2={98} y2={88} stroke="rgba(219,4,0,0.3)" strokeDasharray="3,2" />
      <text x={14} y={92} fontSize={9} fill="#6e6e73">Visual</text>
      <line x1={58} y1={138} x2={98} y2={138} stroke="rgba(255,255,255,0.15)" strokeDasharray="3,2" />
      <text x={14} y={142} fontSize={9} fill="#6e6e73">Content</text>
      <line x1={58} y1={179} x2={98} y2={179} stroke="rgba(219,4,0,0.3)" strokeDasharray="3,2" />
      <text x={22} y={183} fontSize={9} fill="#6e6e73">CTA</text>
    </svg>
  );
}

function EngineeringDiagram(): ReactElement {
  return (
    <svg {...baseSvgProps}>
      <text x={50} y={22} fontSize={10} fill="#6e6e73" fontWeight={600} letterSpacing="0.06em">TECH STACK + AI ASSIST</text>
      <rect x={30} y={32} width={260} height={38} rx={8} fill="rgba(219,4,0,0.1)" stroke="rgba(219,4,0,0.35)" />
      <text x={50} y={55} fontSize={11} fill="#a1a1a6" fontWeight={600}>Frontend</text>
      <rect x={136} y={40} width={46} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={159} y={54} textAnchor="middle" fontSize={10} fill="#f5f5f7">React</text>
      <rect x={186} y={40} width={46} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={209} y={54} textAnchor="middle" fontSize={10} fill="#f5f5f7">Next.js</text>
      <rect x={240} y={40} width={44} height={20} rx={4} fill="rgba(219,4,0,0.15)" stroke="rgba(219,4,0,0.3)" />
      <text x={262} y={54} textAnchor="middle" fontSize={9} fill="#DB0400" fontWeight={600}>AI-assist</text>
      <rect x={30} y={82} width={260} height={38} rx={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
      <text x={50} y={105} fontSize={11} fill="#a1a1a6" fontWeight={600}>API / Backend</text>
      <rect x={162} y={90} width={48} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={186} y={104} textAnchor="middle" fontSize={10} fill="#f5f5f7">Node.js</text>
      <rect x={214} y={90} width={68} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={248} y={104} textAnchor="middle" fontSize={10} fill="#f5f5f7">GraphQL</text>
      <rect x={30} y={132} width={260} height={38} rx={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
      <text x={50} y={155} fontSize={11} fill="#a1a1a6" fontWeight={600}>Database</text>
      <rect x={162} y={140} width={58} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={191} y={154} textAnchor="middle" fontSize={10} fill="#f5f5f7">PostgreSQL</text>
      <rect x={224} y={140} width={56} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={252} y={154} textAnchor="middle" fontSize={10} fill="#f5f5f7">Firebase</text>
      <rect x={30} y={182} width={260} height={38} rx={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
      <text x={50} y={205} fontSize={11} fill="#a1a1a6" fontWeight={600}>Infra / DevOps</text>
      <rect x={162} y={190} width={34} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={179} y={204} textAnchor="middle" fontSize={10} fill="#f5f5f7">AWS</text>
      <rect x={200} y={190} width={44} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={222} y={204} textAnchor="middle" fontSize={10} fill="#f5f5f7">Docker</text>
      <rect x={248} y={190} width={36} height={20} rx={4} fill="rgba(255,255,255,0.06)" />
      <text x={266} y={204} textAnchor="middle" fontSize={10} fill="#f5f5f7">CI/CD</text>
      <line x1={160} y1={70} x2={160} y2={82} stroke="rgba(255,255,255,0.1)" />
      <line x1={160} y1={120} x2={160} y2={132} stroke="rgba(255,255,255,0.1)" />
      <line x1={160} y1={170} x2={160} y2={182} stroke="rgba(255,255,255,0.1)" />
    </svg>
  );
}

function AutomationDiagram(): ReactElement {
  return (
    <svg {...baseSvgProps}>
      <text x={160} y={22} textAnchor="middle" fontSize={10} fill="#6e6e73" fontWeight={600} letterSpacing="0.06em">AGENT WORKFLOW</text>
      <rect x={110} y={32} width={100} height={30} rx={8} fill="rgba(219,4,0,0.12)" stroke="rgba(219,4,0,0.4)" />
      <text x={160} y={52} textAnchor="middle" fontSize={11} fill="#f5f5f7" fontWeight={600}>Trigger</text>
      <line x1={160} y1={62} x2={160} y2={80} stroke="rgba(219,4,0,0.4)" />
      <rect x={96} y={80} width={128} height={36} rx={8} fill="rgba(219,4,0,0.2)" stroke="rgba(219,4,0,0.6)" strokeWidth={1.5} />
      <text x={160} y={103} textAnchor="middle" fontSize={12} fill="#fff" fontWeight={700}>AI Agent</text>
      <line x1={120} y1={116} x2={70} y2={140} stroke="rgba(255,255,255,0.15)" />
      <line x1={160} y1={116} x2={160} y2={140} stroke="rgba(255,255,255,0.15)" />
      <line x1={200} y1={116} x2={250} y2={140} stroke="rgba(255,255,255,0.15)" />
      <rect x={30} y={140} width={80} height={28} rx={6} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <text x={70} y={158} textAnchor="middle" fontSize={10} fill="#a1a1a6">Search tool</text>
      <rect x={120} y={140} width={80} height={28} rx={6} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <text x={160} y={158} textAnchor="middle" fontSize={10} fill="#a1a1a6">Code tool</text>
      <rect x={210} y={140} width={80} height={28} rx={6} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <text x={250} y={158} textAnchor="middle" fontSize={10} fill="#a1a1a6">API tool</text>
      <line x1={70} y1={168} x2={130} y2={192} stroke="rgba(255,255,255,0.1)" />
      <line x1={160} y1={168} x2={160} y2={192} stroke="rgba(255,255,255,0.1)" />
      <line x1={250} y1={168} x2={190} y2={192} stroke="rgba(255,255,255,0.1)" />
      <rect x={96} y={192} width={128} height={30} rx={8} fill="rgba(219,4,0,0.12)" stroke="rgba(219,4,0,0.3)" />
      <text x={160} y={211} textAnchor="middle" fontSize={11} fill="#f5f5f7">Automated output</text>
    </svg>
  );
}

function QaDiagram(): ReactElement {
  return (
    <svg {...baseSvgProps}>
      <text x={20} y={22} fontSize={10} fill="#6e6e73" fontWeight={600} letterSpacing="0.06em">TEST SUITE</text>
      <g>
        <circle cx={34} cy={44} r={7} fill="rgba(0,200,100,0.2)" stroke="rgba(0,200,100,0.5)" />
        <text x={34} y={48} textAnchor="middle" fontSize={8} fill="#4caf50">✓</text>
        <rect x={48} y={38} width={100} height={12} rx={2} fill="rgba(255,255,255,0.06)" />
        <text x={52} y={48} fontSize={9} fill="#a1a1a6">Auth flow — login</text>
        <text x={270} y={48} fontSize={9} fill="#4caf50" textAnchor="end">12ms</text>
      </g>
      <g>
        <circle cx={34} cy={64} r={7} fill="rgba(0,200,100,0.2)" stroke="rgba(0,200,100,0.5)" />
        <text x={34} y={68} textAnchor="middle" fontSize={8} fill="#4caf50">✓</text>
        <rect x={48} y={58} width={120} height={12} rx={2} fill="rgba(255,255,255,0.06)" />
        <text x={52} y={68} fontSize={9} fill="#a1a1a6">Checkout — payment</text>
        <text x={270} y={68} fontSize={9} fill="#4caf50" textAnchor="end">34ms</text>
      </g>
      <g>
        <circle cx={34} cy={84} r={7} fill="rgba(219,4,0,0.2)" stroke="rgba(219,4,0,0.5)" />
        <text x={34} y={88} textAnchor="middle" fontSize={9} fill="#DB0400">✗</text>
        <rect x={48} y={78} width={90} height={12} rx={2} fill="rgba(255,255,255,0.06)" />
        <text x={52} y={88} fontSize={9} fill="#a1a1a6">API — rate limit</text>
        <text x={270} y={88} fontSize={9} fill="#DB0400" textAnchor="end">FAIL</text>
      </g>
      <g>
        <circle cx={34} cy={104} r={7} fill="rgba(0,200,100,0.2)" stroke="rgba(0,200,100,0.5)" />
        <text x={34} y={108} textAnchor="middle" fontSize={8} fill="#4caf50">✓</text>
        <rect x={48} y={98} width={110} height={12} rx={2} fill="rgba(255,255,255,0.06)" />
        <text x={52} y={108} fontSize={9} fill="#a1a1a6">Search — indexing</text>
        <text x={270} y={108} fontSize={9} fill="#4caf50" textAnchor="end">8ms</text>
      </g>
      <line x1={20} y1={126} x2={300} y2={126} stroke="rgba(255,255,255,0.07)" />
      <text x={20} y={146} fontSize={10} fill="#6e6e73" fontWeight={600} letterSpacing="0.06em">PERFORMANCE</text>
      <text x={20} y={166} fontSize={10} fill="#a1a1a6">LCP</text>
      <rect x={60} y={158} width={180} height={8} rx={4} fill="rgba(255,255,255,0.06)" />
      <rect x={60} y={158} width={90} height={8} rx={4} fill="rgba(0,200,100,0.5)" />
      <text x={248} y={167} fontSize={10} fill="#4caf50">1.2s</text>
      <text x={20} y={186} fontSize={10} fill="#a1a1a6">FID</text>
      <rect x={60} y={178} width={180} height={8} rx={4} fill="rgba(255,255,255,0.06)" />
      <rect x={60} y={178} width={30} height={8} rx={4} fill="rgba(0,200,100,0.5)" />
      <text x={248} y={187} fontSize={10} fill="#4caf50">18ms</text>
      <text x={20} y={206} fontSize={10} fill="#a1a1a6">CLS</text>
      <rect x={60} y={198} width={180} height={8} rx={4} fill="rgba(255,255,255,0.06)" />
      <rect x={60} y={198} width={12} height={8} rx={4} fill="rgba(0,200,100,0.5)" />
      <text x={248} y={207} fontSize={10} fill="#4caf50">0.02</text>
      <text x={20} y={228} fontSize={9} fill="#6e6e73">AI-generated test cases &amp; regression checks</text>
      <circle cx={270} cy={240} r={28} fill="rgba(0,200,100,0.1)" stroke="rgba(0,200,100,0.3)" strokeWidth={1.5} />
      <text x={270} y={236} textAnchor="middle" fontSize={16} fill="#4caf50" fontWeight={700}>97</text>
      <text x={270} y={250} textAnchor="middle" fontSize={9} fill="#6e6e73">Score</text>
    </svg>
  );
}

function GrowthDiagram(): ReactElement {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DB0400" stopOpacity={0.25} />
          <stop offset="100%" stopColor="#DB0400" stopOpacity={0} />
        </linearGradient>
      </defs>
      <text x={20} y={22} fontSize={10} fill="#6e6e73" fontWeight={600} letterSpacing="0.06em">MONTHLY ACTIVE USERS</text>
      <line x1={40} y1={32} x2={40} y2={180} stroke="rgba(255,255,255,0.08)" />
      <line x1={40} y1={180} x2={300} y2={180} stroke="rgba(255,255,255,0.08)" />
      <line x1={40} y1={130} x2={300} y2={130} stroke="rgba(255,255,255,0.04)" strokeDasharray="3,4" />
      <line x1={40} y1={80} x2={300} y2={80} stroke="rgba(255,255,255,0.04)" strokeDasharray="3,4" />
      <path d="M50,168 L90,158 L130,145 L170,130 L210,108 L250,82 L290,50" stroke="rgba(219,4,0,0.8)" strokeWidth={2} fill="none" strokeLinecap="round" />
      <path d="M50,168 L90,158 L130,145 L170,130 L210,108 L250,82 L290,50 L290,180 L50,180Z" fill="url(#chartFill)" />
      <circle cx={50} cy={168} r={3} fill="#DB0400" />
      <circle cx={90} cy={158} r={3} fill="#DB0400" />
      <circle cx={130} cy={145} r={3} fill="#DB0400" />
      <circle cx={170} cy={130} r={3} fill="#DB0400" />
      <circle cx={210} cy={108} r={3} fill="#DB0400" />
      <circle cx={250} cy={82} r={3} fill="#DB0400" />
      <circle cx={290} cy={50} r={5} fill="#fff" stroke="#DB0400" strokeWidth={2} />
      <rect x={232} y={28} width={76} height={20} rx={4} fill="rgba(219,4,0,0.9)" />
      <text x={270} y={41} textAnchor="middle" fontSize={10} fill="#fff" fontWeight={600}>AI: +124%</text>
      <text x={50} y={196} textAnchor="middle" fontSize={9} fill="#6e6e73">Jan</text>
      <text x={130} y={196} textAnchor="middle" fontSize={9} fill="#6e6e73">Mar</text>
      <text x={210} y={196} textAnchor="middle" fontSize={9} fill="#6e6e73">May</text>
      <text x={290} y={196} textAnchor="middle" fontSize={9} fill="#6e6e73">Jul</text>
      <rect x={20} y={210} width={80} height={44} rx={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <text x={60} y={228} textAnchor="middle" fontSize={14} fill="#f5f5f7" fontWeight={700}>4.2×</text>
      <text x={60} y={244} textAnchor="middle" fontSize={9} fill="#6e6e73">ROAS</text>
      <rect x={120} y={210} width={80} height={44} rx={8} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <text x={160} y={228} textAnchor="middle" fontSize={14} fill="#f5f5f7" fontWeight={700}>32%</text>
      <text x={160} y={244} textAnchor="middle" fontSize={9} fill="#6e6e73">Conversion</text>
      <rect x={220} y={210} width={80} height={44} rx={8} fill="rgba(219,4,0,0.1)" stroke="rgba(219,4,0,0.3)" />
      <text x={260} y={228} textAnchor="middle" fontSize={14} fill="#DB0400" fontWeight={700}>−18%</text>
      <text x={260} y={244} textAnchor="middle" fontSize={9} fill="#6e6e73">Churn</text>
    </svg>
  );
}

export const SERVICE_DIAGRAMS: Record<string, () => ReactElement> = {
  strategy: StrategyDiagram,
  design: DesignDiagram,
  engineering: EngineeringDiagram,
  automation: AutomationDiagram,
  qa: QaDiagram,
  growth: GrowthDiagram,
};
