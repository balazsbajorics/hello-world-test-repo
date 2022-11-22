// import * as React from 'react'
import '../public/globals.css'
import { useState, useEffect, useCallback } from 'react'
import { Stamp } from '/src/cardcomponents/stamp.js'
import {
  CategoryItem,
  ClearCategoriesButton,
} from './category-item.js'

import { DecorativeLines } from './cardcomponents/decorations.js'
import { Description } from './cardcomponents/description.js'
import { Name } from './cardcomponents/name.js'
import { Rating } from './cardcomponents/rating.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'
import { UserProPic } from '/src/pro-pic.js'
import { Mixologist } from '/src/stickers.js'

export var App = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      data-uid='653'
    >
      <div
        style={{
          width: '100%',
          background: 'var(--off-white)',
          zIndex: '100',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '44px 0px 25px',
          gap: '26px',
          boxShadow: '0px 2px 33px #674168',
          left: 0,
        }}
        data-uid='bf3'
      >
        <UserProPic
          style={{
            borderRadius: '50%',
            border: '6px solid var(--purple)',
            overflow: 'hidden',
            background: 'var(--orange)',
            flexBasis: 160,
            height: 160,
            width: 160,
            contain: 'layout',
            position: 'absolute',
            left: 654,
            top: 20,
          }}
          color='var(--purple)'
          data-uid='c99'
        />
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
          data-uid='e9f'
        >
          Things I want to do
        </div>
        <div style={{ width: '130%' }} data-uid='774'>
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
            data-uid='f58'
          >
            BBeffore I Go
          </div>
        </div>
        <Mixologist
          style={{
            backgroundColor: '/*#0091FFAA*/',
            width: 212,
            height: 196,
            contain: 'layout',
            borderRadius: 2,
            borderTopRightRadius: '97px',
            borderBottomLeftRadius: '96px',
          }}
          data-uid='618'
        />
        <div
          className='category-container'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '0px 0px 0px 40px',
            gap: 42,
            width: '100%',
            height: '55px',
            overflowX: 'scroll',
          }}
          data-uid='049'
        >
          <ClearCategoriesButton
            style={{
              borderRadius: '50px',
              padding: '0px 18px',
            }}
            data-uid='06d'
          />
          <CategoryItem
            selected={false}
            name='aquatic'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
            data-uid='9fa'
          />
          <CategoryItem
            selected={false}
            name='rare'
            style={{
              padding: '3px 27px 13px 10px',
              borderRadius: '50px',
            }}
            data-uid='193'
          />
          <CategoryItem
            selected={false}
            name='nearby'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
            data-uid='d48'
          />
          <CategoryItem
            selected={false}
            name='trending'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
            data-uid='e62'
          />
          <CategoryItem
            selected={false}
            name='odd'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
            data-uid='96a'
          />
          <CategoryItem
            selected={false}
            name='risky'
            style={{
              padding: '13px 27px',
              borderRadius: '50px',
            }}
            data-uid='fba'
          />
        </div>
      </div>
      <Stamp
        name='06 05 2022'
        style={{
          position: 'absolute',
          top: 312,
          left: 564,
          zIndex: 1000,
        }}
        color='var(--yellow)'
        data-uid='061'
      />
      <div
        style={{
          width: '100%',
          background: 'var(--orange)',
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
        data-uid='579'
      >
        <div
          style={{
            width: 834,
            height: 767,
            backgroundColor: 'var(--yellow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
          data-uid='f25'
        >
          <div
            style={{
              width: '100%',
              height: 63,
              overflow: 'visible',
              zIndex: 10,
            }}
            data-uid='700'
          >
            <DecorativeLines data-uid='ad6' />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              data-uid='efa'
            >
              <Description
                description='Not as attentive as a real Butler, and only being able to hold drinks seems more like a luxury than work. Nonethelesss, we will keep him.'
                style={{
                  padding: '5px 20px 14px 20px',
                  borderRadius: '0px 0px 20px 0px',
                }}
                data-uid='e5d'
              />
            </div>
          </div>
          <ImageContainer
            imageUrl='https://cdn.utopia.app/editor/sample-assets/flamingo.jpg'
            style={{}}
            data-uid='c5a'
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              margin: '0px 20px 40px 20px',
              alignItems: 'flex-end',
              gap: 20,
              height: 120,
              zIndex: 10,
            }}
            data-uid='f06'
          >
            <Name
              text='Hire a Pool Flamingo as a Butler'
              style={{ padding: 0 }}
              data-uid='1ae'
            />
            <Rating
              rating={2}
              style={{
                padding: '25px 20px',
                borderRadius: 20,
              }}
              color='var(--yellow)'
              data-uid='7f8'
            />
          </div>
        </div>
        <div
          style={{
            width: 834,
            height: 767,
            backgroundColor: 'var(--orange)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingTop: '9px',
          }}
          data-uid='f15'
        >
          <div
            style={{
              width: '100%',
              height: 63,
              overflow: 'visible',
              zIndex: 10,
            }}
            data-uid='75f'
          >
            <DecorativeLines data-uid='c6c' />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              data-uid='101'
            >
              <Stamp
                name='08 28 2021'
                style={{ top: -160, left: 40 }}
                color='var(--orange)'
                data-uid='149'
              />
              <Description
                description='After hearing people rave about them, I just had to go see for myself. They even kept me up at night while I was staying in Iceland.'
                style={{
                  background: 'var(--orange)',
                  borderRadius: '0px 0px 0px 20px',
                  padding: '5px 20px 14px 20px',
                }}
                data-uid='522'
              />
            </div>
          </div>
          <ImageContainer
            imageUrl='https://cdn.utopia.app/editor/sample-assets/northernlights.jpg'
            data-uid='940'
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: '0px 20px 40px 20px',
              alignItems: 'flex-end',
              gap: 20,
              height: 120,
              zIndex: 10,
            }}
            data-uid='e69'
          >
            <Name
              text='See the Northern Lights'
              style={{ padding: 0, textAlign: 'left' }}
              data-uid='330'
            />
            <Rating
              rating={3}
              style={{
                padding: '25px 20px',
                borderRadius: 20,
              }}
              color='var(--orange)'
              data-uid='0f0'
            />
          </div>
        </div>
        <div
          style={{
            width: 834,
            height: 767,
            backgroundColor: 'var(--yellow)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
          data-uid='30e'
        >
          <div
            style={{
              width: '100%',
              height: 63,
              overflow: 'visible',
              zIndex: 10,
            }}
            data-uid='bc8'
          >
            <DecorativeLines data-uid='c90' />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              data-uid='390'
            >
              <Description
                description='Its always been a goal of mine to retire early, become an old geezer, and learn to sail a little boat in the bay. I dont know what else to do now.'
                style={{
                  padding: '5px 20px 14px 20px',
                  borderRadius: '0px 0px 20px 0px',
                }}
                data-uid='8dd'
              />
              <Stamp
                name='07 17 2019'
                style={{
                  top: -160,
                  left: 40,
                  marginTop: -20,
                }}
                color='var(--yellow)'
                data-uid='7c7'
              />
            </div>
          </div>
          <ImageContainer
            imageUrl='https://cdn.utopia.app/editor/sample-assets/boat.jpg'
            style={{}}
            data-uid='95e'
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              padding: '0px 20px 40px 20px',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              width: '100%',
              gap: 20,
              height: 120,
              zIndex: 10,
            }}
            data-uid='dbd'
          >
            <Name
              text='Learn to Sail A Boat'
              style={{ padding: 0 }}
              data-uid='c6a'
            />
            <Rating
              rating={4}
              style={{
                padding: '25px 20px',
                borderRadius: 20,
              }}
              color='var(--yellow)'
              data-uid='d96'
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: '80px',
          width: '100%',
          background: 'var(--off-white)',
          zIndex: '100',
          boxShadow: '0px -2px 33px #674168',
        }}
        data-uid='b69'
      />
    </div>
  )
}
