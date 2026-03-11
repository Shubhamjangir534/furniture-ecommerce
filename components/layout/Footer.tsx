import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/Icons";
import { siteConfig } from "@/confing/site";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-5 gap-10">
        <div>
          <h2 className="text-2xl font-heading text-accent">
            {siteConfig.name}
          </h2>
          <p className="text-sm mt-3 text-gray-200">
            Handcrafted wooden furniture inspired by the rich craftsmanship of
            Rajasthan. Designed to bring warmth and heritage to modern homes.
          </p>
          <div className="flex gap-4 mt-4">
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
            <YoutubeIcon />
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            {siteConfig.products.map((product) => (
              <li key={product.name}>
                <Link href="#">{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Customer Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Track Order</Link>
            </li>
            <li>
              <Link href="#">Returns</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Shipping Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 text-center py-4 text-sm">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
