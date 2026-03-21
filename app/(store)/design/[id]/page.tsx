import Image from "next/image";
import { designs } from "@/data/designs";

export default async function DesignPage({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  const design = designs.find((item) => item.id === Number(id));
  if (!design) {
    return <div>Design not found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src={design.image}  
            alt={design.title}
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-heading mb-4">{design.title}</h1>
          <p className="text-gray-600 mb-6">{design.description}</p>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Available Wood Types</h3>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Sheesham Wood</li>
              <li>Teak Wood</li>
              <li>Mango Wood</li>
              <li>Custom Wood</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Finish Options</h3>
            <ul className="list-disc ml-5 text-gray-600">
              <li>Matte Finish</li>
              <li>Glossy Finish</li>
              <li>Natural Polish</li>
            </ul>
          </div>
          <a
            href="#order-form"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md"
          >
            Customize & Request Order
          </a>
        </div>
      </div>                            I
      <div id="order-form" className="mt-20">
        <h2 className="text-2xl font-heading mb-6">Customize Your Furniture</h2>

        <form className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-3 rounded-md"
          />

          <input
            type="text"
            placeholder="City"
            className="border p-3 rounded-md"
          />

          <input
            type="text"
            placeholder="Preferred Wood Type"
            className="border p-3 rounded-md"
          />

          <input
            type="text"
            placeholder="Dimensions (L x W x H)"
            className="border p-3 rounded-md"
          />

          <input
            type="text"
            placeholder="Finish / Polish"
            className="border p-3 rounded-md"
          />

          <textarea
            placeholder="Additional Requirements"
            className="border p-3 rounded-md md:col-span-2"
            rows={4}
          />

          <button
            type="submit"
            className="bg-secondary text-white px-6 py-3 rounded-md md:col-span-2"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
