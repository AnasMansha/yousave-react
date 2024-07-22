import React from "react";

const RecentViewed = () => {
  const recentImages = [
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJH_FDpSIj1UUtTfd92AimZhbc2tP5eKZ3UaVKSKm0QDUAHKI4NFMWsRX5F7VpEaRhpXG3YGwv48ZNYitJraUY5OohFu47&usqp=CAY",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSjjrUOWK9k6Y2D0xQSBbLLr5iuXNwGywVbyTwyRYVGcnBuOIyyAfLLQEV9MqdoaCMMHLMrdSyQV9RpA7oetEAsOyZugDc7_Q&usqp=CAY",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUMK-AuFw1XS5ttFc9cv23NFnZolce2bq7-EqWtx8xcgkxGMO5zMyjyQxoehkCmQ2xqjBWeLL0FYqw1VMvJg1hm4un8LOokA&usqp=CAY",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSWu0gj2JMGsdMFEJOiePzV-hIrd19HMor-AzdjoeIJ_3BRAZBt3e5IJWBgsFdh78bGXhin4SsiOtZbpVE69TgXN1ZXbXrq&usqp=CAY",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRAruul8VUO7WR4Uh5vCQxiQOgYgpwbAaJzpTSxt2FRkzLMn6siBM48r42YH3vXGpxLrKV8iaVVM2Djcg4fOvt1zXbM9ctk8A&usqp=CAY",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBcl7G677TmFc6JMQuicB-HM2M-Fd_Q510aCu_B7yIQ4kL5nFS62dtEc2PifMevp64eL51ooy1SsTguJByyCBcG0hB9F3Q&usqp=CAY",
  ];

  return (
    <section className="recent-products-wrapper mt-20 mx-5 flex justify-center">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Recently Viewed</h2>
        <div id="recently-viewed-products" className="recent-products flex flex-wrap justify-center">
          {recentImages.map((src, index) => (
            <img
              key={index}
              className="recent-image h-40 border border-gray-300 p-2 m-2 cursor-pointer"
              src={src}
              alt={`Recently viewed ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentViewed;
