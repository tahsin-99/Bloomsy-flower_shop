"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "user01@gmail.com" && password === "Ab1234$$") {
            document.cookie = "auth=true; path=/";
            toast('LogedIn Successfully')
            router.push("/all-flowers")
        }
        else {
                toast.error('Invalid Email or Password')
        }
    }

    return <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Email address
            </label>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
        </div>

        {error && (
            <p className="text-sm text-red-600">{error}</p>
        )}

        <button
            type="submit"
            className="w-full btn bg-primary text-white py-2 rounded-md text-sm font-medium hover:bg-secondary cursor-pointer hover:text-black transition"
        >
         LogIn In
        </button>
    </form>;
}