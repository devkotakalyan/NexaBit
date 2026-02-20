function card({service, description, img}) {
  return (
    <div className="card bg-[#F0F4F8] p-6 rounded-lg shadow-md w-full md:w-1/3">
      <h3 className="text-xl font-bold mb-2">{service}</h3>
      <img
        src={img}
        alt={service}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <p>{description}</p>
    </div>
  );
}

export default card;