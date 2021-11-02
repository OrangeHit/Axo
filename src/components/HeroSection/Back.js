import styled from 'styled-components';
import Fondo from '../../Images/Backgrounda.jpg'


export const ImageBg = styled.div`
  background-image: url(${Fondo});
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  backgrond: #232a34;
  display: flex;
  margin: none;
`;

