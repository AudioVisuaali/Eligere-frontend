import styled from 'styled-components';

const Thumbnail = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  margin-right: 20px;
  margin-left: 20px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  width: 125px;
  height: 185px;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px,
    rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
`;

export default Thumbnail;
