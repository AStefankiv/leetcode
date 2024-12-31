/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

const Fullpage = () => {
  const sectionStyle = css`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    border-radius: 0px;
    margin: 10px;
    &:hover {
      color: white;
    }
  `;

  return (
    <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100vh;
      margin: 0;
      `
    }>

      <div css={css`
      ${sectionStyle}
      background-color:rgb(246, 143, 143);
      `}>
        <ComponentOne />
      </div>
      <div css={css`
      ${sectionStyle}
      background-color:rgb(151, 250, 151);
      `}>
        <ComponentTwo />
      </div>
      <div css={css`
      ${sectionStyle}
      background-color:rgb(154, 154, 255);
      `}>
        <ComponentThree />
      </div>
    </div>
  )
}

export default Fullpage;