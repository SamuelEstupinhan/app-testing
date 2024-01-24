import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulario, { mayorDeEdad } from '../components/Formulario';

describe('mayorDeEdad function', () => {
  it('Comprobar que la funcion devuelve un valor booleano', () => {
    expect(typeof mayorDeEdad(18)).toBe('boolean');
  });

  it('Comprobar que si la entrada a la funcion es 18 devuelve true', () => {
    expect(mayorDeEdad(18)).toBe(true);
  });

  it('Comprobar que si la entrada a la funcion es un numero mayor a 18 nos devuelve true', () => {
    expect(mayorDeEdad(21)).toBe(true);
  });

  it('Comprobar que si la entrada a la funcion es un numero menor a 18 nos devuelve false', () => {
    expect(mayorDeEdad(16)).toBe(false);
  });

  it('Comprobar que si la entrada a la funcion es un numero negativo nos devuelve null', () => {
    expect(mayorDeEdad(-5)).toBeNull();
  });
});

describe('Componentes Formulario', () => {
  it('Comprueba que se renderizan los elementos', () => {
    render(<Formulario />);
    expect(screen.getByRole('heading', { level: 2, name: /rellena el formulario/i })).toBeInTheDocument();
    expect(screen.getByAltText('icono')).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/edad/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('comprueba que cuando el usuario rellena el formulario aparece una cabecera nviel 6', () => {
    render(<Formulario />);
    const nombreInput = screen.getByLabelText(/nombre/i);
    const edadInput = screen.getByLabelText(/edad/i);
    const enviarButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(nombreInput, { target: { value: 'John' } });
    fireEvent.change(edadInput, { target: { value: '20' } });
    fireEvent.click(enviarButton);

    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument();
  });
});