import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/Utils/breakpointsMedia';

const InputWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40vw;
  padding: 12px;
  border-radius: 5px;
  background: #2F2D4B;
  box-shadow: 0 0 10px 2px #222;
  overflow: hidden;

  color: #FFF;

  ${breakpointsMedia({
    xs: css`
        width: 90vw;
        font-size: 12px
      `,
    sm: css`
      width: 70vw;
    `,
    md: css`
      width: 50vw;
    `,
    lg: css`
      width: 40vw;
      font-size: 15px
    `,
    xl: css`
      width: 30vw;
    `,
  })}

`;

InputWapper.Button = styled.button`
  color: #888;
  font-size: 14px;
  padding: 10px;
  border-radius: 15px;
  background: rgba(44,77,250,0.43);
  vertical-align: middle;
  width: 150px;
  height: 45px;
  border: 1px solid rgba(44,77,250,0.23);

  &:hover,
  &:focus {
    cursor: not-allowed;
    background: rgba(44,77,250,0.43);
    border-color: rgba(44,77,250,0.23);
    box-shadow: 0 0 3px 2px rgba(44,77,250,0.23);
    outline: none;
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        &:hover,
        &:focus {
            cursor: not-allowed;
            background: rgba(44,77,250,0.1);
            border-color: rgba(44,77,250,0.23);
            box-shadow: 0 0 5px 1px rgba(44,77,250,0.23);
        }
      `;
    }

    return css`
      background: rgba(44,77,250,0.43);
      &:hover,
      &:focus {
        cursor: pointer;
        background: rgba(44,77,250,0.53);
        color: #fff;
        border-color: rgba(44,77,250,0.73);
        box-shadow: 0 0 5px 1px rgba(44,77,250,0.73);
      }
    `;
  }}

  ${breakpointsMedia({
    md: css`
    font-size: 18px;
    `,
  })}
`;

InputWapper.TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  margin-bottom: 17px;
  resize: none;
  padding: 10px;
  
  font-size: 16px;

  ${breakpointsMedia({
    md: css`
      font-size: 20px;
    `,
  })}

`;

InputWapper.Span = styled.span`
  display: inline;
  float: right;
  border: 1px solid black;
  border-radius: 90%;
  cursor: pointer;
  margin-top: -10px;
  margin-bottom: 35px;

  background: #FFF;

  ${breakpointsMedia({
    xs: css`
          padding: 5px;
        `,
    lg: css`
        padding: 5px;
    `,
  })}

`;

InputWapper.IconButton = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  float: right;
`;

InputWapper.MessageCad = styled.div`
  margin-top: 25px;
  font-size: 20px;
`;

export default InputWapper;
