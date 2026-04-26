export default function Home() {
  const categories = async () => {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories",
    );

    const data = await res.json();
    return data.data;
  };

  return (
    <div className="grid grid-cols-4 container mx-auto">
      <div className="bg-blue-300">
        <h1 className="text-[#403F3F] text-xl font-semibold">All Categories</h1>
      </div>
      <div className="bg-green-300 col-span-2">
        <h1 className="text-[#403F3F] text-xl font-semibold">
          Dragon News Home
        </h1>
      </div>
      <div className="bg-red-300">
        <h1 className="text-[#403F3F] text-xl font-semibold">Login With</h1>
      </div>
    </div>
  );
}
