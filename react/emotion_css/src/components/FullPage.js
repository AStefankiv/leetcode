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
    border-radius: 15px;
    margin: 10px;
    color: white;
    padding: 15rem;
  `;

  return (
    <div
    css={css`
      display: flex;
      flex-direction: column;
      height: auto;
      margin: 0;
      `
    }>

      <div css={css`
      ${sectionStyle}
      background-color:rgb(251, 118, 195);
      margin-top: 30px;
      `}>
        <ComponentOne />
      </div>
      <div css={css`
      ${sectionStyle}
      background-color:rgb(75, 249, 249);
      `}>
        <ComponentTwo />
      </div>
      <div css={css`
      ${sectionStyle}
      background-color:rgb(150, 240, 222);
      margin-bottom: 30px;
      `}>
        <ComponentThree />
      </div>
    </div>
  )
}

export default Fullpage;