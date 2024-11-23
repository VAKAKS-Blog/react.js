import Layout from './modules/reusable-layout'

function App() {
  return (
    <Layout>
      <Layout.Banner src='https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <h1 className='text-5xl text-center font-bold'>
          Banner Area
        </h1>
      </Layout.Banner>

      <Layout.Container>
        <Layout.Sidebar>
          <h1 className='text-base font-bold'>#sidebar</h1>
          <p className='text-lg'>
            Filter 
          </p>
        </Layout.Sidebar>
        <Layout.Content>
          <Layout.Content.Header>
            <h1 className='text-base font-bold'>
              #header-content
            </h1>
          </Layout.Content.Header>
          <div className='p-8 rounded-2xl border'>
            <h1 className='text-base font-bold'>
              #content
            </h1>
            <h2 className='text-2xl font-bold'>
              This is the content area
            </h2>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Layout.Content.Footer>
            <h1 className='text-base font-bold'>
              #footer-content
            </h1>
          </Layout.Content.Footer>
        </Layout.Content>
      </Layout.Container>
    </Layout>
  )
}
export default App
