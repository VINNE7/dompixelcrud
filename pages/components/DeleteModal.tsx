import React from "react";

const DeleteModal = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-screen h-screen bg-black/50 fixed top-0 flex justify-center items-center font-montserrat">
      <div className="bg-white w-2/5 h-1/5 flex flex-col gap-6 p-8">
        <h1 className="text-2xl font-bold">Excluir Produto</h1>
        <p>Tem certeza que deseja excluir este produto</p>
        <div className="flex self-end gap-6">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="border border-black px-8 py-2"
          >
            Cancelar
          </button>
          <button className="bg-black text-white px-8 py-2">Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
