import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2, Sparkles, Shield, Workflow, Mail } from 'lucide-react'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-sm text-gray-700 shadow-sm ring-1 ring-black/5">
      <Sparkles className="h-4 w-4 text-purple-500" />
      {children}
    </span>
  )
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow && (
        <div className="mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-600">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-600">{subtitle}</p>
      )}
    </div>
  )
}

function LogoRow() {
  return (
    <div className="mt-8 flex items-center justify-center gap-8 opacity-80">
      {/* Microsoft logo */}
      <div className="flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 23 23" aria-label="Microsoft" role="img">
          <rect width="10" height="10" x="1" y="1" fill="#F25022"/>
          <rect width="10" height="10" x="12" y="1" fill="#7FBA00"/>
          <rect width="10" height="10" x="1" y="12" fill="#00A4EF"/>
          <rect width="10" height="10" x="12" y="12" fill="#FFB900"/>
        </svg>
        <span className="text-sm font-medium text-gray-700">Microsoft 365</span>
      </div>
      {/* Google logo */}
      <div className="flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 48 48" aria-label="Google" role="img">
          <path fill="#EA4335" d="M24 9.5c3.7 0 6.3 1.6 7.8 3l5.3-5.2C33.9 4.7 29.5 3 24 3 14.7 3 6.7 8.3 3 16l6.9 5.3C11.8 14.9 17.4 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-2.8-.4-4.1H24v7.7h12.8c-.3 2-1.8 5-5 7.1l7.7 6c4.5-4.1 7-10.1 7-16.7z"/>
          <path fill="#FBBC05" d="M9.9 28.1c-.5-1.6-.8-3.3-.8-5.1s.3-3.5.8-5.1L3 12.6C1.6 15.6.8 19 .8 23s.8 7.4 2.2 10.4l6.9-5.3z"/>
          <path fill="#34A853" d="M24 46c6.5 0 12-2.1 16-5.7l-7.7-6c-2.1 1.4-4.9 2.3-8.3 2.3-6.6 0-12.2-5.4-13.9-12.5L3 33.4C6.7 41.7 14.7 46 24 46z"/>
        </svg>
        <span className="text-sm font-medium text-gray-700">Google Workspace</span>
      </div>
    </div>
  )}
}

function Feature({ icon: Icon, title, desc, tag }) {
  return (
    <div className="group relative rounded-2xl bg-white/60 backdrop-blur p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white p-3 shadow">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
          {tag && (
            <span className="mt-3 inline-flex text-xs font-medium rounded-full bg-purple-50 text-purple-700 px-2 py-1">{tag}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-gray-900">
      {/* Hero Section with Spline cover */}
      <section className="relative h-[78vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* subtle gradient/top overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 h-full flex flex-col">
          {/* Nav */}
          <div className="pt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 shadow-md" />
              <span className="text-lg font-semibold tracking-tight">Makini AI</span>
            </div>
            <a href="mailto:sales@makini.tech" className="inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-4 py-2 text-sm shadow hover:bg-black">
              <Mail className="h-4 w-4" /> Talk to Sales
            </a>
          </div>

          <div className="flex-1 flex items-center">
            <div className="max-w-3xl">
              <div className="mb-4"><Pill>Automation for modern legal teams</Pill></div>
              <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
                Automate legal work. Deliver early. Delight clients.
              </h1>
              <p className="mt-5 text-lg text-gray-700 max-w-2xl">
                Makini AI helps law firms and in‑house legal teams automate workflows, fulfil client requests with precision, and track work perfectly — from intake to signed agreement.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a href="mailto:sales@makini.tech" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-white font-medium shadow hover:opacity-95">
                  Get a demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#products" className="inline-flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur px-5 py-3 text-gray-800 font-medium shadow ring-1 ring-black/5 hover:bg-white">
                  Explore products
                </a>
              </div>
              <LogoRow />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative py-20 sm:py-24">
        <div className="absolute inset-0 -z-0">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-purple-100/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeader
            eyebrow="Products"
            title="Everything a legal team needs to operate on autopilot"
            subtitle="We combine automation, training, and contract lifecycle management so your team can focus on high‑value legal strategy."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
              icon={Workflow}
              title="Workflow Automation"
              desc="Design and automate matter intake, document generation, approvals, and handoffs. Reduce turnaround time from days to minutes."
              tag="Core"
            />
            <Feature
              icon={CheckCircle2}
              title="Custom Automations"
              desc="We build tailored automations on Microsoft 365 and Google Workspace to fit your exact processes and tools."
              tag="Microsoft & Google"
            />
            <Feature
              icon={Shield}
              title="Training & Enablement"
              desc="Hands‑on training for legal teams to apply AI safely and effectively, with playbooks and guidance for everyday use."
              tag="Adoption"
            />
          </div>

          {/* Integrations row explicitly mentions suites */}
          <div className="mt-12 rounded-2xl bg-white/70 backdrop-blur p-6 ring-1 ring-black/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-700 text-center sm:text-left">
                We integrate deeply with your existing stack: Microsoft 365 and Google Workspace.
              </p>
              <LogoRow />
            </div>
          </div>
        </div>
      </section>

      {/* CLM: Grodd */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeader
            eyebrow="Contract Lifecycle Management"
            title="Grodd — automate your entire contract process"
            subtitle="From request to signature to renewal, Grodd centralizes templates, redlines, approvals, and analytics."
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
              <ul className="space-y-3">
                {[
                  'Self‑serve intake with smart routing',
                  'Template management and AI‑assisted drafting',
                  'Approval workflows with audit trails',
                  'eSignature and repository with search',
                  'Renewal reminders and performance analytics',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="mailto:sales@makini.tech?subject=Grodd%20CLM%20Demo" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 font-medium shadow hover:bg-black">
                  Explore Grodd <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 ring-1 ring-black/5 p-8 flex items-center justify-center text-center">
              <div>
                <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600" />
                <h3 className="text-2xl font-semibold">Built for legal precision</h3>
                <p className="mt-3 text-gray-700">
                  Grodd is purpose‑built for legal teams — secure, compliant, and fast. Automate the busywork; keep the judgment where it belongs: with your lawyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom products */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeader
            eyebrow="Consulting & Build"
            title="We diagnose your workflows and build custom products"
            subtitle="After mapping your processes end‑to‑end, we deliver tailored systems that fit your unique legal operations."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Process Diagnosis',
                desc: 'Workshops and discovery to map current workflows, tooling, and risk points.'
              },
              {
                title: 'Custom Solutions',
                desc: 'Automations, mini‑apps, and integrations that snap into your stack.'
              },
              {
                title: 'Change Management',
                desc: 'Training, documentation, and rollout to ensure adoption and ROI.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/70 backdrop-blur p-6 ring-1 ring-black/5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="rounded-2xl bg-gray-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to automate your legal ops?</h3>
              <p className="mt-2 text-white/80">Email us and we’ll respond within one business day.</p>
            </div>
            <a href="mailto:sales@makini.tech" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 font-medium shadow hover:bg-white/90">
              Contact sales <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Makini AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
