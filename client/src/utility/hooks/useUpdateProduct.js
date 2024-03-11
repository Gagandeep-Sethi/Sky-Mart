import { useState } from "react"

export const useUpdateProduct = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const updateProduct = async (title, category, description, image, price, id) => {
        setIsLoading(true)
        setError(null)
        console.log(id)
        try {
            const response = await fetch(`http://localhost:5000/api/product/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, category, description, image, price })
            })
            const json = await response.json()
            console.log(json.message)
            if (!response.ok) {
                setIsLoading(false)
                setError(json.message)
            }
            if (response.ok) {
                console.log(response)
                setIsLoading(false)
            }
        } catch (error) {
            console.error('Error updating product:', error)
            setError('Error updating product. Please try again.')
            setIsLoading(false)
        }
    }

    return { updateProduct, isLoading, error }
}
