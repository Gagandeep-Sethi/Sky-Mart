import React, { useState } from 'react';
import { useNewProduct } from '../../utility/hooks/useNewProduct';

const NewProduct = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const {addProduct,isLoading,error}=useNewProduct()


    const handleSubmit = async(e) => {
        e.preventDefault();
        await addProduct(title, category, description, image, price)
      }
        
  

    return (
        <div className=" h-screen flex xl:items-center justify-center bg-gradient-to-t from-customPurple to-black pt-64 xl:py-12 px-4 sm:px-6 lg:px-8">
            <div className="xl:max-w-md max-w-3xl w-full space-y-8">
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
                            Add New Product
                        </button>
                    </div>
                    {error&&<div className='text-red-600 text-lg'>{error} !!</div>}
                </form>
            </div>
        </div>
    );
};

export default NewProduct;
