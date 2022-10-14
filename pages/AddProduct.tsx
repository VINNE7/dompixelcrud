import type { NextPage } from "next";
import { MdArrowBackIos } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useProducts } from "../contexts/ProductsContext";
import Link from "next/link";
import { useRouter } from "next/router";
interface IFormData {
  product_name: string;
  product_category: string;
  product_price: string;
}

const AddProduct: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const { addProduct } = useProducts();

  const onSubmit = (data: IFormData) => {
    addProduct(data);
    console.log(data);
  };

  const router = useRouter();
  return (
    <main className="flex  justify-center items-center  h-screen font-montserrat mx-auto">
      <div className="flex flex-col gap-4 w-screen ">
        <div className="flex items-center justify-start gap-2 mx-auto w-full max-w-screen-md px-32">
          <Link href={"/"}>
            <span className="flex cursor-pointer">
              <MdArrowBackIos size={25} />
              <h1 className="text-2xl font-bold">Adicionar Produto</h1>
            </span>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mx-auto "
        >
          <span className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-bold">
              Nome
            </label>
            <input
              type="text"
              placeholder="Nome"
              required
              id="name"
              className="border 
            border-gray-800 p-2"
              {...register("product_name")}
            />
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="category" className="text-sm font-bold">
              Categoria
            </label>
            <input
              type="text"
              placeholder="Categoria"
              required
              id="category"
              className="border 
          border-gray-800 p-2"
              {...register("product_category")}
            />
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="price" className="text-sm font-bold">
              Preço
            </label>
            <input
              type="text"
              placeholder="R$"
              required
              id="price"
              className="border 
            border-gray-800 p-2"
              {...register("product_price")}
            />
          </span>
          <button
            type="submit"
            className="bg-black text-white mx-auto px-4 py-2"
            onClick={() => {
              router.push("/");
            }}
          >
            Salvar
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddProduct;
