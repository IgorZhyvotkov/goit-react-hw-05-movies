import styled from '@emotion/styled';

export const CastList = styled.ul`
  background-image: linear-gradient(
    to top,
    rgba(3, 18, 181, 0.6),
    rgba(300, 50, 70, 0.4)
  );
  background-color: rgba(117, 190, 218, 1);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  gap: 5px;
`;
export const CastImg = styled.img`
  width: 100px;
`;

export const CastTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 15px;
  font-weight: 350;
`;
