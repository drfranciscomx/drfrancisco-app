import "./css/globals.css"
import MainLayout from "../components/layouts/MainLayout"

export const metadata = {
  title: 'Cirujano Plástico Dr Francisco Rodriguez',
  description: 'Dr Francisco Rodriguez cirugia plastica en Zamora Michoacan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main-bosy-class w-full bg-black-gradient min-h-full">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
