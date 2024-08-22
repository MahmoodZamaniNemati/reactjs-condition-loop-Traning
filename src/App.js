import logo from './logo.svg';
import { MyClasses } from "./MyClasses";
import './App.css';

function App() {
  const users = [
    { name: "mahmoud", age: 26 },

  ]
  const classList = [
    { name: 'html', finished: true },
    { name: 'javascript', finished: false },
    { name: 'css', finished: true },
    { name: 'bootstrap', finished: false },
    { name: 'react', finished: true },
    { name: 'python', finished: false },
  ];
  return (
    <div className="App">
      <GetAge age={26} />
      <GetAge age={30} />
      <GetAge age={20} />
      {
        users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
            </div>
          )
        })
      }
      {
      classList.map((classobj, index) => {
        return classobj.finished === true && <MyClasses key={index} classname={classobj.name} />
      })
      }
    </div>
  );
}
const GetAge = (props) => {
  return (props.age > 26 ? <h1>Over</h1> : <h1>Under</h1>)
}
export default App;
