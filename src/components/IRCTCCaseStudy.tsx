import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Users, Zap, TrendingUp } from "lucide-react";

interface Props {
  onBack: () => void;
}

const IRCTCCaseStudy = ({ onBack }: Props) => {
  return (
    <section className="py-12 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-primary/10 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            UI/UX Case Study
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            IRCTC Website Redesign
          </h1>
          <p className="text-xl text-muted-foreground">
            Simplifying India's railway booking experience through user-centered design
          </p>
        </div>

        {/* Problem */}
        <Card className="mb-12 border-2 shadow-elegant animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-3xl font-display flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              The IRCTC website is one of the most visited portals in India, but users often face significant challenges:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <span className="text-foreground">Cluttered and outdated design overwhelming users</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <span className="text-foreground">Complex ticket booking flow with too many steps</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <span className="text-foreground">Poor navigation and accessibility issues</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <span className="text-foreground">Slow user experience on mobile devices</span>
              </li>
            </ul>
            <p className="text-base text-muted-foreground italic mt-4">
              These issues result in user frustration, booking drop-offs, and inefficiency.
            </p>
          </CardContent>
        </Card>

        {/* Research */}
        <Card className="mb-12 border-2 shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle className="text-3xl font-display flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              Research & Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Conducted <strong>heuristic evaluation</strong> of the existing website</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Studied <strong>user feedback and reviews</strong> highlighting booking complexity</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Identified <strong>pain points</strong>: confusing navigation, overloaded homepage, lack of visual hierarchy</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">Compared with other booking platforms for <strong>best practices</strong></span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Process */}
        <Card className="mb-12 border-2 shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-3xl font-display flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              Design Process
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-foreground">1. Wireframing</h4>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Sketched low-fidelity wireframes to simplify booking flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Focused on reducing the number of clicks required</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-foreground">2. Prototyping in Figma</h4>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Designed high-fidelity mockups with a modern UI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Used a clean layout, bold headings, and pastel colors for better readability</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-foreground">3. User Journey Improvements</h4>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Introduced a <strong>step-by-step guided booking flow</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Added <strong>quick search bar</strong> for trains, tickets, and PNR status</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Improved <strong>mobile responsiveness</strong> with a minimal layout</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="mb-12 border-2 shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <CardTitle className="text-3xl font-display flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              Final Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Homepage:</strong>
                  <span className="text-foreground"> Minimal design with clear sections for booking, offers, and information</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Booking Flow:</strong>
                  <span className="text-foreground"> Streamlined into <strong>3 simple steps</strong> – Search → Select → Pay</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Navigation:</strong>
                  <span className="text-foreground"> Sticky header with well-organized menu items</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Accessibility:</strong>
                  <span className="text-foreground"> Larger fonts, better contrast, and mobile-first design</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Visuals:</strong>
                  <span className="text-foreground"> Clean icons, whitespace, and intuitive forms</span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Impact */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="text-3xl font-display flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur border">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-foreground">Reduction in booking clicks</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur border">
                <div className="text-4xl font-bold text-secondary mb-2">↑</div>
                <p className="text-foreground">Improved task completion time</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur border">
                <div className="text-4xl font-bold text-accent mb-2">✓</div>
                <p className="text-foreground">More trustworthy and user-friendly experience</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur border">
                <div className="text-4xl font-bold text-primary mb-2">∀</div>
                <p className="text-foreground">Enhanced usability for all age groups</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IRCTCCaseStudy;
