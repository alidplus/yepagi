import { useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function Component() {
  const { id } = useParams<'id'>()
  const navigate = useNavigate()
  const close = () => {
    navigate(-1)
  }
  const escFunction = useCallback(
    (event: DocumentEventMap['keydown']) => {
      if (event.key === 'Escape') {
        navigate(-1)
      }
    },
    [navigate]
  )

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [escFunction])
  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="divider text-lg font-bold">Hello! [{id}]</h3>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          quas illo, repellendus, quasi laborum asperiores totam suscipit fugit
          debitis sequi fuga corporis? Autem, nisi possimus quibusdam accusamus
          eos perspiciatis quam.
        </p>
        <div className="modal-action">
          <form method="dialog" onSubmit={close}>
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
      <div className="modal-backdrop" onClick={close} />
    </dialog>
  )
}
Component.displayName = 'ViewItemDetails'
