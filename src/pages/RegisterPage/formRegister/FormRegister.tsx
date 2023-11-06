import { Input } from "./InputForm";

const FormRegister = () => {
  //   const [selectedOption, setSelectedOption] = useState("true");

  //   const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setSelectedOption(e.target.value);
  //   };

  // const userRegister = async (data: RegisterData) => {
  //   try {
  //     data.is_seller = selectedOption === "true";
  //     await apiLocal.post("/users", data);
  //     toggleSucessRegisterModal();
  //   } catch (error) {
  //     toggleErrorRegisterModal();
  //     console.error(error);
  //   }
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<RegisterData>({
  //   resolver: zodResolver(registerSchema),
  //   mode: "onChange",
  // });

  return (
    <form
      //   onSubmit={}
      className="flex flex-col gap-4 w-auto px-[30px] pt-[20px]"
    >
      {/* <div>
        <p className="text-sm mb-[16px] font-roboto  font-bold">
          Tipo de conta
        </p>
        <div className="flex gap-4 justify-center">
          <label
            className={`flex items-center rounded h-[48px] w-[100%] ${
              selectedOption === "false" ? "bg-blue-600 text-white" : " "
            }`}
          >
            <input
              type="radio"
              className="hidden"
              name="userType"
              value="false"
              checked={selectedOption === "false"}
              onChange={handleOptionChange}
            />
            <div className="border-2 border-grey3 text-[16px]  h-[48px] w-[100%] font-bold rounded-md px-4 py-2 cursor-pointer flex justify-center items-center">
              Fornecedor
            </div>
          </label>
          <label
            className={`flex items-center rounded h-[48px] w-[100%] ${
              selectedOption === "true" ? "bg-blue-600 text-white" : " "
            }`}
          >
            <input
              type="radio"
              className="hidden"
              name="userType"
              value="true"
              checked={selectedOption === "true"}
              onChange={handleOptionChange}
            />
            <div className="border-2 border-grey3 text-[16px]  h-[48px] w-[100%] font-bold rounded-md px-4 py-2 cursor-pointer flex justify-center items-center">
              Comprador
            </div>
          </label>
        </div>
      </div> */}
      <p className="text-sm font-roboto font-bold">Informações pessoais</p>
      <Input
        id="name"
        label="Nome"
        placeholder="Digite seu nome"
        type="text"
        // register={register("name")} error={errors);
      ></Input>
      <Input
        id="email"
        label="Email"
        placeholder="Digite seu email"
        type="text"
        // register={register("name")} error={errors);
      ></Input>
      <div className="flex gap-3">
        <Input
          id="phone"
          label="Telefone"
          placeholder="Digite seu telefone"
          type="text"
          // register={register("name")} error={errors);
        ></Input>
        <Input
          id="cep"
          label="CEP"
          placeholder="Digite seu CEP"
          type="text"
          // register={register("name")} error={errors);
        ></Input>
      </div>
      <Input
        id="address"
        label="Endereço"
        placeholder="Automaticamente preenchido"
        type="text"
        // register={register("name")} error={errors);
      ></Input>
      <div className="flex gap-3">
        <Input
          id="state"
          label="Estado"
          placeholder="Automaticamente preenchido"
          type="text"
          // register={register("name")} error={errors);
        ></Input>
        <Input
          id="number"
          label="Número"
          placeholder="Automaticamente preenchido"
          type="number"
          // register={register("name")} error={errors);
        ></Input>
      </div>
      <Input
        id="city"
        label="Cidade"
        placeholder="Automaticamente preenchido"
        type="text"
        // register={register("name")} error={errors);
      ></Input>
      <Input
        id="password"
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        // register={register("name")} error={errors);
      ></Input>
      <Input
        id="confirmPassword"
        label="Confirmação de Senha"
        placeholder="Repita sua senha"
        type="password"
        // register={register("name")} error={errors);
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
