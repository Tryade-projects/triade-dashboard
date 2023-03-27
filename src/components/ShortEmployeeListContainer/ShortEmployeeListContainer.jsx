import React from 'react'
import ShortEmployeeListHeader from '../ShortEmployeeListHeader/ShortEmployeeListHeader'
import ShortEmployeeList from '../ShortEmployeeList/ShortEmployeeList'
import ButtonSeeMore from '../ButtonSeeMore/ButtonSeeMore'
import { useStickyState } from '../../utils/useStickyState'


const ShortEmployeeListContainer = () => {
  const [employees, setEmployees] = useStickyState("employees", [])

  console.log(employees);

  return (
    <div className='shortEmployeeListContainer'>
        <ShortEmployeeListHeader employees={employees} />
        <ShortEmployeeList employees={employees}/>
        <ButtonSeeMore/>
    </div>
  )
}

export default ShortEmployeeListContainer