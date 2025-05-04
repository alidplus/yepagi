import { Route } from 'wouter'
import Dock from './Layout/Dock'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Notifs from './pages/Notifs'
import Stat from './pages/Stat'

export default function App() {
  return (
    <Layout>
      <Route path="/settings" component={Stat} />
      <Route path="/inbox" component={Notifs} />
      <Route path="/" component={Home} />
      <div className="mb-12"></div>
      <Dock />
    </Layout>
  )
}
