import React from 'react'
import ShortenItem from './ShortenItem'

const ShortenUrlList = ({ data = [] }) => {
  // Add safety check for data
  if (!data || !Array.isArray(data)) {
    return (
      <div className='my-6 text-center'>
        <p className='text-slate-600'>No URLs available</p>
      </div>
    );
  }

  return (
    <div className='my-6 space-y-4'>
        {data.map((item) => (
            <ShortenItem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default ShortenUrlList