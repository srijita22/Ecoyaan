type OrderSummaryProps = {
  subtotal: number
  shipping: number
}
import Link from "next/link"
export default function OrderSummary({ subtotal, shipping }: OrderSummaryProps) {

  const total = subtotal + shipping

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm text-black">
      
      <h2 className="text-xl font-semibold mb-4">
        Order Summary
      </h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>₹{shipping}</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <Link href="/checkout">
  <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
    Proceed to Checkout
  </button>
</Link>

    </div>
  )
}