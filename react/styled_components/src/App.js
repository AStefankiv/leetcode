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
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <Title>
        Hello World
      </Title>
    </Wrapper>
  );
}

export default App;