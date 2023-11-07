import { SetStateAction, useEffect, useState } from "react";
import { Input } from "./InputForm";
import { apiCEP } from "../../../services/api";

const FormRegister = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (cep.length === 8) {
      apiCEP
        .get(`${cep}/json`)
        .then((response) => {
          const data = response.data;
          setAddress(data.logradouro);
          setState(data.uf);
          setCity(data.localidade);
        })
        .catch((error) => {
          console.log("Erro ao buscar o CEP: " + error);
        });
    }
  }, [cep]);

  //

  return (
    <form className="flex flex-col gap-4 w-auto px-[30px] pt-[20px]">
      <p className="text-sm font-roboto font-bold">Informações pessoais</p>
      <Input
        id="name"
        label="Nome"
        placeholder="Digite seu nome"
        type="text"
      ></Input>
      <Input
        id="cpf"
        label="CPF"
        placeholder="Digite seu cpf"
        type="cpf"
        maxLength={14}
      ></Input>
      <Input
        id="email"
        label="Email"
        placeholder="Digite seu email"
        type="text"
      ></Input>
      <div className="flex gap-3">
        <Input
          id="phone"
          label="Telefone"
          placeholder="Digite seu telefone"
          type="tel"
          maxLength={15}
        ></Input>
        <Input
          id="cep"
          label="CEP"
          placeholder="Digite seu CEP"
          type="text"
          maxLength={9}
          value={cep}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setCep(e.target.value)
          }
        ></Input>
      </div>
      <Input
        id="address"
        label="Endereço"
        placeholder="Automaticamente preenchido"
        type="text"
        value={address}
      ></Input>
      <div className="flex gap-3">
        <Input
          id="state"
          label="Estado"
          placeholder="Automaticamente preenchido"
          type="text"
        ></Input>
        <Input
          id="number"
          label="Número"
          placeholder="Automaticamente preenchido"
          type="number"
        ></Input>
      </div>
      <Input
        id="city"
        label="Cidade"
        placeholder="Automaticamente preenchido"
        type="text"
      ></Input>
      <Input
        id="password"
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
      ></Input>
      <Input
        id="confirmPassword"
        label="Confirmação de Senha"
        placeholder="Repita sua senha"
        type="password"
      ></Input>

      <button
        type="submit"
        className="w-full h-14 bg-blue-600 text-[white] rounded-xl text-[18px] font-bold font-roboto"
      >
        CADASTRAR
      </button>
    </form>
  );
};

export default FormRegister;
