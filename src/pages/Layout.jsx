import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col bg-[#000]">
      <Nav />
      <main className="flex-1 min-h-[100vh]">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
