import { memo } from 'react'
import hash from 'fnv1a'

export const IconCache = React.createContext({})
export const useIconCache = () => React.useContext(IconCache)

const withIcon = (icon) => {
  const Icon = (props) => {
    const cache = useIconCache()
    const { size = 24, color = 'currentColor' } = props

    const cachedId = cache[icon]
    let id

    if (!cachedId) {
      id = 'icon-' + hash(icon).toString(16)
      cache[icon] = id
    }

    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        stroke="currentColor"
        style={{
          color
        }}
        dangerouslySetInnerHTML={{
          __html: cachedId
            ? `<use href="#${cachedId}" />`
            : `<g id="${id}">${icon}</g>`
        }}
      />
    )
  }

  return memo(Icon)
}

export default withIcon
