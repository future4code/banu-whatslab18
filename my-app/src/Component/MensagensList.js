import React from "react";
import styled from "styled-components";



const MensagensContainer = styled.div`
  width: 35vw;
  height: 90vh;
  margin-top: 19px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

const Mensagem = styled.p`
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid lightgray;
`;
const MyMensagem = styled.p`
  align-self: flex-end;
  margin: 3px;
  padding: 12px 15px;
  text-align: right;
  width: 50%;
  border-radius: 5px;
  border: 1px solid lightgray; 
`;

//Area para mudar posição quando escrever "Eu" em usuário. 
class MensagensList extends React.Component {
  render() {
    return (
      <MensagensContainer>
        {this.props.mensagens &&
          this.props.mensagens.map((mensagem, index) => {
            if (mensagem.usuarioValue.toLowerCase() === "eu") {
              return (
                <MyMensagem
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{mensagem.usuarioValue}: </strong>
                  {mensagem.mensagemValue}
                </MyMensagem>
              );
            } else {
              return (
                <Mensagem
                  key={index}
                  onDoubleClick={() => this.props.onDoubleClick(index)}
                >
                  <strong>{mensagem.usuarioValue}: </strong>
                  {mensagem.mensagemValue}
                </Mensagem>
              );
            }
          })}
      </MensagensContainer>
    );
  }
}
export default MensagensList;