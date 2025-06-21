import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Layout />;
    </ThemeProvider>
  );
};

export default App;
