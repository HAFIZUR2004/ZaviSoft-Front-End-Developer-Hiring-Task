"use client";

export default function ReviewSection() {
  return (
    <section className="bg-[#E7E7E3] py-12">
      <div className="container mx-auto px-6">

        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">REVIEWS</h2>
          <button className="text-sm text-blue-600">SEE ALL</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm p-4">
              <p className="text-sm font-semibold mb-2">Good Quality</p>
              <p className="text-xs text-gray-500 mb-4">★★★★★ 5.0</p>
              <img
                src={`/review${item}.png`}
                alt="review"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
