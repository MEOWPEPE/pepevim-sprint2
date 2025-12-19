import { Button } from "@/components/ui/button"
import LoginView from "./views/LoginView";
import { SingupView } from "./views/SignupView";
import DashBoard from "./views/DashBoard";
function App() {
  return (
    <>
      <Navbar className="w-full" />
      <HomeView />
    </>
  );
}

export default App;
