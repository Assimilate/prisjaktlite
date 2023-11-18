import { useLocation } from "react-router-dom";

export const ProductPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const products = params.get("products");
  if (!products) return null;
  const product = JSON.parse(products);
  const {
    id,
    name,
    media: { first: imageUri },
    priceSummary: { regular: price },
  } = product;
  return (
    <div className="w-full h-full bg-white">
      <ProductCard name={name} imageUri={imageUri} price={price} id={id} />
    </div>
  );
};

type ProductCardProps = {
  name: string;
  imageUri: string;
  price: string;
  id: string;
};

const ProductCard = ({ name, imageUri, price, id }: ProductCardProps) => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col bg-radial-gradient-second">
      <div className="flex justify-center shadow-lg flex-col items-center bg-white w-72 p-4 sm:w-96 sm:h-[30rem]">
        <h4 className="font-mono text-sm text-black mt-2 sm:mt-6">Billigaste priset</h4>
        <h2 className="text-3xl text-red-500">{price} :-</h2>
        <div className="flex items-center justify-center flex-col sm:mt-20">
        <img className="w-28 h-28 mt-6 sm:mt-0 mb-6" src={imageUri} />
        <div className="w-full flex items-center justify-center">
          <h1 className="text-sm w-5/6 text-black text-left">{name}</h1>
        </div>
        </div>
        <div className="flex grow h-full justify-center items-end pb-2 mt-4 sm:mt-0">
        <a
          className="shadow-lg w-28 rounded-full no-underline bg-linear-gradient h-12 border-[#FFD065] flex justify-center items-center text-black font-mono"
          href={`https://www.prisjakt.nu/produkt.php?p=${id}`}
          target="_blank"
        >
          Köp
        </a>
        </div>
      </div>
    </div>
  );
};
