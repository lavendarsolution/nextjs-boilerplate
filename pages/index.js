import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate - Build Modern Web Apps Faster</title>
        <meta name="description" content="A production-ready Next.js 16 boilerplate with React 19, shadcn/ui, and Tailwind CSS. Start building amazing applications in minutes." />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NB</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline">Next.js Boilerplate</span>
            </div>
            <nav className="flex items-center gap-2 sm:gap-4">
              <Link href="#features" className="text-sm font-medium hidden sm:inline-block hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#tech" className="text-sm font-medium hidden sm:inline-block hover:text-primary transition-colors">
                Tech Stack
              </Link>
              <Link href="/auth/signin">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1">
          <section className="relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" style={{
              maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
            }} />

            <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <Badge variant="secondary" className="text-sm px-4 py-1">
                  🚀 Next.js 16 + React 19 + shadcn/ui
                </Badge>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  Build Modern Web Apps
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mt-2">
                    10x Faster
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A production-ready Next.js boilerplate with the latest tech stack.
                  Start building amazing applications in minutes, not hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/auth/signup">
                    <Button size="lg" className="w-full sm:w-auto text-base px-8">
                      Get Started Free
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                      Explore Features
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">Type Safe</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">Components</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold">0ms</div>
                    <div className="text-sm text-muted-foreground">Setup Time</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                  <Badge variant="outline" className="text-sm">Features</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">Everything You Need to Succeed</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Packed with powerful features and best practices to help you ship faster
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Feature Cards */}
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <CardTitle>Lightning Fast</CardTitle>
                      <CardDescription>Next.js 16 with Turbopack</CardDescription>
                    </CardHeader>
                    <CardContent>
                      Experience blazing fast development with the latest Next.js features and optimizations. Hot reload in milliseconds.
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <CardTitle>Beautiful UI</CardTitle>
                      <CardDescription>shadcn/ui Components</CardDescription>
                    </CardHeader>
                    <CardContent>
                      Pre-configured with shadcn/ui for beautiful, accessible, and highly customizable UI components out of the box.
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <CardTitle>Fully Customizable</CardTitle>
                      <CardDescription>Tailwind CSS Powered</CardDescription>
                    </CardHeader>
                    <CardContent>
                      Built with Tailwind CSS utility classes. Customize every aspect of your design with ease and consistency.
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <CardTitle>Auth Ready</CardTitle>
                      <CardDescription>Complete Authentication</CardDescription>
                    </CardHeader>
                    <CardContent>
                      Pre-built authentication pages including sign in, sign up, and password reset. Ready to integrate with your backend.
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <CardTitle>Developer First</CardTitle>
                      <CardDescription>Best Practices Built-in</CardDescription>
                    </CardHeader>
                    <CardContent>
                      Follow industry best practices with ESLint, proper project structure, and optimized configurations out of the box.
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <CardTitle>Production Ready</CardTitle>
                      <CardDescription>Deploy Instantly</CardDescription>
                    </CardHeader>
                    <CardContent>
                      Optimized for production with automatic code splitting, image optimization, and performance best practices.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech" className="py-24 sm:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                  <Badge variant="outline" className="text-sm">Tech Stack</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">Built with Modern Technologies</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Leveraging the latest and greatest tools in the web development ecosystem
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex gap-4 p-6 rounded-lg border bg-card">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                        <span className="text-white dark:text-black font-bold text-xl">N</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Next.js 16</h3>
                      <p className="text-sm text-muted-foreground">
                        The React framework for production with Turbopack for lightning-fast builds and hot reload.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 rounded-lg border bg-card">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-[#61DAFB] flex items-center justify-center">
                        <span className="text-black font-bold text-xl">R</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">React 19</h3>
                      <p className="text-sm text-muted-foreground">
                        The latest version of React with improved performance, new features, and better developer experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 rounded-lg border bg-card">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-[#38BDF8] flex items-center justify-center">
                        <span className="text-white font-bold text-xl">T</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Tailwind CSS</h3>
                      <p className="text-sm text-muted-foreground">
                        Utility-first CSS framework for rapidly building custom designs without leaving your HTML.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 rounded-lg border bg-card">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">S</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">shadcn/ui</h3>
                      <p className="text-sm text-muted-foreground">
                        Beautifully designed components built with Radix UI and Tailwind CSS. Accessible and customizable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 sm:py-32 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-primary/10 p-12 sm:p-16 text-center">
                  <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl sm:text-5xl font-bold">
                      Ready to Build Something Amazing?
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                      Join thousands of developers building modern web applications with our boilerplate.
                      Get started for free today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Link href="/auth/signup">
                        <Button size="lg" className="w-full sm:w-auto text-base px-8">
                          Start Building Now
                        </Button>
                      </Link>
                      <Link href="/auth/signin">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                          Sign In
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">NB</span>
                  </div>
                  <span className="font-bold">Next.js Boilerplate</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Build modern web applications faster with our production-ready boilerplate.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
                  <li><Link href="#tech" className="hover:text-foreground transition-colors">Tech Stack</Link></li>
                  <li><Link href="/auth/signup" className="hover:text-foreground transition-colors">Get Started</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">License</a></li>
                </ul>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© 2024 Next.js Boilerplate. Built with Next.js 16, React 19, and shadcn/ui.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
