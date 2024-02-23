

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <div className="App">
      <p>Hello World</p>
      { myelement }
      <p>React is {sum} time better with JSX</p>
      <h3>Firstname: {user.firstName}</h3>
      <h3>Lastname: {user.lastName}</h3>
    </div>
  );
}

export default App;
