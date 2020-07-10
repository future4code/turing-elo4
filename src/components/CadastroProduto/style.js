import styled from 'styled-components'

export const Container = styled.main`
display:flex;
flex-flow: column wrap;
justify-content:center;
align-items:center;
width: 900px;
height: 100vh;
margin: 0 auto;
`

export const Container2 = styled.div`
display:flex;
flex-direction: row wrap;
width:100%;
min-height: 50vh;
justify-content:space-around;
align-items: center;
margin:4px;
padding:8px;
`

export const Form = styled.div`
display:flex;
flex-direction: column;
padding:8px;
width:45%;
min-height: 90%;
`
export const AddImgage = styled.div`
background-color:#ccc;
border-radius:8px;
display:flex;
align-self: flex-start;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width:400px;
height: 180px;
`

export const Input = styled.input`

border: 1px solid black;
margin-bottom:16px;
width:100%;
`