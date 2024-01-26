import React, { useEffect, useState } from 'react'
import { DataTable } from '../DataTable'
import { AdminParentColumns } from './AdminParentColumns'
import ParentApi from '../../../services/Api/ParentApi'

export default function AdminParentList() {
    const [data, setData] = useState([])
    useEffect(()=>{
        ParentApi.all().then(({data})=>setData(data.data))
    })
  return (
    <>
        <DataTable columns={AdminParentColumns} data={data}/>
    </>
  )
}
