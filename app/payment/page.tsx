"use client"


import { useRouter } from "next/navigation"
import { CheckoutContext } from "@/context/CheckoutContext"
import { useContext, useEffect, useState } from "react"
const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
async function getCartData() {
  const res = await fetch(`${baseURL}/api/cart`)
  return res.json()
}
export default function PaymentPage() {

  const router = useRouter()
  const context = useContext(CheckoutContext)

  const address = context?.address
  const [cart,setCart]=useState<any>(null)

  useEffect(() => {
  getCartData().then(setCart)
  }, [])

  const subtotal = cart?.cartItems?.reduce(
  (sum: number, item: any) => sum + item.product_price * item.quantity,
  0
) || 0

const shipping = cart?.shipping_fee || 0
const total = subtotal + shipping

  if (!address) {
    return (
      <div className="p-6">
        <p>No shipping address found.</p>
      </div>
    )
  }

  const handlePayment = () => {
    router.push("/success")
  }

  return (
    <main className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8">

      {/* Shipping Address */}
      <div className="bg-white p-6 rounded-lg shadow text-black">
        <h2 className="text-xl font-semibold mb-4">
          Shipping Address
        </h2>

        <p>{address.fullName}</p>
        <p>{address.email}</p>
        <p>{address.phone}</p>
        <p>{address.city}, {address.state}</p>
        <p>{address.pin}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-black">
        <h3 className="font-semibold mb-2">Order Summary</h3>

  <div className="flex justify-between">
    <span>Subtotal</span>
    <span>₹{subtotal}</span>
  </div>

  <div className="flex justify-between">
    <span>Shipping</span>
    <span>₹{shipping}</span>
  </div>

  <hr className="my-2" />

  <div className="flex justify-between font-bold">
    <span>Total to Pay</span>
    <span className="text-green-700">₹{total}</span>
  </div>
      </div>
      
      {/* Payment Section */}
      <div className="bg-white p-6 rounded-lg shadow">

        <h2 className="text-xl font-semibold mb-4 text-black">
          Payment
        </h2>

        <p className="mb-6 text-gray-600">
          This is a simulated payment for the assignment.
        </p>

        <button
          onClick={handlePayment}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Pay Securely
        </button>

      </div>

    </main>
  )
}