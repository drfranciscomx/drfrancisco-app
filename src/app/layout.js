import './css/globals.css';
import MainLayout from '../components/layouts/MainLayout';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.drfranciscorodriguez.mx/'),
  title: {
    default: 'Dr Francisco Rodriguez | Cirujano Plástico',
    template: `%s | Dr Francisco Rodriguez`,
  },
  description: 'Dr Francisco Rodriguez cirugía plástica en Zamora Michoacan',
};

const GTM_ID = 'GTM-N4382WJN';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className="main-body-class w-full bg-black-gradient min-h-full">
        <MainLayout>{children}</MainLayout>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
