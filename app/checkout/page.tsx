"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { CheckoutContext } from "@/context/CheckoutContext"

type FormData = {
  fullName: string
  email: string
  phone: string
  pin: string
  city: string
  state: string
}

export default function CheckoutPage() {

  const router = useRouter()
  const context = useContext(CheckoutContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {

    context?.setAddress(data)

    router.push("/payment")
  }

  return (
    <main className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg text-black">

      <h1 className="text-2xl font-bold mb-6">
        Shipping Address
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <p className="text-red-500">Required</p>}

        <input
          placeholder="Email"
          className="w-full border p-3 rounded"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i
          })}
        />
        {errors.email && <p className="text-red-500">Invalid email</p>}

        <input
          placeholder="Phone Number"
          className="w-full border p-3 rounded"
          {...register("phone", {
            required: true,
            pattern: /^[0-9]{10}$/
          })}
        />
        {errors.phone && <p className="text-red-500">Enter 10 digit phone</p>}

        <input
          placeholder="PIN Code"
          className="w-full border p-3 rounded"
          {...register("pin", { required: true })}
        />
        {errors.pin && <p className="text-red-500">Required</p>}

        <input
          placeholder="City"
          className="w-full border p-3 rounded"
          {...register("city", { required: true })}
        />
        {errors.city && <p className="text-red-500">Required</p>}

        <input
          placeholder="State"
          className="w-full border p-3 rounded"
          {...register("state", { required: true })}
        />
        {errors.state && <p className="text-red-500">Required</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Continue to Payment
        </button>

      </form>
    </main>
  )
}