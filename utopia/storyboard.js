import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { DecorativeLines } from '/src/cardcomponents/decorations.js'
import { Description } from '/src/cardcomponents/description.js'
import { Name } from '/src/cardcomponents/name.js'
import { Rating } from '/src/cardcomponents/rating.js'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { ImageContainer } from '/src/cardcomponents/imagecontainer.js'
import { Profile } from '/src/profile.js'
import { AquaMan } from '/src/stickers.js'
import { Wonderer, Cryophile } from '/src/stickers.js'
import { UserProPic } from '/src/pro-pic.js'

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <Scene
      style={{
        width: 834,
        position: 'absolute',
        left: -1312,
        top: -593,
      }}
      data-label='iPad Pro 11"'
      data-uid='cc6'
    >
      <App style={{}} data-uid='a28' />
    </Scene>
    <DecorativeLines
      style={{
        width: 1162,
        position: 'absolute',
        left: -199,
        top: 1198,
      }}
      data-uid='97a'
    />
    <Description
      description='testing the card out la la la description'
      style={{
        position: 'absolute',
        left: -291,
        top: 578.5,
        padding: '5px 20px 14px 20px',
        borderRadius: '0px 0px 20px 0px',
      }}
      data-uid='555'
    />
    <ImageContainer
      imageUrl='https://cdn.utopia.app/editor/sample-assets/martini.jpg'
      style={{ position: 'absolute', left: -198, top: 446 }}
      data-uid='fbc'
    />
    <Stamp
      name='04 19 2011'
      style={{
        position: 'absolute',
        left: 585,
        top: 498.5,
      }}
      color='var(--orange)'
      data-uid='f7b'
    />
    <Rating
      rating={5}
      style={{
        position: 'absolute',
        left: -291,
        top: 855,
        padding: '25px 20px',
        borderRadius: 20,
      }}
      color='var(--orange)'
      data-uid='163'
    />
    <Name
      text='Drink a Martini on Mount Everest'
      style={{
        position: 'absolute',
        width: '700px',
        left: 126,
        top: 1056,
      }}
      data-uid='fa4'
    />
    <div
      style={{
        backgroundColor: 'var(--off-white)',
        position: 'absolute',
        left: -103,
        top: 979,
        width: 966,
        height: 316,
        zIndex: -10,
      }}
      data-uid='cef'
    />
    <Scene
      style={{
        width: 834,
        height: 848,
        position: 'absolute',
        left: -270,
        top: -594.25,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page'
      data-uid='c97'
    >
      <Profile data-uid='aa2' />
    </Scene>
    <Wonderer
      style={{
        position: 'absolute',
        left: 730,
        top: 796,
        width: 100,
        height: 100,
      }}
      data-uid='b9d'
    />
    <Cryophile
      style={{
        position: 'absolute',
        left: 542,
        top: 866.5,
        width: 100,
        height: 100,
        borderRadius: 10,
      }}
      data-uid='45e'
    />
  </Storyboard>
)
