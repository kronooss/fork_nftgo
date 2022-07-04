import React from "react";
import Layout from "./components/Layout";
import Main from "./components/components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Main />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
