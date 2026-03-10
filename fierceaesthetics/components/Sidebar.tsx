"use client"

import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center px-6 z-40">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          ☰
        </button>

        <p className="ml-4 font-medium tracking-wide">
          Fierce Aesthetics
        </p>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >

        <div className="p-8 space-y-6 text-lg">

          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>

          <NavLinks close={() => setOpen(false)} />

        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 border-r bg-white p-10 flex-col justify-between">

        <div className="space-y-10">

          <p className="text-xl font-medium tracking-wide">
            Fierce Aesthetics
          </p>

          <NavLinks />

        </div>

        <p className="text-sm text-neutral-400">
          © Fierce Aesthetics
        </p>

      </aside>
    </>
  )
}

function NavLinks({ close }: { close?: () => void }) {

  const link = "block text-[rgb(var(--gold))] hover:opacity-70 transition"

  return (
    <nav className="space-y-4">

      <Link href="/" onClick={close} className={link}>
        Home
      </Link>

      <Link href="/about" onClick={close} className={link}>
        About Me
      </Link>

      <div className="space-y-2">

        <Link href="/treatments" onClick={close} className={link}>
          Treatments & Pricing
        </Link>

        <div className="pl-4 text-sm space-y-1 text-neutral-600">

          <Link href="/treatments/lash-brow" onClick={close}>
            Lash & Brows
          </Link>

          <Link href="/treatments/body-contouring" onClick={close}>
            Body Contouring
          </Link>

          <Link href="/treatments/million-dollar" onClick={close}>
            Million Dollar
          </Link>

        </div>

      </div>

      <Link href="/gallery" onClick={close} className={link}>
        Gallery
      </Link>

      <Link href="/contact" onClick={close} className={link}>
        Contact / Book
      </Link>

    </nav>
  )
}