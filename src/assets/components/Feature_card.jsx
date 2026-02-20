function FeatureCard({ title1, title2, description1, description2, img }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 items-center bg-[#F0F4F8] p-8 rounded-lg shadow-md">
        <div className="text-left">
          <h1 className="text-2xl font-bold text-[#0A345D] mb-4">{title1}</h1>
          <p className="text-[#0A345D] mb-4">
            {description1}
          </p>
          <h1 className="text-2xl font-bold text-[#0A345D] mb-4">{title2}</h1>
          <p className="text-[#0A345D]">
            {description2}
          </p>
        </div>
        <div className="Image_left">
          <img
            src={img}
            alt="Innovation"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
