export default function SuccessPage() {

  return (
     <div className="min-h-screen flex items-center justify-center bg-black-100">
    <main className="max-w-xl mx-auto p-10 text-center bg-white shadow rounded-lg">

      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Successful!
      </h1>

      <p className="text-gray-600 mb-6">
        Thank you for shopping sustainably with Ecoyaan.
      </p>

      <a
        href="/"
        className="text-green-600 underline"
      >
        Back to Cart
      </a>

    </main>
    </div>
  )
}