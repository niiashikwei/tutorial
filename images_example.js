import React, { Component } from 'react'
import { Image } from 'react-native'

const ImagesExample = () => (
    <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
           style = {{ width: 200, height: 200 }}
    />
)
export default ImagesExample