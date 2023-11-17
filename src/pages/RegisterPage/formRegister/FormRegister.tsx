import { useForm } from "react-hook-form";
import { UserRequestType } from "../interfaces/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaRequest } from "../../../schemas/register/schemas";
import { useContext, useEffect } from "react";
import { normalizeCepNumber, normalizeCpfNumber, normalizePhoneNumber } from "../mask/mask";
import { apiCEP } from "../../../services/api";
import { AuthContext } from "../../../context/AuthContext";

const FormRegister = () => {

  const {registerUser} = useContext(AuthContext)

  const {
    register, 
    handleSubmit, 
    setValue, 
    setFocus, 
    watch, 
    formState: {errors}} = useForm<UserRequestType>({
      resolver: zodResolver(userSchemaRequest), 
      mode: 'onBlur'})


      const findInfosCepAndSet = async (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const cep: string = event.target.value.replace(/[^0-9]/gi, "");
        if (cep.length == 8) {
          try {
            const cepInfosAPI = await apiCEP.get(`/${cep}/json/`);
            if (cepInfosAPI) {
                setValue("state", cepInfosAPI.data.uf),
                setValue("city", cepInfosAPI.data.localidade),
                setValue("street", cepInfosAPI.data.logradouro)
                setFocus("number");
            }
          } catch (error) {
            console.log(error);
          }
        }
      };
    
      const phoneValue = watch("phone");
      const cepValue = watch("cep");
      const cpfValue = watch("cpf");
    
      useEffect(() => {
        setValue("phone", normalizePhoneNumber(phoneValue));
      }, [phoneValue, setValue]);
    
      useEffect(() => {
        setValue("cep", normalizeCepNumber(cepValue));
      }, [cepValue, setValue]);
    
      useEffect(() => {
        setValue("cpf", normalizeCpfNumber(cpfValue));
      }, [cpfValue, setValue]);



      const handleSubmitData = (data: UserRequestType) => {
        console.log(data)
        registerUser(data)
      }


  return (
    <form onSubmit={handleSubmit(handleSubmitData)} className="flex flex-col gap-4 w-auto px-[30px] pt-[20px]">
      
      <p className="text-sm font-roboto font-bold">Informações pessoais</p>
      
      <fieldset className="relative flex flex-col gap-2 border-none">

      <label className="font-500 text-[14px] text-[#2563eb]">
        Nome
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        placeholder="Seu Nome"
        {...register("name")}
      />
      <span className={`error-message text-[15px] ${errors.name?.message ? "block" : "hidden"}`}>
                      {errors.name?.message} 
      </span>


      <label className="font-500 text-[14px] text-[#2563eb]">
        Email
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        placeholder="Seu email"
        {...register("email")}
      />
      <span className={`error-message text-[15px] ${errors.email?.message ? "block" : "hidden"}`}>
                      {errors.email?.message} 
      </span>


      <label className="font-500 text-[14px] text-[#2563eb]">
        CPF
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        {...register("cpf")}
        placeholder="000.000.000-00"
        />
      <span className={`error-message text-[15px] ${errors.cpf?.message ? "block" : "hidden"}`}>
                      {errors.cpf?.message} 
      </span>

      </fieldset>  

      
      <div className="flex gap-3">

      <fieldset className="relative flex flex-col gap-2 border-none">

      <label className="font-500 text-[14px] text-[#2563eb]">
        Telefone
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        {...register("phone")}
        placeholder="Digite seu telefone"
        maxLength={15}
        />
      <span className={`error-message text-[15px] ${errors.phone?.message ? "block" : "hidden"}`}>
                      {errors.phone?.message} 
      </span>

      </fieldset>
        
        
      <fieldset className="relative flex flex-col gap-2 border-none">

      <label className="font-500 text-[14px] text-[#2563eb]">
        CEP
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        {...register("cep", { required: true })}
        placeholder="Digite seu cep"
        onChange={findInfosCepAndSet}
        />
      <span className={`error-message text-[15px] ${errors.cep?.message ? "block" : "hidden"}`}>
                      {errors.cep?.message} 
      </span>

      </fieldset>

      
      </div>

      <fieldset className="relative flex flex-col gap-2 border-none">

      
      <label className="font-500 text-[14px] text-[#2563eb]">
        Endereço
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        placeholder="Automaticamente preenchido"
        {...register("street")}
        readOnly
      />
      <span className={`error-message text-[15px] ${errors.street?.message ? "block" : "hidden"}`}>
                      {errors.street?.message} 
      </span>

      </fieldset>

      <div className="flex gap-3">

      
      <fieldset className="relative flex flex-col gap-2 border-none">

      <label className="font-500 text-[14px] text-[#2563eb]">
        Estado
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        {...register("state")}
        placeholder="Automaticamente preenchido"
        readOnly
        maxLength={15}
        />
      <span className={`error-message text-[15px] ${errors.state?.message ? "block" : "hidden"}`}>
                      {errors.state?.message} 
      </span>

      </fieldset>
      
      <fieldset className="relative flex flex-col gap-2 border-none">

      
      <label className="font-500 text-[14px] text-[#2563eb]">
        Número
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        {...register("number")}
        placeholder="Digite seu número"
        maxLength={8}
        />
      <span className={`error-message text-[15px] ${errors.number?.message ? "block" : "hidden"}`}>
                      {errors.number?.message} 
      </span>

      </fieldset>

      </div>

      
      
      <fieldset className="relative flex flex-col gap-2 border-none">

      
      <label className="font-500 text-[14px] text-[#2563eb]">
        Cidade
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        placeholder="Automaticamente preenchido"
        {...register("city")}
        readOnly
      />
      <span className={`error-message text-[15px] ${errors.city?.message ? "block" : "hidden"}`}>
                      {errors.city?.message} 
      </span>

      
      <label className="font-500 text-[14px] text-[#2563eb]">
        Senha
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        placeholder="Digite sua senha"
        {...register("password")}
        type="password"
      />
      <span className={`error-message text-[15px] ${errors.password?.message ? "block" : "hidden"}`}>
                      {errors.password?.message} 
      </span>

      
      <label className="font-500 text-[14px] text-[#2563eb]">
        Confirmação de senha
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        placeholder="Repita sua senha"
        {...register("confirmPassword")}
        type="password"
      />
      <span className={`error-message text-[15px] ${errors.confirmPassword?.message ? "block" : "hidden"}`}>
                      {errors.confirmPassword?.message} 
      </span>

      </fieldset>

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


