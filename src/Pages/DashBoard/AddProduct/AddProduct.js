import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';


const AddProduct = () => {
    const {categories, dataLoading, user} = useContext(AuthContext);
    
    const datee = new Date().toLocaleString('en-GB')
    const preLoaderValues = {
        sellerName: user?.displayName,
        date:datee
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: preLoaderValues
    });

   
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // const api = process.env.REACT_APP_api
    // console.log(imageHostKey);

    const navigate = useNavigate();


    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);

                const product = {
                    sellerName: data.sellerName,
                    name: data.pname, 
                    categoryId: data.categoryId,
                    img: imgData.data.url,
                    location: data.location,
                    categoryName: data.categoryName,
                    originalPrice: data.originalPrice,
                    date: data.date,
                    price: data.price,
                    used: data.used
                }
                console.log(product);

                // save doctor information to the database
                fetch('http://localhost:5000/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/myproducts')
                })
            }
        })
    }

    if(dataLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-full p-7 bg-slate-200'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form className='grid grid-cols-2' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input  type="text" disabled {...register("sellerName", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input disabled type="text" {...register("date", {
                        required: " Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("pname", {
                        required: "Product Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.pname && <p className='text-red-500'>{errors.pname.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" {...register("originalPrice", {
                        required: 'Price is Required'
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: 'Price is Required'
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Have been Used</span></label>
                    <input type="text" {...register("used", {
                        required: "filed is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: 'Location is required'
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control max-w-xs">
                    <label className="label"> <span className="label-text">Category Name</span></label>
                    <select 
                    {...register('categoryName', {
                        required: true
                    })}
                    className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }             
                        
                    </select>
                    {errors.categoryName && <p className='text-red-500'>{errors.categoryName.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">CategoryId</span></label>
                    <select 
                    {...register('categoryId', {
                        required: true
                    })}
                    className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(specialty => <option
                                key={specialty._id}
                                value={specialty._id}
                            >{specialty._id}</option>)
                        }             
                        
                    </select>
                    {errors.categoryId && <p className='text-red-500'>{errors.categoryId.message}</p>}
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                <input className='btn bg-[#02AA49] px-5 py-3 text-white hover:text-[#02AA49] hover:bg-white hover:border w-full mt-4' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};


export default AddProduct;