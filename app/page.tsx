import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Zap, Shield, Users, Gauge } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-semibold">ProductHub</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-primary transition-colors">
                Features
              </a>
              <a href="#benefits" className="hover:text-primary transition-colors">
                Benefits
              </a>
              <a href="#pricing" className="hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Sign in</Button>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="/signup">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                  The complete platform to build the web
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                  Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the
                  best web experiences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
                  <a href="/signup">
                    Get a demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-card text-lg px-8 bg-transparent">
                  Explore the Product
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <img
                src="/dashboard-analytics-interface.png"
                alt="Product dashboard"
                className="w-full h-full object-cover rounded-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "days saved", value: "20+" },
              { label: "faster deployments", value: "6x" },
              { label: "uptime guarantee", value: "99.99%" },
              { label: "team collaboration", value: "100%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Everything you need to build faster</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Powerful features designed for modern development teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description:
                  "Deploy in seconds, not hours. Our optimized infrastructure ensures your apps load instantly.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description:
                  "Bank-level security with compliance certifications. Your data is always protected and encrypted.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Collaboration",
                description:
                  "Built-in tools for seamless collaboration. Work together in real-time with your entire team.",
              },
              {
                icon: <Gauge className="w-8 h-8" />,
                title: "Advanced Analytics",
                description: "Deep insights into performance. Track metrics that matter for your business growth.",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "API First",
                description:
                  "Flexible, powerful APIs. Build anything you can imagine with our comprehensive documentation.",
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Expert support available round the clock. Get help when you need it most.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Why teams choose ProductHub</h2>
              <ul className="space-y-4">
                {[
                  "Reduce deployment time by up to 90%",
                  "Scale to millions of users effortlessly",
                  "Integrate with your favorite tools",
                  "Comprehensive monitoring and logging",
                  "Global CDN for optimal performance",
                  "Zero-downtime deployments",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/team-collaboration-workspace.png"
                alt="Team collaboration"
                className="w-full rounded-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for getting started",
                features: ["Up to 10 projects", "5GB storage", "Community support", "Basic analytics"],
              },
              {
                name: "Professional",
                price: "$99",
                description: "For growing teams",
                features: [
                  "Unlimited projects",
                  "500GB storage",
                  "Priority support",
                  "Advanced analytics",
                  "Custom domains",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: [
                  "Everything in Pro",
                  "Unlimited storage",
                  "24/7 phone support",
                  "Custom integrations",
                  "SLA guarantee",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl border p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-primary bg-primary/10 scale-105 md:scale-100"
                    : "border-border bg-card/50 hover:border-primary/50"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <Button className="w-full mb-8 bg-primary hover:bg-primary/90" asChild>
                  <a href="/signup">Get Started</a>
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to ship faster?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Join hundreds of teams building the future of the web
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
              <a href="/signup">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card text-lg px-8 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2025 ProductHub. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
