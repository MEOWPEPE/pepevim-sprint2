import { Button } from "@/components/ui/button"
import { SingupView } from "./views/SingupView";
import LoginView from "./views/LoginView";
function App() {

  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="outline" className="bg-amber-100">Button</Button>
      <LoginView/>
      <SingupView/>
    </>
  );
}

export default App;
