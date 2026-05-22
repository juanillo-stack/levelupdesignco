import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import IndexPage from "@/pages/index";
import TrabajosPage from "@/pages/trabajos";
import PaginaWebMalagaPage from "@/pages/pagina-web-malaga";
import ConseguirClientesMalagaPage from "@/pages/conseguir-clientes-malaga";
import ComoConseguirClientesPage from "@/pages/como-conseguir-clientes-negocio";
import PrivacidadPage from "@/pages/privacidad";
import CookiesPage from "@/pages/cookies";
import AvisoLegalPage from "@/pages/aviso-legal";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={IndexPage} />
      <Route path="/trabajos" component={TrabajosPage} />
      <Route path="/pagina-web-malaga" component={PaginaWebMalagaPage} />
      <Route path="/conseguir-clientes-malaga" component={ConseguirClientesMalagaPage} />
      <Route path="/como-conseguir-clientes-negocio" component={ComoConseguirClientesPage} />
      <Route path="/privacidad" component={PrivacidadPage} />
      <Route path="/cookies" component={CookiesPage} />
      <Route path="/aviso-legal" component={AvisoLegalPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
