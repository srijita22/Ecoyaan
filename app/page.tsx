import CartItem from "@/components/CartItem"
import OrderSummary from "@/components/OrderSummary"

async function getCartData() {
  const res = await fetch("/api/cart", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch cart data")
  }

  return res.json()
}

export default async function CartPage() {
  const data = await getCartData()

  const subtotal = data.cartItems.reduce(
    (sum: number, item: any) =>
      sum + item.product_price * item.quantity,
    0
  )

  return (
    <main className="max-w-5xl mx-auto p-6 grid md:grid-cols-3 gap-8">

      {/* Cart Items */}
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-3xl font-bold mb-4">
          Your Cart
        </h1>

        {data.cartItems.map((item: any) => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </div>

      {/* Order Summary */}
      <OrderSummary
        subtotal={subtotal}
        shipping={data.shipping_fee}
      />

    </main>
  )
}