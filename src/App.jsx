import ButtonContainer from './components/ButtonContainer';
import InputContainer from './components/InputContainer';
import ModalContainer from './components/ModalContainer';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <ButtonContainer></ButtonContainer>
      <InputContainer></InputContainer>
      <ModalContainer></ModalContainer>
    </>
  );
}

export default App;
