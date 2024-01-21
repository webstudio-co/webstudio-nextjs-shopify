'use client'

import React from 'react'
import { AuthLayout, LayoutPage } from 'webstudio-mui/components'
import { Collections, ProductCollection } from 'webstudio-mui/components/shopify'
import { Container } from '@mui/material'

const Homepage: React.FC = () => {

	return (
    <LayoutPage title="Home Page">
      <AuthLayout>
        <Container maxWidth="lg">
          <ProductCollection
            handle={'hydrogen'}
          />
          <Collections />
        </Container>
      </AuthLayout>
    </LayoutPage>
	)
}

export default Homepage
