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
  const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.$inputColor || "#BF4F74"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  `;

  return (
    <div>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    </div>
  );
}

export default App;