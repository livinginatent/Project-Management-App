import Clients from '../components/Clients'
import Projects from '../components/Projects'
import AddClientModule from '../components/AddClientModule'
import AddProjectModal from '../components/AddProjectModal'

export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
    <AddClientModule/>
    <AddProjectModal/>
    </div>
    
      <Projects/>
      <hr/>
      <Clients/>
    </>
  )
}
