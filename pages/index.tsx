import type { NextPage } from "next";
import Link from "next/link";
import ProductTable from "./components/ProductTable";

const Home: NextPage = () => {
  return (
    <main className="flex  justify-between items-center w-screen h-screen font-montserrat">
      <div className="flex flex-col  w-full  ">
        <div className="flex justify-between mx-6">
          <h1 className="text-[40px] font-bold">Produtos</h1>
          <Link id="addProductButton" href={"/AddProduct"}>
            <span className="bg-black text-sm text-white px-4 py-1 flex items-center cursor-pointer">
              Adicionar Produto
            </span>
          </Link>
        </div>
        <ProductTable />
      </div>
    </main>
  );
};

export default Home;
