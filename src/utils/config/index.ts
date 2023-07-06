export const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://portfolio.clarkhao.repl.co";