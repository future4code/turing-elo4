import styled from 'styled-components'

export const CardContainer = styled.div`
        position: relative;
        border-radius: 12px;
        height: 330px;
        width: 250px;

        img {
            box-shadow: 1px 1px 5px #6a34bb;
            border-radius: 12px;
            object-fit: cover;
            object-position: center;
        }

        > img {
            height: 100%;
            width: 100%;
        }
`

export const Thumbnails = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    bottom: 0;
    padding: 20px 8px;
    
    > img {
        width: 30%;
    }
`