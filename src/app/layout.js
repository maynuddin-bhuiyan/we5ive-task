import Navbar from "@/components/navbar";
import "../styles/globals.css";
import Footer from "@/components/footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Optional 
import "swiper/css/pagination"; // Optional 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "We5ive",
  description: "Design E-commerce Landing & Details Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
