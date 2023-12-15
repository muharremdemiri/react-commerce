import React from "react";
import {OverlayContainer, OverlayShade, OverlayPanel} from "./OverlayElements";
import {SubmitButton, Title, Paragraph} from "../AuthenticationElements";

const Overlay = () => {
  return (
      <OverlayContainer className="overlay-container">
          <OverlayShade className="overlay">
              <OverlayPanel className="overlay-panel overlay-left">
                  <Title>Mirë se u ktheve!</Title>
                  <Paragraph>Ju ftojmë të kyqeni që të mund të shfrytzoni gjithcka që ne ofrojmë</Paragraph>
                  <SubmitButton className="ghost" id="signIn">Kyqu</SubmitButton>
              </OverlayPanel>
              <OverlayPanel className="overlay-panel overlay-right">
                  <Title>Mirë se erdhe!</Title>
                  <Paragraph>Jepi të dhënat tua dhe fillo rrugëtimin me ne</Paragraph>
                  <SubmitButton className="ghost" id="signUp">Regjistrohu</SubmitButton>
              </OverlayPanel>
          </OverlayShade>
      </OverlayContainer>
  )
}

export default Overlay;