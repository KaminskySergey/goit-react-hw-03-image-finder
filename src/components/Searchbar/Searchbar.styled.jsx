import styled from 'styled-components'


export const Header = styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #000000;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchForm = styled.form`
display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
` 

export const  SearchFormButton = styled.button`
    display: inline-block;
    font-weight: 700;
    width: 64px;
    height: 48px;
    border: 1px solid black;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    color: black;
    position: absolute;
    &:hover {
        opacity: 1;
    }
`
export const SearchFormButtonLabel = styled.span`
    position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`

export const FormInput = styled.input`
    display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  text-align: center;
  
  &::placeholder {
  font: inherit;
  font-size: 18px;
}
`