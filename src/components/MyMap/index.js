import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'
import { compose, withProps } from 'recompose'

import './my-map.scss'

const MyMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZQ5judriEGRuFqPqMvd7hwHBx2K22to4&language=en',
    loadingElement: <div className="my-map-loading" />,
    containerElement: <div className="my-map-container" />,
    mapElement: <div className="my-map-ele" />,
    isMarkerShown: true,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 21.0488237, lng: 105.8087915 }}>
    {props.isMarkerShown && <Marker position={{ lat: 21.0488237, lng: 105.8087915 }} />}
  </GoogleMap>
))

export default MyMap
