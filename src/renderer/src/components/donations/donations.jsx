import { useSelector, useDispatch } from 'react-redux'
import { SlAlert, SlIcon } from '../shoelace'
import { removeDonation } from '../../store/donations'

const Donations = () => {
  const dispatch = useDispatch()
  const donations = useSelector(state => state.donations.messages)

  const handleClose = ev => {
    const idx = parseInt(ev.target.dataset.id)
    dispatch(removeDonation({ idx }))
  }

  return (
    <div className="msp-donations-cont">
      {donations.length === 0 && (
        <div className="msp-donation">
          <SlAlert variant="neutral" open>
            <SlIcon slot="icon" name="info-circle" />
            You currently have no donations.
          </SlAlert>
        </div>
      )}

      {donations.map((dn, idx) => {
        return (
          <div className="msp-donation" key={idx}>
            <SlAlert
              variant="success"
              open={true}
              // duration={10000}
              closable
              onSlAfterHide={handleClose}
              data-id={idx}
            >
              <SlIcon slot="icon" name="cash-coin" />
                <h4>
                  <strong>${dn.amount} - {dn.name}</strong>
                </h4>
                <p>{dn.message}</p>
            </SlAlert>
          </div>
        )
      })}
    </div>
  )
}

export default Donations
