import React from 'react'


function Footer() {
 var fullYear = new Date().getFullYear()
  return (
    <footer className='bg-dark p-3'>
      <strong className='fs-5 text-white'>Padmaja Store</strong>

      <span className='ms-3 text-white'>
        Copy Rights Reserved
        <span className='fs-5 text-white me-2'> &copy;</span>
        {fullYear}
      </span>
    </footer>
  );
}

export default Footer