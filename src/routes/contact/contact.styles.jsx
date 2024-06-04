// contact.styles.jsx
import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  font-family: Garamond, Georgia, 'Times New Roman', serif;
  font-size: clamp(14px, 4vw, 18px);

  h2{
    font-family: Garamond, Georgia, 'Times New Roman', serif;
    font-size: clamp(31px, 4vw, 35px);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
