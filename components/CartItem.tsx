type CartItemProps = {
  item: {
    product_id: number
    product_name: string
    product_price: number
    quantity: number
    image: string
  }
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex gap-4 border rounded-lg p-4 shadow-sm bg-white text-black">
      
      <img
        src={item.image}
        alt={item.product_name}
        className="w-24 h-24 object-cover rounded"
      />

      <div className="flex flex-col justify-between">
        <h3 className="font-semibold text-lg">
          {item.product_name}
        </h3>

        <p className="text-gray-600">
          ₹{item.product_price}
        </p>

        <p className="text-sm text-gray-500">
          Quantity: {item.quantity}
        </p>
      </div>

    </div>
  )
}