
import CursorProvider from './component/providers/cursorProvider'
import "./App.css";
import { About, Brand, Find, Head, Team } from './component';

// import Sides from './Sides';

export default function App() {
  return (
    <CursorProvider>
      <div className="App">
        <Head/>
        <About/>
        <Brand/>
        <Find/>
        <Team/>
      </div>
    </CursorProvider>
  );
}
