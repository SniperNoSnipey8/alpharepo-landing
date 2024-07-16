import React from 'react'

function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4 font-sans mt-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
        Getting overwhelmed during earnings?
      </h1>
      
      <p className="text-sm md:text-base text-center mb-12 max-w-4xl mx-auto">
        
      </p>
      
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
        WHAT IF YOU COULD...
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19l7-7m0 0l7-7m-7 7l-7 7m14-14l-7 7" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Get there faster</h3>
          <p className="text-sm">Before someone else finds the right answers first</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="3" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3m0 12v3m9-9h-3m-12 0H3m14.121-4.121l-2.121 2.121m-8.484 8.484l-2.121 2.121m14.121-.121l-2.121-2.121M5.636 5.636l-2.121-2.121" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Connect more dots</h3>
          <p className="text-sm">Because better decisions only happen when you can make sense of all the perspectives</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Leave nothing to chance</h3>
          <p className="text-sm">Because you can't afford any blindspots when so much is on the line</p>
        </div>
      </div>
    </div>
  )
}

export default Features