import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the submission e.g. sending data to a server
        console.log('Form data:', formData);
        alert('Thank you for your message!');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Contact Page</h1>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               id="name" type="text" placeholder="Jane Doe" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               id="email" type="email" placeholder="email@example.com" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                            Message
                        </label>
                        <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"
                                  placeholder="Enter your message..." name="message" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                        <button className="btn bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
}
