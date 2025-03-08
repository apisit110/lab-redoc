'use client'

import { RedocStandalone } from "redoc"
import spec from '@/specs/project1-1.0.0.yaml'

export default function DocumentsPage() {
  return (
    <RedocStandalone
    spec={spec}
    options={{
      // nativeScrollbars: true,
      // theme: { colors: { primary: { main: '#dd5522' } } }
    }}
  />)
}
