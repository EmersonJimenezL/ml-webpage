"use client";
import React from "react";
import Head from "next/head";

import "./globals.css";

const metadatos = {
  title: "Mi Página - Palabra Clave",
  description: "Descripción de mi página para SEO.",
  keywords: "palabra clave1, palabra clave2, palabra clave3",
  robots: "index,follow",
  ogTitle: "Mi Página - Palabra Clave",
  ogDescription: "Descripción optimizada para redes sociales.",
  ogImage: "URL-de-la-imagen",
  twitterCard: "summary_large_image",
  twitterTitle: "Mi Página - Palabra Clave",
  twitterDescription: "Descripción optimizada para Twitter.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadatos.title}</title>
        <meta name="description" content={metadatos.description} />
        <meta name="keywords" content={metadatos.keywords} />
        <meta name="robots" content={metadatos.robots} />
        <meta property="og:title" content={metadatos.ogTitle} />
        <meta property="og:description" content={metadatos.ogDescription} />
        <meta property="og:image" content={metadatos.ogImage} />
        <meta property="twitter:card" content={metadatos.twitterCard} />
        <meta property="twitter:title" content={metadatos.twitterTitle} />
        <meta
          property="twitter:description"
          content={metadatos.twitterDescription}
        />
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
