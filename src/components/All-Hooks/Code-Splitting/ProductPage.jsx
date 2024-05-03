import React,{useState,lazy,Suspense} from 'react'

const ProductReview = lazy(()=> import('./ProductReview'));
const ProductDescription = lazy(()=> import('./ProductDescription'));


function ProductPage() {
    const [selectedTab, setSelectedTab] = useState('');

  return (
    <div>
        <div>
            <button onClick={()=> setSelectedTab('discription')}>Description</button>
            <button onClick={()=> setSelectedTab('review')}>Review</button>
        </div>
        <Suspense fallback={<div>Loading .....</div>}>
            {selectedTab === 'discription' && <ProductDescription />}
            {selectedTab === 'review' && <ProductReview />}

        </Suspense>
    </div>
  )
}

export default ProductPage