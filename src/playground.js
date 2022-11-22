import { View } from 'utopia-api'
import '../public/globals.css'

export var Playground = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
      }}
      data-uid='a7b'
    >
      <div
        style={{
          height: 150,
          position: 'absolute',
          left: 42,
          top: 76,
        }}
        data-uid='b15'
      >
        <img
          src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
          alt='Utopia logo'
          style={{ height: '100%' }}
          data-uid='b0e'
        />
      </div>
    </div>
  )
}
