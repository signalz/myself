import React from 'react'

import './my-picture-page.scss'

const BigButton = () => (
  <div className="inner">
    <div className="content">
      <h1>Pictures</h1>
      <h2>
        Son pictures gallery
        <br />
      </h2>
      <div>
        <span>Lets Go</span>
      </div>
    </div>
    {/* <a href="#" class="button hidden">
        <span>Let's Go</span>
      </a> */}
  </div>
)

// const SmallButton = () => <div />

const MyPicturesPage = () => (
  <div className="wrapper">
    <BigButton />
  </div>
)

export default MyPicturesPage
