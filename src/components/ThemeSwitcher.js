import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleTheme } from '../actions';
import { createGlobalStyle } from 'styled-components';

const theme = {
  light: {
    backgroundColor: '#fff',
    buttonBackgroundColor: '#000',
    buttonTextColor: '#fff',
    titleColor: '#000',
    textColor: '#000',
  },
  dark: {
    backgroundColor: '#000',
    buttonBackgroundColor: '#fff',
    buttonTextColor: '#000',
    titleColor: '#fff',
    textColor: '#fff',
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    transition: background-color 0.3s ease;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttonTextColor};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.titleColor};
  transition: color 0.3s ease;
`;


const ThemeSwitcher = () => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const currentTheme = isDarkTheme ? theme.dark : theme.light;

  return (
    <div className=''>
      <GlobalStyles theme={currentTheme} />
      <Title theme={currentTheme}>Тема приложения</Title>
      <Button theme={currentTheme} onClick={handleThemeChange}>
        {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
      </Button>      
    </div>
  );
};

export default ThemeSwitcher;