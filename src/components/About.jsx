import React from 'react'
export default function About(props) {
  return (
    <div class={props.mode==='light'?'colblack':'colwhite'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex reiciendis delectus impedit blanditiis, adipisci quis, distinctio porro labore voluptatum repudiandae qui explicabo fugit laboriosam dignissimos eius eveniet ea nostrum!
    </div>
  )
}
