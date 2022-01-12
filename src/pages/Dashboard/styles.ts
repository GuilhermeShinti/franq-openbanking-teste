import styled from "styled-components";

export const Container = styled.div`
    hr {
        margin-bottom: 10px;
    }

    ul {
        display: flex;
        list-style: none;
        flex-flow: row wrap;
        justify-content: flex-start;
        margin-bottom: 50px;

        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 5px;

            background: #efefef;
            width: 200px;
            margin: 0 5px 10px 5px;
            padding: 10px;

            strong {
                color: #484848;
            }

            span {
                &.variation {    
                    color: #fff;
                    font-size: 0.8rem;
                    font-weight: 500;
                    padding: 2px 3px;
                    border-radius: 3px;
                }

                &.positive {    
                    background: #006608;
                }

                &.negative {
                    background: #660000;
                }

                &.points {
                    font-weight: 600;
                    /* font-size: 1.4rem; */
                }
            }

            div {
                &.values {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

        &.currencies {
            li {
                strong {
                    display: block;
                    margin: 0 0 10px 0;
                }
            }
        }        

        &.stocks {
            li {
                p {
                    &.location {
                        font-size: 0.8rem;
                        margin: 0 0 10px 0;
                    }
                }
            }
        }

        &.bitcoin {
            li {
                strong {
                    display: block;
                    margin: 0 0 10px 0;
                }

                span {
                    &.last {
                        font-weight: 600;
                        /* font-size: 1.4rem; */
                    }                    
                }
            }
        }     
    }
`;


