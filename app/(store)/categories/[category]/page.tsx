import Image from "next/image";
import Link from "next/link";
import { designs } from "@/data/designs";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const filteredDesigns = designs.filter(
    (design) => design.category === category,
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-heading mb-10 capitalize">{category}</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {filteredDesigns.map((design) => (
          <Link key={design.id} href={`/design/${design.id}`} className="group">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={design.image}
                alt={design.title}
                width={400}
                height={300}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition"
              />
            </div>

            <h3 className="mt-3 text-lg font-medium">{design.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
