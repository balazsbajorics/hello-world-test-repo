import { UserProPic } from './pro-pic.js'
import {
  AquaMan,
  Wonderer,
  BirbWatcher,
  Mixologist,
  Tropicologist,
  RiskTaker,
  Cryophile,
} from './stickers.js'
import {
  DecorativeLines,
  Checkerboard,
} from './cardcomponents/decorations.js'

export var Profile = (props) => {
  return (
    <div data-uid='09b'>
      <div
        style={{
          width: '100%',
          background: 'var(--off-white)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '44px 0px 25px',
          gap: '26px',
          boxShadow: '0px 2px 33px #674168',
          left: 0,
        }}
        data-uid='46e'
      >
        <div
          style={{
            width: '100%',
            color: 'var(--orange)',
            fontFamily: 'primary',
            textAlign: 'center',
            fontWeight: 400,
            fontStyle: 'normal',
            border: '0px solid rgb(255, 174, 52, 1)',
            fontSize: '22px',
            textShadow:
              '0px 1px 1px #646464, 0px 4px 1px rgba(0, 0, 0, 0.25)',
          }}
          data-uid='f59'
        >
          Things I want to do
        </div>
        <div style={{ width: '130%' }} data-uid='750'>
          <div
            style={{
              color: 'var(--orange)',
              fontFamily: 'primary',
              textAlign: 'center',
              fontWeight: 400,
              fontStyle: 'normal',
              border: '0px solid rgb(255, 174, 52, 1)',
              fontSize: '72px',
              lineHeight: '125%',
              textShadow:
                '0px 1px 1px #646464, 0px 8px 1px rgba(0, 0, 0, 0.25)',
            }}
            data-uid='598'
          >
            BBeffore I Go
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          ...props.style,
        }}
        data-uid='ffe'
      >
        <DecorativeLines data-uid='360' />
        <Checkerboard
          style={{
            height: 335,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 40,
            padding: 40,
          }}
          color1='var(--yellow)'
          color2='var(--orange)'
          data-uid='f18'
        >
          <RiskTaker
            style={{
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              transform: 'rotate(42deg)',
              borderRadius: '5px',
            }}
            data-uid='ad9'
          />
          <Mixologist
            style={{
              transform: 'rotate(5deg)',
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              padding: '5px 0',
            }}
            data-uid='3b1'
          />
          <AquaMan
            style={{
              borderRadius: '50%',
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
            }}
            data-uid='7bf'
          />
          <Wonderer
            style={{
              transform: 'rotate(-15deg)',
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              borderRadius: '0 0 30% 30% ',
            }}
            data-uid='94b'
          />
          <Tropicologist
            style={{
              borderRadius: '30px 30px 0 0',
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              paddingTop: 5,
            }}
            data-uid='36c'
          />
          <BirbWatcher
            style={{
              width: 121,
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              padding: '10px 0px 10px 10px',
            }}
            data-uid='3c1'
          />
        </Checkerboard>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexBasis: 0,
            justifyContent: 'space-between',
            padding: '40px',
          }}
          data-uid='58c'
        >
          <Cryophile
            style={{
              boxShadow:
                '0px 2px 4px 5px rgb(0, 0, 0, 0.12)',
              borderRadius: '50%',
            }}
            data-uid='e48'
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            data-uid='c23'
          >
            <div
              style={{
                color: 'var(--purple)',
                fontFamily: 'primary',
                fontSize: '38px',
              }}
              data-uid='63a'
            >
              McKayyyla Lannkau
            </div>
            <div data-uid='47a'>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                data-uid='d91'
              >
                <div data-uid='ebd'>Primary Location: </div>
                <div data-uid='db2'>New York City, USA</div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                data-uid='428'
              >
                <div data-uid='5f3'>Living Since: </div>
                <div data-uid='3e5'>1999</div>
              </div>
              <div
                style={{
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: '144%',
                  marginBottom: 5,
                  position: 'relative',
                  height: 26,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                data-uid='c20'
              >
                <div data-uid='17a'>Life Level: </div>
                <div data-uid='bb9'>Advanced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
