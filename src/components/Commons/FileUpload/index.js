import React from "react";
import { UploadButton, UploadFileWrapper, UploadText } from './FileUploadElements';
import { BsPlusLg } from "react-icons/bs";

const FileUpload = ({text= 'Ngarko fotografi'}) => {
  return (
      <UploadButton>
          <UploadFileWrapper>
              <BsPlusLg style={{fontSize:'35px'}}/>
              <UploadText>{text}</UploadText>
          </UploadFileWrapper>
      </UploadButton>
  )
}

export default FileUpload;