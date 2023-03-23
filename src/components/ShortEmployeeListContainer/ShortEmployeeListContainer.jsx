import React from 'react'
import ShortEmployeeListHeader from '../ShortEmployeeListHeader/ShortEmployeeListHeader'
import ShortEmployeeList from '../ShortEmployeeList/ShortEmployeeList'
import ButtonSeeMore from '../ButtonSeeMore/ButtonSeeMore'

const ShortEmployeeListContainer = ({employees}) => {
  return (
    <div className='shortEmployeeListContainer'>
        <ShortEmployeeListHeader employees={employees} />
        <ShortEmployeeList employees={employees}/>
        <ButtonSeeMore/>
    </div>
  )
}

export default ShortEmployeeListContainer