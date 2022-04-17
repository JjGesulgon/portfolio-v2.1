const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => { 
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    baseURL: (() => {
      if (isDev) return 'http://localhost:8080'
      if (isProd) return 'https://www.jjgesulgon.dev'
      if (isStaging) return 'http://localhost:11639'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    starImageURL: "https://lh3.googleusercontent.com/proxy/elkXxVWA-_mW1LPmsCXZfkjMQ8GGjr27tBIvKU7dtImtfBBm0jNNJFnh9sdaPMx1Q80-2yM1ZBkSBok34cFmMJWJqe7CWetDGuJUbOOvPtZ8MrSeVIAjMU4F0xD4gzPk3lAqV_Rn3TS90l42kw7jE3EjZgzc4MjnAQJ1TlDvVjxP0g",
    testIcon: '<span className="iconify" data-icon="logos:javascript" style={{ fontSize: "35px" }}></span>',
  }

  const theme = {
    maxWidth: {
      '1/4': '10%',
    }
  }

  const eslint = {
     // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }

  const reactStrictMode = true

  // next.config.js object
  return {
    env,
    theme,
    eslint,
    reactStrictMode
  }
}