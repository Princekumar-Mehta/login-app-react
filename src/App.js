import "./App.css";
import "./css/login.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./utils/auth";
import RoutesList from "./utils/RouteList";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar />
          <RoutesList />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
