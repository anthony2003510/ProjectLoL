import React from 'react'
import styled from 'styled-components'
import { TfiClose } from "react-icons/tfi";
function Modal({children, VisibilidadModal,setVisibilidadModal,title}) {
  return (
    <>
        {VisibilidadModal && 
        <Overlay>
            <ContenedorModal className='text-[#f2f2f2]'>

                <Encabezado>
                    <h2 className='text-[#f2f2f2]'>{title}</h2>
                </Encabezado>
                <CerrarModal onClick={() => setVisibilidadModal(false)}><TfiClose size={20}/></CerrarModal>
                {children}

            </ContenedorModal>
        </Overlay>
        }
    </>
  )
}

export default Modal

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
   width: 500px;
   min-height: 100px;
   background : #091428;
   position: relative;
   border-radius: 2.5px;
   box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
   padding: 20px;
`;

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;

`;

const CerrarModal = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;

    align-items: center;
    justify-content: center;
    
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 2.5px;
    color: #f2f2f2;

`;

