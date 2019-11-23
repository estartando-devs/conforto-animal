import React from 'react';
import { ModalContainer } from './ModalStyle.js';

export default function Modal(props) {
  return (
    <ModalContainer style={{left: props.show ? 0 : "100vw"}}>
      <p id='close' onClick={props.close}>X</p>
      {props.children}
    </ModalContainer>
  );
}