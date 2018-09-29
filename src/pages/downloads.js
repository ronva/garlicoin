import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import App from 'src/App'
import { buttons } from '../_data/downloads'

import DownloadBtn from '../components/downloads/DownloadBtn'

export default () => (
  <App name="downloadsWrapper">
    <Helmet>
      <title>Downloads - Garlicoin</title>
    </Helmet>
    <h1 className="title">Downloads</h1>
    <div className="section">
      <h2>Not sure where to start? Jump over to our <Link to="onboarding" className="routeLink">Get Started section</Link>.</h2>
      <div className="downloadsBtns">
        {Object.keys(buttons).map(button => {
          const data = buttons[button];
          return <DownloadBtn key={data.desc} data={data} />
        })}
      </div>
    </div>
  </App>
)
