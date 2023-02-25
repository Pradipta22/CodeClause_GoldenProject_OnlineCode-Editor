import React from 'react'
import Editor from './editor'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { Box, styled } from '@mui/system'

const Cointainer = styled(Box)`
 display: flex;
 background-color: #060606;
 height:50vh;
`
const Code = () => {

  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);
  return (
    <Cointainer>
     <Editor 
       heading = 'HTML'
       icon = '/'
       color = '#FF3C41'
       value = {html}
       onChange = {setHtml}
     />
     <Editor 
       heading = 'CSS'
       icon = '*'
       color = '#0EBEFF'
       value = {css}
       onChange = {setCss}
     />
     <Editor 
        heading = 'JavaScript'
        icon = '( )'
        color = '#FCD000'
        value = {js}
       onChange = {setJs}
     />
    </Cointainer>
  )
}

export default Code
