const categories = [
  { name: "Sofas", image: "/categories/sofa.jpg", slug: "sofas" },
  { name: "Beds", image: "/categories/bed.jpg", slug: "beds" },
  { name: "Wardrobes", image: "/categories/wardrobe.jpg", slug: "wardrobes" },
  { name: "LCD Panels", image: "/categories/lcd-panel.jpg", slug: "lcd-panels" },
  { name: "Doors", image: "/categories/door.jpg", slug: "doors" },
  { name: "Windows", image: "/categories/window.jpg", slug: "windows" },
  { name: "Tables", image: "/categories/table.jpg", slug: "tables" },
  { name: "Chairs", image: "/categories/chair.jpg", slug: "chairs" },
]

import Image from "next/image"
import Link from "next/link"

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading">
          What We Can Build For You
        </h2>
        <p className="text-gray-500 mt-2">
          Custom furniture crafted exactly to your needs
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group"
          >

            <div className="relative overflow-hidden rounded-lg">

              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {category.name}
                </h3>
              </div>

            </div>

          </Link>
        ))}

      </div>

    </section>
  )
}