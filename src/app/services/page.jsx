import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const data = [
    {
      _id: "60d21b4667d0d8992e610c85",
      service_name: "EcoClean",
      service_image: "/service_img_1.png",
      service_description:
        "EcoClean offers environmentally friendly cleaning services for homes and offices, using only non-toxic and biodegradable products.",
    },
    {
      _id: "60d21b4667d0d8992e610c86",
      service_name: "TechFix",
      service_image: "/service_img_2.png",
      service_description:
        "TechFix provides comprehensive repair and maintenance services for all your electronic devices, ensuring they run smoothly and efficiently.",
    },
    {
      _id: "60d21b4667d0d8992e610c87",
      service_name: "FitLife",
      service_image: "/service_img_3.png",
      service_description:
        "FitLife offers personalized fitness training and nutrition plans to help you achieve your health and wellness goals.",
    },
  ];
  return (
    <div>
      <p className="font-bold text-3xl ">ServicesPage</p>
      <div className="flex gap-5 my-6">
        {data.map((d) => (
          <div className="h-32 w-32">
            <Link href={`/services/${d._id}`}>
              <img className="h-full w-full" src={d.service_image} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
