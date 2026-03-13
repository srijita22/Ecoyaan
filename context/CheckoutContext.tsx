"use client"

import { createContext, useState, ReactNode } from "react"

type Address = {
  fullName: string
  email: string
  phone: string
  pin: string
  city: string
  state: string
}

type CheckoutContextType = {
  address: Address | null
  setAddress: (address: Address) => void
}

export const CheckoutContext = createContext<CheckoutContextType | null>(null)

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<Address | null>(null)

  return (
    <CheckoutContext.Provider value={{ address, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  )
}