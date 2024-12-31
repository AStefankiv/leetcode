/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentTwo = () => {
  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: flex-start;
      `}>
      <div
      css={css`
        font-size: 24px;
        font-weight: bold;
        width: 50%;
        `}
      >About Us</div>
      <div
      css={css`
        font-size: 20px;
        width: 130%;
        `}
      >Nano Folio is simple HTML template with a minimal very light-weight custom CSS file. Max content width is 940 pixels. You can easily change the width or any part in this template. Gallery comes with a pop-up image and simple categories.
Please support Tooplate website by telling your friends about it. That is going to be very helpful for us. Feel free to message us via email or live chat if you have anything to say.</div>
    </div>
  )
}

export default ComponentTwo;