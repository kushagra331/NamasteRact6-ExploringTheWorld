import React from 'react'
import { ShimmerPostList,ShimmerPostItem } from "react-shimmer-effects";

export default function ShimmerUI() {
  return (
    <div className='shimmer-container'>
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
        {/* <ShimmerPostItem card title cta /> */}
    </div>
  )
}
