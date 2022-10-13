import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { useProducts } from "../../contexts/ProductsContext";
import DeleteModal from "./DeleteModal";
const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
});
const ProductTable = () => {
  const { products } = useProducts();

  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const handleEditClick = (product_id: string) => {
    router.push(`/EditProduct/?id=${product_id}`);
  };

  return (
    <div className="">
      <table className="my-4 mx-12">
        <thead>
          <tr>
            <th className="text-start px-2 py-1 border border-gray-400 bg-gray-100">
              Nome
            </th>
            <th className="text-start px-2 py-1 border border-gray-400 bg-gray-100">
              Categoria
            </th>
            <th className="border border-gray-400 bg-gray-100">Preço</th>
            <th className="border border-gray-400 bg-gray-100">
              Data de Criação
            </th>
            <th className="border border-gray-400 bg-gray-100">Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id}>
              <td
                className="border border-gray-400 px-2 py-1 break-all"
                width={"15.5%"}
              >
                {product.product_name}
              </td>
              <td
                className="border border-gray-400 px-2 py-1 break-all"
                width={"38%"}
              >
                {product.product_category}
              </td>
              <td
                className="border border-gray-400 px-2 py-1 break-all text-end"
                width={"15.5%"}
              >
                {product.product_price}
              </td>
              <td
                className="border border-gray-400 px-2 py-1 break-all text-end"
                width={"15.5%"}
              >
                {dateFormatter.format(new Date(product.created_at))}
              </td>
              <td className="border border-gray-400 px-2 py-1 break-all">
                <span className="flex justify-evenly">
                  <button
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    <AiFillDelete size={25} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEditClick(product.product_id)}
                  >
                    <HiPencil size={25} />
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && <DeleteModal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default ProductTable;
