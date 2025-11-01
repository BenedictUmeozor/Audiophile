const ProductFeatures = ({ product }: { product: T.Product }) => {
  return (
    <section className="grid grid-cols-[635px_350px] gap-x-[125px] gap-y-[120px] max-lg:grid-cols-1">
      <div>
        <h2 className="mb-8 text-[32px] leading-9 font-bold tracking-[1.14px] max-md:mb-6 max-md:text-[24px] max-md:tracking-[0.86px]">
          FEATURES
        </h2>
        <p className="text-[15px] leading-[25px] tracking-[0px] whitespace-pre-wrap text-black/50">
          {product.features}
        </p>
      </div>
      <div>
        <h2 className="mb-8 text-[32px] leading-9 font-bold tracking-[1.14px] max-md:mb-6 max-md:text-[24px] max-md:tracking-[0.86px]">
          IN THE BOX
        </h2>
        <ul className="space-y-2">
          {product.includes.map((item) => (
            <li key={item.item} className="flex items-center gap-x-6">
              <span className="text-primary text-[15px] leading-[25px] font-bold tracking-[0px]">
                {item.quantity}x
              </span>
              <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
                {item.item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductFeatures;
