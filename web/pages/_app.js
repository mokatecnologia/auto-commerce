import React, { Fragment } from 'react'
import Head from 'next/head'
import { useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ReduxWrapper } from '../lib/redux/store'

const App = ({ Component, pageProps }) => {
  const store = useStore((state) => state)

  return (
    <Fragment>
      <Head>
        <title>Moka Tecnologia</title>
      </Head>
      <PersistGate persistor={store.__persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Fragment>
  )
}

export default ReduxWrapper(App)
