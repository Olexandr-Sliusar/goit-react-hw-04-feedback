import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 400px;
  border: 1px solid #cdcbcb;
  border-radius: 4px;

  /* background-color: #bdbdbd; */
  /* gap: 8px; */
  padding: 14px;
  overflow: hidden;
  margin-top: 30px;
  /* 
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101', 
  */
  & h2 {
    /* margin-bottom: 15px; */
  }
`;
export const Controls = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 15px;

  & button {
    display: flex;
    gap: 5px;
    width: 100px;
    align-items: center;
    justify-content: center;
    padding: 3px 0;
  }
`;
