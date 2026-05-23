/** Entorno estándar para GitHub Pages con dominio personalizado. */
export const githubPagesEnv = {
  DEPLOY_TARGET: "github-pages",
  VITE_SITE_URL: "https://levelupsolutions.es",
  BASE_PATH: "/",
  GITHUB_PAGES_CUSTOM_DOMAIN: "levelupsolutions.es",
};

export function withGithubPagesEnv(env = process.env) {
  return { ...env, ...githubPagesEnv };
}
