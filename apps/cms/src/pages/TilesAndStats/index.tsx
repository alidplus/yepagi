import { Link } from 'react-router'

export default function Component() {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
      <Link to="/checklist" className="card bg-primary text-primary-content">
        <div className="card-body">
          <div className="card-title">چکلیستان</div>
        </div>
      </Link>
    </div>
  )
}

Component.displayName = 'ChecklistData'
