'use client';

import React, { useEffect } from 'react'

export default function Wallet() {
  const name = localStorage.getItem('name')
  const [description, setDescription] = React.useState('')
  const [type, setType] = React.useState('Alimentação')
  const [value, setValue] = React.useState(0)
  const [expenses, setExpenses] = React.useState([])

  useEffect(() => {
    const expenses = localStorage.getItem('expenses')
    if (expenses) {
      setExpenses(JSON.parse(expenses))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  function handleChange(event) {
    switch (event.target.name) {
      case 'description':
        setDescription(event.target.value)
        break;
      case 'type':
        setType(event.target.value)
        break;
      case 'value':
        setValue(event.target.value)
        break;
      default:
        break;
    }
  };

  function handleClick(event) {
    event.preventDefault()
    const newExpense = {
      description,
      type,
      value
    }
    setExpenses([...expenses, newExpense])
  };

  return (
    <>
      <header>
        <h1>Bem Vindo</h1>
        { name ? <h2>Olá, { name } !</h2> : <h2>Olá, visitante !</h2> }
      </header>

      <main>
        <form>
          <label>
            Descrição
            <input type="text" name='description' onChange={ handleChange } />
          </label>
          <label>
            Tipo
            <select name='type' onChange={ handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Moradia">Moradia</option>
              <option value="Saúde">Saúde</option>
              <option value="Lazer">Lazer</option>
              <option value="Outros">Outros</option>
            </select>
          </label>
          <label>
            Valor
            <input type="number" name='value' onChange={ handleChange }/>
          </label>
          <button onClick={ handleClick }>Adicionar</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Valor</th>
            </tr>
          </thead>
          { expenses.map((expense, index) => {
            return (
              <tbody key={ index }>
                <tr>
                  <td>{ expense.description }</td>
                  <td>{ expense.type }</td>
                  <td>{ expense.value }</td>
                </tr>
              </tbody>
            )
          }) }
        </table>
      </main>
    </>
  )
};