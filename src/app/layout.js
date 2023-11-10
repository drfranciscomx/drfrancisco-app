import './css/globals.css';
import MainLayout from '../components/layouts/MainLayout';
import TagManager from 'react-gtm-module';

export const metadata = {
  title: 'Cirujano Plástico Dr Francisco Rodriguez',
  description: 'Dr Francisco Rodriguez cirugía plástica en Zamora Michoacan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main-body-class w-full bg-black-gradient min-h-full">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
