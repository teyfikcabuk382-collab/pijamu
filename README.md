# PIJAMU Storefront

Landing page / catálogo de PIJAMU construida con Next.js para publicar en Vercel.

## Requisitos
- Node.js 18.17 o superior
- Cuenta de GitHub
- Cuenta de Vercel

## Ejecutar localmente
```bash
npm install
cp .env.example .env.local
# Edita NEXT_PUBLIC_WHATSAPP_NUMBER con el número de WhatsApp Business,
# incluyendo código de país y sin +, espacios ni guiones. Ejemplo: 573001234567
npm run dev
```
Abre http://localhost:3000.

## Publicar en GitHub y Vercel
1. Crea un repositorio nuevo en GitHub llamado `pijamu-store`.
2. Sube todos los archivos de esta carpeta al repositorio (no subas `node_modules`).
3. En Vercel, elige **Add New → Project**, importa `pijamu-store` y deja el framework como Next.js.
4. En **Environment Variables**, agrega `NEXT_PUBLIC_WHATSAPP_NUMBER` con tu número de WhatsApp Business en formato internacional sin `+`.
5. Pulsa **Deploy**. Vercel generará una URL pública.

## Personalización
- Productos y precios: `app/products.ts`.
- Fotos: `public/images/products/`.
- Logo y banners: `public/images/brand/`.
- Redes: enlaces de Instagram y TikTok en `app/page.tsx`.

## Notas de catálogo
Los precios publicados se tomaron de la hoja Resumen del Excel suministrado. Las referencias cuyo precio público no estaba definido en el Excel no se publicaron. Las tallas y disponibilidad se deben confirmar por pedido.
