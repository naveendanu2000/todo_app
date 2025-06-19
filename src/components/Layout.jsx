import { ThemeProvider } from "../context/ThemeContext";
import Header from './Header';

const Layout = ()=>{
   return (
    <div>
        <ThemeProvider>
            <Header />
        </ThemeProvider>
    </div>
   ); 
}

export default Layout;