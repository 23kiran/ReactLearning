import "./App.css";
// import ClickCounter  from './components/ClickCounter';
// import ClickCOunterTwo from './components/ClickCOunterTwo';
// import HoverCounter from './components/HoverCounter';
// import { UserProvider } from './components/userContexxt';
// import User from './User';
// import ErrorBoundary from './components/ErrorBoundary';
// import ErrorDemo from './components/ErrorDemo';
// import ModalDemoParent from './components/ModalDemoParent';
// import FRParentInput from './components/FRParentInput';
// import PortalsDemo from './components/PortalsDemo';
// import Greet from './components/samplecontrol'
// import ClassComponent from './components/classsamplecontrol'
// import Hello from './components/Hello';
// import Message from './components/Message'
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import UserGreeting from './components/UserGreeting';
// import ListMapping from './components/ListMapping';
// import StyleSheet from './components/StyleSheet';
// import FormHandleing from './components/FormHandleing';
// import LifeCycleA from './components/LifeCycleA';
// import ParentComponent from './components/ParentComponent';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
import ListManager from "./components/ListManager";
function App() {
  return (
    <div className="App">
      <ListManager />
      {/* <ClickCOunterTwo/>
      <HoverCounter/>
      <UserProvider value='Kiran'>
      <User render={(isLoggedIn) => isLoggedIn?'Kiran':'Guest'}/>
      </UserProvider> */}
      {/* <ClickCounter/> */}
      {/* <ErrorBoundary>
        <ErrorDemo heroName='Superman'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <ErrorDemo heroName='Wonderwomen'/>
        </ErrorBoundary>
        <ErrorBoundary>
        <ErrorDemo heroName='Joker'/>
      </ErrorBoundary> */}
      {/* <ModalDemoParent/> */}
      {/* <PortalsDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComponent/> */}
      {/* <LifeCycleA/> */}
      {/* <FormHandleing id='formHandler1'/> */}
      {/* <StyleSheet primary={true} fontXL={true}/> */}
      {/* <ListMapping/> */}
      {/* <UserGreeting/>
      <FunctionClick/>
      <Counter addvalue='7'/>
      <Greet name='Bruce' heroname='Batman'>
        Secret car
        </Greet>
      <Greet name='Diana' heroname='Wonder Women'/>
      <Greet name='Kiran' heroname='Kiran'/>
      <ClassComponent name='Bruce' heroname='Batman'>
        Secret car
        </ClassComponent>
      <ClassComponent name='Diana' heroname='Wonder Women'/>
      <ClassComponent name='Kiran' heroname='Kiran'/>
      <Message/>
      <Hello/> */}
    </div>
  );
}

export default App;
