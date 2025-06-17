"use client";

import Script from "next/script";

interface TrackingScriptProps {
  pageName: string;
}

export default function TrackingScript({ pageName }: TrackingScriptProps) {
  // Aqui você pode definir as tags específicas para cada página
  const getTrackingCode = (page: string) => {
    switch (page) {
      case "fisioterapia":
        return `
          // Tag do Facebook Pixel para Fisioterapia
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'SEU_PIXEL_ID_FISIOTERAPIA');
          fbq('track', 'PageView');
        `;
      case "musicoterapia":
        return `
          // Tag do Facebook Pixel para Musicoterapia
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'SEU_PIXEL_ID_MUSICOTERAPIA');
          fbq('track', 'PageView');
        `;
      case "nutricao":
        return `
          // Tag do Facebook Pixel para Nutrição
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'SEU_PIXEL_ID_NUTRICAO');
          fbq('track', 'PageView');
        `;
      case "ginecologia":
        return `
          // Tag do Facebook Pixel para Ginecologia
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'SEU_PIXEL_ID_GINECOLOGIA');
          fbq('track', 'PageView');
        `;
      default:
        return "";
    }
  };

  return (
    <Script
      id={`tracking-${pageName}`}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: getTrackingCode(pageName) }}
    />
  );
} 