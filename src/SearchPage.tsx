import { ChangeEvent, useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { createSearchParams, useNavigate } from "react-router-dom";

const GET_PRODUCTS = gql`
  query ($query: String!) {
    newSearch(query: $query) {
      results {
        products {
          nodes {
            ... on Product {
              id
              name
              priceSummary {
                regular
              }
              media {
                first(width: _800)
              }
            }
          }
        }
      }
    }
  }
`;

export const SearchPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<null | string>(null);
  const [getProducts] = useLazyQuery(GET_PRODUCTS, {
    fetchPolicy: "network-only",
  });
  const [cheapestProduct, setCheapestProduct] = useState<any>(null);

  useEffect(() => {
    if (!cheapestProduct) return;
    console.log("Cheapest product:", cheapestProduct);
    navigate({
      pathname: "/product",
      search: `?${createSearchParams({
        products: JSON.stringify(cheapestProduct),
      })}`,
    });
  }, [cheapestProduct, navigate]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setQuery(query);
  };

  const queryExists = () => {
    return query && !!query.length;
  };

  const onClick = async () => {
    if (!queryExists()) return;
    const { data } = await getProducts({ variables: { query } });
    const products = data.newSearch.results.products.nodes;
    const cheapestProduct = products[0];
    setCheapestProduct(cheapestProduct);
  };

  return (
    <main className="w-full h-full flex font-mono justify-center items-center flex-col space-y-10 bg-radial-gradient-first shadow-second">
      <div className="h-contan w-contain flex justify-center items-center space-x-2">
        <img src="logo_icon.svg" />
        <div className="flex justify-center items-center space-x-1 sm:flex-row flex-col">
        <h1 className="text-white text-3xl sm:text-4xl font-inter">
        Prisjakt
        </h1>
        <h1 className="text-[1.7rem] sm:text-[1.7rem] w-full pt-1 h-full sm:pt-1 pr-3">Lite</h1>
        </div>
      </div>
      <input
        onChange={onChange}
        className="w-60 sm:w-3/4 h-16 border bg-white rounded-2xl pl-2 text-black"
      ></input>
      <button
        onClick={onClick}
        className="text-black font-bold text-xl flex items-center justify-center font-mono bg-[#FFD065] border-4 w-32 h-12 shadow-md rounded-full"
      >
        Sök
      </button>
    </main>
  );
};
