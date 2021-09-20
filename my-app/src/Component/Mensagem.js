import React from "react";
import styled from "styled-components";
import MensagensList from "./MensagensList";

const Container = styled.div`
  width: 45vw;
  height: 2em;
  display: flex;
`;

const UsuarioInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 8px;
  width: 80px;
`;

const MensagemInput = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 0px 3px 8px;
  flex-grow: 1;
`;

const SendMensagem = styled.button`
  background-color: #25D366;
  border-radius: 5px;
  border: none;
  margin: 3px 150px 6px 4px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;


// envio de mensagem
class Mensagem extends React.Component {
  state = {
    usuario: "",
    mensagem: "",
    mensagens: [],
    
  }

// area nome do usuario
  onChangeUsuario= (event) => {
    this.setState({ usuario:event.target.value});
    
}

// area mensagem
  onChangeMensagem = (event) => {
    this.setState({ mensagem:event.target.value});
    
}

  onClickSendMensagem = () => {
    if (this.state.usuario !== "" && this.state.mensagem !== "") {
      const newMensagem = {
        usuarioValue: this.state.usuario,
        mensagemValue: this.state.mensagem,
      };
      const newArray = [newMensagem, ...this.state.mensagens];
      this.setState({ mensagens: newArray });
      this.setState({ mensagem: "", usuario: "" }); //Area para resetar o campo mensagem e nome
    } else {
      alert("Por favor, preencha todos os campos!!");
    }
  };

  enterSendMensagem = (event) => {
    if (event.key === "Enter") {
      this.onClickSendMensagem();
    }
  }

  deleteMensagem = (index) => {
    if (window.confirm("Tem certeza que quer remover essa mensagem?")) {
      const deletedMensagem = this.state.mensagens;
      deletedMensagem.splice(index, 1);
      this.setState({ messages: deletedMensagem });
    }
  };

  render () {
    return (
    <div>
        <MensagensList
          mensagens={this.state.mensagens}
          usuario={this.state.usuario}
          mensagem={this.state.mensagem}
          onDoubleClick={this.deleteMensagem}
        />
        <Container onKeyPress={this.enterSendMensagem}>
          <UsuarioInput
            placeholder="Usuário"
            onChange={this.onChangeUsuario}
            value={this.state.usuario}
            required
          />
          <MensagemInput
            placeholder="Mensagem"
            onChange={this.onChangeMensagem}
            value={this.state.mensagem}
            required
          />
          <SendMensagem onClick={this.onClickSendMensagem} type="submit">
            Enviar
          </SendMensagem>
        </Container>
      </div>    
    );
  }
}

export default Mensagem;