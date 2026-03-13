"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactSupportPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Support</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Contact <span className="text-primary">Support</span></h1>
            <p className="text-white/40 text-lg">We&apos;re here to help. Expect a response within 2 business hours.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              {[
                { icon: MessageCircle, label: "Live Chat", val: "Mon–Fri, 9 AM–6 PM EST", sub: "Average wait: &lt; 5 min", color: "text-primary" },
                { icon: Mail, label: "Email Support", val: "support@aie.io", sub: "Response within 2 hours", color: "text-blue-400" },
                { icon: Clock, label: "Response SLA", val: "2 Business Hours", sub: "For ticket submissions", color: "text-purple-400" },
              ].map(item => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-bold text-white text-sm">{item.val}</p>
                    <p className="text-white/30 text-xs mt-0.5" dangerouslySetInnerHTML={{ __html: item.sub }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Ticket Submitted!</h2>
                  <p className="text-white/40">We&apos;ll get back to you at <span className="text-primary">{form.email}</span> within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-lg font-bold mb-6">Submit a Ticket</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { label: "Full Name", key: "name", type: "text", placeholder: "John Doe" },
                      { label: "Email Address", key: "email", type: "email", placeholder: "you@email.com" },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          value={(form as any)[f.key]}
                          onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Briefly describe your issue"
                      required
                      value={form.subject}
                      onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Describe your issue in detail…"
                      required
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl bg-primary text-black font-bold hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all duration-300">
                    Submit Ticket
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
