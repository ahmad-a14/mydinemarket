import React from 'react'
import { Badge } from '@/components/ui/badge'

function Hero() {
  return (
    <section>
        {/* Left div */}
            <div>
                <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-purple-700"> Sale 70%</Badge>
            </div>
        {/* RIght div */}
    </section>
  )
}

export default Hero