import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate - Modern Web App Template</title>
        <meta name="description" content="A modern Next.js boilerplate with React 19, shadcn/ui, and Tailwind CSS" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="font-bold text-xl">Next.js Boilerplate</div>
            <nav className="flex gap-4">
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1">
          <section className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl font-bold tracking-tight">
                Build Modern Web Apps
                <span className="block text-primary mt-2">Faster Than Ever</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A production-ready Next.js 16 boilerplate with React 19, shadcn/ui components,
                and Tailwind CSS. Everything you need to start building amazing applications.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Link href="/auth/signup">
                  <Button size="lg">Get Started Free</Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="container mx-auto px-4 py-20 bg-muted/50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Next.js 16</CardTitle>
                    <CardDescription>Latest Next.js with Turbopack</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Blazing fast development with the latest Next.js features and optimizations.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>React 19</CardTitle>
                    <CardDescription>Modern React features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Built with the latest React version for optimal performance and developer experience.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>shadcn/ui</CardTitle>
                    <CardDescription>Beautiful UI components</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Pre-configured with shadcn/ui for accessible and customizable components.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tailwind CSS</CardTitle>
                    <CardDescription>Utility-first styling</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Rapidly build modern designs with Tailwind CSS utility classes.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Authentication Ready</CardTitle>
                    <CardDescription>Auth pages included</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Pre-built authentication pages including sign in, sign up, and password reset.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Production Ready</CardTitle>
                    <CardDescription>Deploy with confidence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    Optimized for production with best practices and performance in mind.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>Built with Next.js 16, React 19, and shadcn/ui</p>
          </div>
        </footer>
      </div>
    </>
  )
}
