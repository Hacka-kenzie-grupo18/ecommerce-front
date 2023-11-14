import React from "react";
import { Modal } from "../../../components/ModalDefault/Modal";
import { GrClose } from "react-icons/gr";
import { Input } from "../../RegisterPage/formRegister/InputForm";
import { Select } from "../../../components/Select/Select";

interface ModalCreateProductProps {
  toggleModal: () => void;
}

const ModalCreateProduct = ({ toggleModal }: ModalCreateProductProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <div className="bg-white h-fit  w-screen max-w-[530px] top-10  rounded-2xl p-[25px] flex-col overflow-auto  pb-[100px] relative">
        <h3 className="text-grey1 font-lexend text-[18px] mb-[30px]">
          Criar produto
        </h3>
        <form className="p-[5px] flex flex-col gap-4 px-4">
          <div className="flex gap-4">
            <Input
              id="name"
              label="Nome"
              placeholder="Digite o nome do produto"
              type="text"
            ></Input>
            <Input
              id="stock"
              label="Quantidade"
              placeholder="Digite quantidade de produtos..."
              type="number"
            ></Input>
          </div>
          <Input
            id="image"
            label="Imagem principal"
            placeholder="Coloque o link da imagem..."
            type="text"
          ></Input>
          <div className="flex gap-4">
            <Input
              id="image-one"
              label="Imagem1"
              placeholder="Coloque o link da imagem..."
              type="text"
            ></Input>

            <Input
              id="image-two"
              label="Imagem2"
              placeholder="Coloque o link da imagem..."
              type="text"
            ></Input>
          </div>
          <div className="flex gap-4">
            <Input
              id="price"
              label="Preço"
              placeholder="Digite o preço por unidade..."
              type="text"
            ></Input>
            <Select id="size" label="Tamanho">
              <option value="default" hidden>
                O tamanho do produto
              </option>
              <option value="PP">PP</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
              <option value="XG">XG</option>
            </Select>
          </div>
          <div className="flex gap-4 w-full">
            <Input
              id="color"
              label="Cores"
              placeholder="Coloque a(as) cor(cores) do produto..."
              type="text"
            ></Input>
            <Select id="sex" label="Sexo">
              <option value="default" hidden>
                Defina o sexo
              </option>
              <option value="man">Masculino</option>
              <option value="female">Feminino</option>
            </Select>
          </div>

          <Input
            id="theme"
            label="Temas"
            placeholder="Digite o tema do produto..."
            type="text"
          ></Input>

          <div className="mt-[42px] flex justify-end gap-[10px]">
            <button className="bg-grey6 h-[48px] w-[126px] text-grey2 font-600 text-[16px] rounded">
              Cancelar
            </button>
            <button className="bg-primary100 w-[193px] h-[48px] rounded text-white">
              Criar anúncio
            </button>
          </div>
        </form>
        <button
          className="absolute top-[22px] right-[22px] text-whiteFixed "
          onClick={toggleModal}
        >
          <GrClose />
        </button>
      </div>
    </Modal>
  );
};

export default ModalCreateProduct;
