import { SliceZone } from '@prismicio/react'
import Layout from '../components/Layout'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page','homepage')
  const navigation = await client.getByUID('navigation','top_navigation')

  return {
    props: {
      page,
      navigation,
    },
  }
}