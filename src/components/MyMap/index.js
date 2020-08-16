import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'
import { compose, withProps } from 'recompose'

import { MY_GOOGLE_URL, MY_HOME_LAT, MY_HOME_LONG } from 'constants.js'

import './my-map.scss'

const DEFAULT_ZOMM = 10

const MyMap = compose(
  withProps({
    googleMapURL: MY_GOOGLE_URL,
    loadingElement: <div className="my-map-loading" />,
    containerElement: <div className="my-map-container" />,
    mapElement: <div className="my-map-ele" />,
    isMarkerShown: true,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap defaultZoom={DEFAULT_ZOMM} defaultCenter={{ lat: MY_HOME_LAT, lng: MY_HOME_LONG }}>
    {props.isMarkerShown && <Marker position={{ lat: MY_HOME_LAT, lng: MY_HOME_LONG }} />}
  </GoogleMap>
))

export default MyMap
