import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  padding: 16px 32px;
  min-height: 160px;
  background-color: var(--section-color);
  text-align: center;
`;

export const ListOptions = styled.ul`
  margin-top: 32px;
  display: flex;
  column-gap: 16px;
  justify-content: center;
`;

export const OptionsButton = styled.button`
  height: 32px;
  width: 120px;
  color: white;
  border: 2px solid var(--secondary-text-color);
  background-color: var(--elements-color);
  border-radius: 16px;
`;
