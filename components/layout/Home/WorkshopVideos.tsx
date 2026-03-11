
const videos = [
  {
    id: "7SECYomYxQI",
    title: "Traditional Wood Carving Process",
  },
  {
    id: "SMs7YXjHsHc",
    title: "Polishing Handmade Furniture",
  },
  {
    id: "ZGdRDIhYgYw",
    title: "Crafting a Solid Wood Table",
  },
]

export default function WorkshopVideos() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
        
      <div className="text-center mb-10">
        <h2 className="text-3xl font-heading">Watch Our Craftsmanship</h2>
        <p className="text-gray-500 mt-2">
          See how our artisans bring wood to life.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map(video => (
          <iframe
            key={video.id}
            className="w-full h-64 rounded-lg"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            allowFullScreen
          />
        ))} 
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.youtube.com/@prakashjangir9435"
          target="_blank"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          आपणो YouTube Channel
        </a>
      </div>

    </section>
  )
}