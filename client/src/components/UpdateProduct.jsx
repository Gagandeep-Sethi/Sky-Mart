import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUpdateProduct } from '../utility/hooks/useUpdateProduct';

const UpdateProduct = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const {updateProduct,isLoading,error}=useUpdateProduct()
    
    const {id}=useParams()


    const handleSubmit = async(e) => {
        e.preventDefault();
        await updateProduct(title, category, description, image, price,id)
      }
      const getData=async()=>{
        try {
            
        const data = await fetch(`http://localhost:5000/api/product/${id}`)
        
        if (!data.ok) {
            throw new Error("Failed to fetch product");
        }
        
        const json = await data.json()
        setTitle(json?.title)
        setCategory(json?.category)
        setDescription(json?.description)
        setImage(json?.image)
        setPrice(json?.price)
        
            
        } catch (error) {
            console.log(error)
        }
    
    }
    useEffect(()=>{
    getData()
    },[])
        
  

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-t from-customPurple to-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 font-exo text-center text-4xl font-extrabold text-white">Add New Product</h2>
                </div>
                <form className=" mt-8 space-y-6 bg-customBlack p-8 rounded-3xl" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                
                                type="text"
                                
                                required
                                className="form-input mt-6 block w-full p-2 rounded-3xl"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                
                                type="text"

                                required
                                className="form-input  block w-full mt-6 p-2 rounded-3xl"
                                placeholder="Category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        <div>
                            <textarea


                                required
                                className="form-textarea mt-6 block w-full p-2 rounded-3xl"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <input

                                type="text"

                                required
                                className="form-input mt-6 block w-full p-2 rounded-3xl"
                                placeholder="Image URL"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div>
                            <input

                                type="number"

                                required
                                className="form-input mt-6 block w-full p-2 rounded-3xl"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button disabled={isLoading}
                            type="submit"
                            className="group mb-4 mt-12 w-full flex justify-center py-2 px-4 text-lg font-medium rounded-3xl text-white bg-green-600 hover:bg-green-700"
                        >
                            Update Product
                        </button>
                    </div>
                    {error&&<div className='text-red-600 text-lg'>{error} !!</div>}
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;