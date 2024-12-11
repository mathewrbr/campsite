import { GetServerSidePropsContext } from 'next'

import { getChangelog } from '@/lib/changelog'
import { generateRSS } from '@/lib/rss'

export default function FeedPage() {
  return null
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { res } = context
  const data = await getChangelog()
  const { rss } = await generateRSS(data)

  if (res) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(rss)
    res.end()
  }

  return {
    props: {}
  }
}