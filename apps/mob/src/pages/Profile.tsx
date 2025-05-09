import { UserProfile } from '@clerk/clerk-react'
import { ComponentProps } from 'react'

export default function Profile() {
  return <UserProfile path="/profile" routing="path" appearance={appearance} />
}

const appearance: ComponentProps<typeof UserProfile>['appearance'] = {
  elements: {
    navbarMobileMenuRow: { display: 'none !important' },
    rootBox: { width: '100%', height: '100%' },
    cardBox: {
      width: '100%',
      height: '100%',
      maxWidth: 'unset',
      borderRadius: 0,
    },
    scrollBox: {
      borderRadius: 0,
    },
    pageScrollBox: {
      padding: '0 1rem',
      overflowY: 'initial',
    },
    header: { display: 'none' },
    profileSection__profile: {
      borderTop: 'none',
    },
  },
}
