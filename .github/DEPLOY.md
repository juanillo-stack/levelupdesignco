# Despliegue

- **Repositorio:** GitHub (`main`)
- **Hosting:** Vercel (production automático en cada push a `main`)
- **Dominio production:** https://levelupsolutions.es

No usar GitHub Actions ni la rama `gh-pages` para publicar este sitio.

## DNS (obligatorio)

`levelupsolutions.es` debe apuntar **solo a Vercel** (registros que indique el proyecto en Vercel → Domains). Si el dominio sigue en GitHub Pages (`*.github.io`), `/trabajos` y el portfolio mostrarán una versión antigua o rotas.

Tras cada push a `main`, comprobar en Vercel que el deployment **Production** está **Ready** antes de validar la web en vivo.
