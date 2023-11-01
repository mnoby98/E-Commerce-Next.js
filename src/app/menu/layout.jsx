import Header from "../components/Header";

export default function MenuLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
