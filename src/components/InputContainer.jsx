import React, { useState, useCallback } from 'react';
import InputBox from './InputBox';
import Btn from './Btn';
import styled from 'styled-components';

const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  margin: 0.625rem;
`;

function InputContainer() {
  const [{ userName, price }, setInputValue] = useState({ userName: '', price: '' });

  const inputHandler = useCallback((e) => {
    if (e.target.name === 'price') {
      const { name, value } = e.target;
      const onlyNumber = value.replace(/[^0-9]/g, '');
      const removedCommaValue = Number(onlyNumber.replaceAll(',', ''));
      setInputValue((prev) => ({ ...prev, [name]: removedCommaValue.toLocaleString() }));
    } else if (e.target.name === 'userName') {
      const { name, value } = e.target;
      setInputValue((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const submit = (event) => {
    event.preventDefault();
    if (userName.length === 0) {
      return alert('이름이 궁금해여😎');
    }
    alert(`userName : ${userName}  price : ${Number(price.split(',').join(''))}`);
    setInputValue({ userName: '', price: '' });
  };

  return (
    <>
      <h2>Input</h2>
      <InputWrapper action="/" onSubmit={submit}>
        <InputBox onChange={inputHandler} value={userName} name="userName">
          이름
        </InputBox>
        <InputBox type="text" onChange={inputHandler} value={price} name="price">
          가격
        </InputBox>
        <Btn smBtn>저장</Btn>
      </InputWrapper>
    </>
  );
}

export default InputContainer;
