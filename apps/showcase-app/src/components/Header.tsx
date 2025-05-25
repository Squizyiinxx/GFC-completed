import { memo } from "react"

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-5 border-b border-[var(--bg-secondary)] w-full">
      <div className="flex gap-2 items-center">
        <img src="/logo.webp" alt="logo" className="w-11 h-10" />
        <h4 className="mb-0 leading-tight tracking-tight text-[var(--text-primary)]">Squizyiinxx</h4>
      </div>
    </div>
  )
}

export default memo(Header)