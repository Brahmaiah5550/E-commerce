import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { verifyToken } from '../toolkit/Slices/profileSlice/profileSlice'
// import { verifyToken } from '../toolkit/Slices/profileSlice/profileSlice'

function Profile() {
 var profileState = useSelector((state)=> state.profileReducer)
  var dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(verifyToken())
  })
  
  return (
    <div>Profile component</div>
  )
}

export default Profile