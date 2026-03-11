import Link from "next/link";
import { CartIcon, HeartIcon, UserIcon } from "@/components/Icons";
import { siteConfig } from "@/confing/site";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading text-primary">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex gap-8 font-body text-text">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-5 text-text">
          <HeartIcon className="cursor-pointer" />
          <CartIcon className="cursor-pointer" />
          <UserIcon className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
