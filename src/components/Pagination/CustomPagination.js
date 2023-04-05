import React from 'react'
import  Pagination  from '@material-ui/lab/Pagination'
import {  ThemeProvider } from '@material-ui/core'


const CustomPagination = ({setPage, numOfPages= 10}) => {
  const handlePageChange =  (page) => {
     setPage(page);
    window.scroll(0, 0)
  }

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
     
    }}>
      <ThemeProvider>
      <Pagination color="primary" className='pagacss'  onChange={(e) => 
        handlePageChange(e.target.textContent)} 
        count={numOfPages}
        hideNextButton
        hidePrevButton
        />
        </ThemeProvider>
    </div>
  )
}

export default CustomPagination
