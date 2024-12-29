// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello World</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

import styled from 'styled-components';

function App() {
  const Button = styled.button`
    background: ${props => props.primary ? '#BF4f74' : '#white'};
    color: ${props => props.primary ? 'white' : '#BF4f74'};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4f74;
    border-radius: 3px;
  `;


  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
}

export default App;