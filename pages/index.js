import React from 'react'
import { IconCache } from '../icons/with-icon'
import ArrowLeft from '../icons/arrow-left'

const Index = () => {
  return (
    <div>
      <IconCache.Provider value={{}}>
        <ArrowLeft />
        <ArrowLeft size={30} color="blue" />
        <ArrowLeft size={50} color="red" />
      </IconCache.Provider>
    </div>
  )
}

export default Index
