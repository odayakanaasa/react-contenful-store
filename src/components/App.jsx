// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import SiteAlert from '../containers/SiteAlert'

import TopBar from './TopBar'
import Footer from './Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'

import Container from './Container'

const App = () => (
  <div>
    <SiteAlert />
    <Container>
      <TopBar />
      <Switch>
        <Route exact path={'/'} render={() => <HomePage />} />
        <Route exact path={'/cart'} render={() => <CartPage />} />
        <Route exact path={'/about'} render={() => <AboutPage />} />
        <Route exact path={'/contact'} render={() => <ContactPage />} />
        <Route exact path={'/products'} render={() => <ProductsPage />} />
        <Route path={'/product/:productId'} render={() => <ProductPage />} />
        <Route path={'*'} render={() => <NotFoundPage />} />
      </Switch>
      <Footer />
    </Container>
  </div>
)

export default App
