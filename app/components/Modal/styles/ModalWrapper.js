import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: relative;
  background-color: ${p =>
    p.theme.isDark ? p.theme.dark[200] : p.theme.light[50]};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
  max-width: 950px;
  padding: 20px;
  z-index: 6666;
`;

export default ModalWrapper;
