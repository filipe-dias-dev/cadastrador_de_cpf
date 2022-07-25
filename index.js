let cpf = process.argv[2]; 
  console.log("tratando CPF " + cpf);

const validarCpf = require("validador-de-cpf");

if (validarCpf(cpf)) {
  console.log(`O CPF ${cpf} é válido.`);
  console.log("Salvando o arquivo..");

  const fs = require("fs");
  fs.writeFileSync("cpfssalvos", cpf + "\n", { flag: "a" });
} else {
  console.log(`O CPF ${cpf} não é valido.`);
}

