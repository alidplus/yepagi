export default function Notifs() {
  return (
    <div className="px-2 py-8">
      <div className="stack w-full">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Notification 1</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Notification 2</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Notification 3</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
