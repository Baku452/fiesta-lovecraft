/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        abyss: "#050806",
        elder: "#0d2a1f",
        plague: "#174d37",
        void: "#160b24",
        rite: "#321c4f",
        relic: "#b59655",
        bone: "#efe5c8",
      },
      boxShadow: {
        ritual: "0 0 0 1px rgba(181,150,85,.22), 0 24px 70px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
};
