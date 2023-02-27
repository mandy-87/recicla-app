import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };
   return (
    <C.Container>
      <C.Label>Criar conta</C.Label>
      <C.Content>
      <C.Label>Nome completo</C.Label>
      <Input
          type="name"
          placeholder="Ex: João da Silva"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <C.Label>Endereço</C.Label>
       <Input
          type="adress"
          placeholder="Ex: Rua, número"
          value={endereco}
          onChange={(e) => [setEndereco(e.target.value), setError("")]}
        />
        <C.Label>Cidade</C.Label>
        <Input
          type="city"
          placeholder="Ex: Florianópolis"
          value={cidade}
          onChange={(e) => [setCidade(e.target.value), setError("")]}
        />
        <C.Label>CEP</C.Label>
        <Input
          type="cep"
          placeholder="Ex: 00000-000"
          value={cep}
          onChange={(e) => [setCep(e.target.value), setError("")]}
        />
        <C.Label>Email</C.Label>
        <Input
          type="email"
          placeholder="Ex: email@email.com"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <C.Label>Confirme seu email</C.Label>
        <Input
          type="email"
          placeholder="Ex: email@email.com"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <C.Label>Senha</C.Label>
        <Input
          type="password"
          placeholder="*****"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.Label>Confirme sua senha</C.Label>
         <Input
          type="password"
          placeholder="*****"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Criar Conta" onClick={handleSignup} />
        <C.LabelSignin>
          Já possui uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Realizar login</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
