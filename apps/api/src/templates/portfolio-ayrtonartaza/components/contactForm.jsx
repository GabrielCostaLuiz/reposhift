'use client'
import { useState } from 'react'
import { email } from '../utils/constants'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSendEmail = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Contato via Formulário')
    const body = encodeURIComponent(
      `${message}\n\nAtenciosamente,\n${name}`
    ).replace(/%0A/g, '%0D%0A')
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <form
      onSubmit={handleSendEmail}
      className="mx-auto w-3/5 space-y-4 rounded-lg bg-gray-100 p-6 shadow"
    >
      <div>
        <label htmlFor="name" className="block font-medium">
          Nome
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="w-full rounded-lg border px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium">
          Mensagem
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem"
          rows="5"
          className="w-full rounded-lg border px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary rounded-lg px-4 py-2 text-white transition-all hover:scale-105"
      >
        Enviar
      </button>
    </form>
  )
}
