import './globals.css'

export const metadata = {
  title: 'Minha Carteira',
  description: 'Gerenciador de despesas pessoais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-green-400 h-screen flex justify-center ">{children}</body>
    </html>
  )
}
