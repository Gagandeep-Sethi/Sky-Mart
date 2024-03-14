import { useState } from "react"
import { Fetch_Uri } from "../constant"

export const useUpdateProduct = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const updateProduct = async (title, category, description, image, price, id) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(`${Fetch_Uri}/api/product/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, category, description, image, price })
            })
            const json = await response.json()

            if (!response.ok) {
                setIsLoading(false)
                setError(json.message)
            }
            if (response.ok) {

                setIsLoading(false)
            }
        } catch (error) {
            
            setError('Error updating product. Please try again.')
            setIsLoading(false)
        }
    }

    return { updateProduct, isLoading, error }
}
