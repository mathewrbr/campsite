import Head from 'next/head'

import { CopyCurrentUrl } from '@/components/CopyCurrentUrl'
import { AppLayout } from '@/components/Layout/AppLayout'
import { ProjectsIndex } from '@/components/Projects/ProjectsIndex'
import AuthAppProviders from '@/components/Providers/AuthAppProviders'
import { PageWithLayout } from '@/utils/types'

const ArchivedProjectsPage: PageWithLayout<any> = () => {
  return (
    <>
      <Head>
        <title>Archived channels</title>
      </Head>

      <CopyCurrentUrl />
      <ProjectsIndex />
    </>
  )
}

ArchivedProjectsPage.getProviders = (page, pageProps) => {
  return (
    <AuthAppProviders {...pageProps}>
      <AppLayout {...pageProps}>{page}</AppLayout>
    </AuthAppProviders>
  )
}

export default ArchivedProjectsPage