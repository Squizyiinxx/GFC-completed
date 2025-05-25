import Aside from '@/components/Aside'
import Header from '@/components/Header'
import React from 'react'

const LayoutApp: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
          <Header />
          <main className="flex w-full">
              <Aside />
              <div className="container px-4 mx-auto py-10 flex-1 overflow-y-auto">
                  {children}
              </div>
          </main>
    </>
  )
}

export default LayoutApp