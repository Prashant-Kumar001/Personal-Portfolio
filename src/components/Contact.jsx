import React from 'react';
import { motion } from "framer-motion";
import img1 from '../assets/vg.png';
import toast from "react-hot-toast";
import { addDoc, collection } from 'firebase/firestore';
import { Db } from '../fireBase';

const Contact = () => {
    const [contact, setContact] = React.useState({
        email: '',
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add user details to Firestore
        try {
            await addDoc(collection(Db, 'contacts'), {
                email: contact.email,
                name: contact.name,
                message: contact.message
            });

            toast.success('Successfully sent!');
        } catch (error) {
            toast.error("Error submitting form.");
            console.log(error);
        }
        // Reset contact state after submission
        setContact({
            email: '',
            name: '',
            message: ''
        });
    };

    const animations = {
        h1: {
            initial: { opacity: 0, x: -100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8, type: "spring" },
        },
        div: {
            initial: { opacity: 0, x: -100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
        },
        div1: {
            initial: { opacity: 0, y: 100 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
        },
        button: {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className='w-full min-h-screen flex flex-col justify-around items-center py-8 px-4 md:px-8' id='Contact'>
            {/* Heading */}
            <motion.h1
                {...animations.h1}
                className='text-3xl font-bold text-teal-600 mb-6 md:mb-12 text-center'>
                Contact <span className='text-teal-600'>Us</span>
            </motion.h1>

            <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
                {/* Form Section */}
                <div className='w-full md:w-1/2 rounded-lg p-4 md:p-8'>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <motion.div {...animations.div}>
                            <label htmlFor='name' className='block text-lg font-medium text-gray-700'>Name *</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={contact.name}
                                onChange={handleChange}
                                className='w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'
                                required
                            />
                        </motion.div>

                        {/* Email Input */}
                        <motion.div {...animations.div}>
                            <label htmlFor='email' className='block text-lg font-medium text-gray-700'>Email *</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={contact.email}
                                onChange={handleChange}
                                className='w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'
                                required
                            />
                        </motion.div>

                        {/* Message Textarea */}
                        <motion.div {...animations.div}>
                            <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Message *</label>
                            <textarea
                                id='message'
                                name='message'
                                value={contact.message}
                                onChange={handleChange}
                                className='w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'
                                rows='5'
                                required
                            ></textarea>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div className='text-center'>
                            <motion.button {...animations.button}
                                type='submit'
                                className='bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300'>
                                Submit
                            </motion.button>
                        </motion.div>
                    </form>
                </div>

                {/* Image Section */}
                <motion.div
                    {...animations.div1}
                    className='w-full md:w-1/2 flex items-end justify-end '>
                    <img
                        src={img1}
                        alt="Contact Illustration"
                        className='w-full h-auto object-cover rounded-lg'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
