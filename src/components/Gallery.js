import React from 'react'

const Gallery = () => {
  return (
  
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/images/image1.png" alt="Image1"></img>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/images/image2.png" alt="Image2"></img>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/images/image3.png" alt="Image3"></img>
    </div>
</div>

  )
}

export default Gallery