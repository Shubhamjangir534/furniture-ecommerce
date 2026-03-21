"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-surface text-on-surface font-body h-screen selection:bg-primary-fixed selection:text-design-primary overflow-hidden relative flex flex-col items-center justify-center">
      <div className="fixed inset-0 z-0 h-full w-full">
        <Image 
          alt="Intricate Rajasthani haveli courtyard architecture" 
          src="/login/hawamahal.jpg" 
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/80 to-surface pointer-events-none"></div>
      </div>
      
      {/* Main Content Canvas */}
      <main className="relative z-10 w-full flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-lg">
          
          {/* Header / Greeting Section */}
          <header className="mb-8 text-center">
            <div className="inline-block mb-2">
              <span className="material-symbols-outlined text-tertiary text-4xl">castle</span>
            </div>
            <h1 className="font-hindi text-4xl md:text-5xl text-design-primary mb-2 tracking-wide">पधारो सा</h1>
            <p className="font-headline text-base md:text-lg italic text-on-surface-variant tracking-tight">Welcome to the Editorial</p>
            <div className="w-10 h-0.5 bg-tertiary mx-auto mt-6"></div>
          </header>
          
          {/* Login Form Container */}
          <section className="bg-surface-container-lowest/90 backdrop-blur-xl p-8 rounded-xl shadow-[0_40px_80px_-20px_rgba(30,27,19,0.12)] border border-outline-variant/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Email ID Field */}
              <div className="relative">
                <div className="flex justify-between items-baseline mb-1">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant" htmlFor="username">Email ID</label>
                  <span className="font-hindi text-sm text-tertiary">ईमेल आईडी</span>
                </div>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline/40 py-2 px-0 focus:ring-0 focus:border-design-primary focus:outline-none transition-colors text-on-surface placeholder:text-outline-variant/60 font-label tracking-wide text-sm" 
                  id="username" 
                  name="username" 
                  placeholder="john@example.com" 
                  type="email"
                />
              </div>
              
              {/* Password Field */}
              <div className="relative">
                <div className="flex justify-between items-baseline mb-1">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant" htmlFor="password">Password</label>
                  <span className="font-hindi text-sm text-tertiary">पासवर्ड</span>
                </div>
                <div className="relative">
                  <input 
                    className="w-full bg-transparent border-0 border-b border-outline/40 py-2 px-0 focus:ring-0 focus:border-design-primary focus:outline-none transition-colors text-on-surface placeholder:text-outline-variant/60 font-label tracking-widest pr-10 text-sm" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"}
                  />
                  <button 
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-design-primary transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="pt-2 space-y-4">
                <button 
                  className="w-full py-4 bg-gradient-to-r from-design-primary to-primary-container text-on-primary font-label text-sm font-bold uppercase tracking-[0.25em] rounded-sm active:scale-[0.98] transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30" 
                  type="submit"
                >
                  Sign In
                </button>
                
                <div className="flex items-center gap-4 w-full px-2">
                  <div className="flex-1 h-[1px] bg-outline-variant/30"></div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">or</span>
                  <div className="flex-1 h-[1px] bg-outline-variant/30"></div>
                </div>

                <button 
                  className="w-full py-3 bg-surface-container-high/50 text-on-surface font-label text-xs uppercase tracking-[0.1em] rounded-sm active:scale-[0.98] border border-outline/20 hover:bg-surface-container-highest flex items-center justify-center gap-3 transition-colors" 
                  type="button"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </form>
            
            {/* Secondary Actions */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <a className="font-body italic text-xs text-design-secondary hover:text-design-primary transition-colors underline underline-offset-4 decoration-secondary/30" href="#">Forgotten your credentials?</a>
            </div>
          </section>
          
          {/* Aesthetic Footer Motif */}
          <footer className="mt-8 text-center opacity-40">
            <div className="flex justify-center gap-6 mb-4">
              <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>fiber_manual_record</span>
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>fiber_manual_record</span>
            </div>
            <p className="font-label text-[8px] uppercase tracking-[0.4em] text-on-surface-variant">The Heritage Editorial • Artisanal Rajasthan</p>
          </footer>
        </div>
      </main>
      
      {/* Global Minimal Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-50 pointer-events-none">
        <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40 hidden md:block">
            © 2024 The Heritage Editorial
        </div>
        <div className="flex gap-4 md:gap-8 pointer-events-auto mx-auto md:mx-0">
          <a className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60 hover:text-tertiary transition-colors" href="#">Privacy</a>
          <a className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60 hover:text-tertiary transition-colors" href="#">Legal</a>
        </div>
      </div>
    
    </div>
  );
}
