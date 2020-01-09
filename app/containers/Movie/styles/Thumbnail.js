import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 124px;
  height: 186px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
  margin-right: 20px;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.8);
  }
`;

export default Thumbnail;
