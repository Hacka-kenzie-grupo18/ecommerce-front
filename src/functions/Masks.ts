export const insertMaskInCpf = (cpf: string) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};
export const inserMaskInPhone = (phone: string) => {
  const noMask = phone.replace(/\D/g, "");
  const { length } = phone.replace(/\D/g, "");
  if (length <= 11) {
    return noMask
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, "$1-$2");
  }
  return phone;
};

export const insertMaskInCEP = (cep: string) => {
  return cep.replace(/(\d{5})(\d)/, "$1-$2");
};
