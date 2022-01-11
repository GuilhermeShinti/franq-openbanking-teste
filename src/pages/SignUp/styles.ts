import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    /* background: linear-gradient(180deg, #22202c, #402845); */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    background: #f9f9f9;
    width: 100%;
    max-width: 315px;
    text-align: center;
    box-shadow: 2px 2px 10px 0px rgb(0 0 0 / 50%);
    border: 1px solid #bdbdbd;
    border-radius: 5px;

    h2 {
        margin-top: 30px;
        color: #626262;
    }
    
    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        padding: 10px;


        input {
            background: #fff;
            height: 40px;
            border: 1px solid #bdbdbd;
            padding: 0 15px;
            border-radius: 4px;
            color: #1c1c1c;
            margin: 0 0 10px;
            font-size: 18px;
            
            /* &::placeholder {
                color: rgba(255, 255, 255, 0.5);
            } */

            &:focus { 
                outline: none !important;
                border-color: #626262;
                /* box-shadow: 0 0 10px #ddd; */
            }

            &:hover {
                background: #f1f1f1;
            }
        }

        button {
            margin: 5px 0 0;
            height: 40px;
            border: 0px;
            border-radius: 4px;
            background: #456691;
            color: #fff;
            font-size: 18px;
            transition: background 0.2s;


        }

        a {
            margin-top: 15px;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.6);
            height: 21px;
        }
    }
`;