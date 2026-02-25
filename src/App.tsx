import AppRouter from "./components/AppRouter";
import PageLayout from "./components/layout/PageLayout";

export default function App() {
  return (
    <PageLayout>
      <AppRouter />
    </PageLayout>
  );
}
