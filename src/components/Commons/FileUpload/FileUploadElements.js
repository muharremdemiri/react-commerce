import styled from "styled-components";

export const UploadButton = styled.button`
  width: 95%;
  height: 150px;
  margin: 0 auto;
  cursor: pointer;
  background-color: inherit;
  border-radius: 10px;
  border: #a2a2a2 2px dashed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 600px) {
    width: 95%;
  }
`
export const UploadFileWrapper = styled.div`
  color: #676666;
`

export const UploadText = styled.p`
  font-size: 16px;
  margin-top: 10px;
`