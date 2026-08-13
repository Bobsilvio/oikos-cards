/**
 * ESLint per i bundle card — solo ciò che rompe a runtime.
 *
 * Perché esiste: la card bolletta mostrava «t is not defined» e non si
 * apriva. `t` arriva da useT() e vive solo dentro un componente; era usato in
 * componenti che non lo avevano, e in una costante di modulo. Niente lo
 * segnalava: le card si costruiscono con Vite, che non fa analisi dei
 * riferimenti, e il difetto compare solo davanti all'utente.
 *
 * Il pannello aveva già questo controllo ed è così che gli stessi difetti
 * erano stati presi lì. Mancava ai repo delle card.
 */
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  { ignores: ['**/dist/**', 'node_modules/**', 'tools/**', 'dist-cards/**'] },
  {
    files: ['cards/**/*.{js,jsx}'],
    linterOptions: { reportUnusedDisableDirectives: 'off' },
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      // Hook dopo un return o dentro una condizione: React error #310, il
      // difetto più comune nelle card secondo la documentazione dell'SDK.
      'react-hooks/rules-of-hooks': 'error',
      // La ragione per cui questo file esiste.
      'no-undef': 'error',
      'no-dupe-keys': 'error',
      'no-unreachable': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
    },
  },
]
