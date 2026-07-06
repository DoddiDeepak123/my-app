
import './App.css';
// seperation of component into different filess for better maintainability and reusability
import Header from './ReactComponents/Header';
import Content from './ReactComponents/Content';
import Footer from './ReactComponents/Footer';
import Welcome from './ReactComponents/Welcome';
import LifeCyclesMethods from './lifecyclemethods/lifecyclemethod';
 import ConditionallyRenderingComponent from './day7/ConditionalRenderingComponent';
 import Login from '../src/loginpage/loginpage';
 import Register from '../src/loginpage/Registerpage';
//import ReuseableButton from './ReuseableButton';
//import Button from './Button';
//import ParentComponent from './ParentComponent';
//import GreetingMessage from '../src/jsx/Greetingmessage';
//import Header from './header';
//import Button from './Button';
// import ParentComponent from './ParentComponent';
// import GreetingMessage from '../src/Jsx/GreentingMessage';
import AppRouter from './day8Routing/AppRouter';



/*function Header() {
    return (
        <h1 style={{ backgroundColor: 'red', height: '50px' }}> This is a React sample App</h1>
    )
}
function Content() {
    return (
        <p style={{ backgroundColor: 'blue', height: '500px' }}> This is a sample content for the React App</p>
    )
}

function Footer() {
    return (
        <p style={{ backgroundColor: 'yellow', height: '50px' }}> This is a sample footer for the React App</p>
    )
} 
*/

function App() {
    const login = false; 
  return (
    <div className="App">
      {/* <Header />
      <ParentComponent />
      <Button label="Click me" /> 
      <Button label="Submit"  />  */}
      {/* <GreetingMessage />
      // Reusabilty of the button component
      <ReuseableButton message="Hello, I'm a reusable button!" />
      <ReuseableButton message="Welcome!" />
      <ReuseableButton message="Hello World!" /> */}
      {/* <headers> 
        <h1 styles={{ backgroundColor: 'red', height: '50px' }}> This an React sample App</h1>
      </headers>
      <content>
        <p styles={{ backgroundColor: 'blue', height: '500px' }}> This is a sample content for the React App</p>
      </content>
      <footer>
        <p styles={{ backgroundColor: 'yellow', height: '50px' }}> This is a sample footer for the React App</p>
      </footer> */}
       {/* <Welcome /> */}
       {/* <Header />
        <Content />
        <Footer /> */}

         {/*<div>
      {login ? <Login /> : <Register />}
    </div> */}
    <AppRouter />
    </div>
  );
}

export default App;