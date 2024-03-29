import Navbar from "@/components/navbar";
import "../app/globals.css";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;