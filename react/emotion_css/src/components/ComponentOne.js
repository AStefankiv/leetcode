/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentOne = () => {
  return (
    <div>
    <div css={css`
      font-size: 24px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      `}
    >
      <span>🤍</span>
    </div>
    <div>Nano Folio</div>
    </div>
  )
}

export default ComponentOne;