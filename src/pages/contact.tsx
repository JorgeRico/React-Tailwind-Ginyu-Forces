import Layout from './layout'
import Breadcrumb from './../components/Breadcrumb';

function Contact() {
    return (
        <>
            <Layout>
                <div className="min-h-screen w-full flex items-center justify-start flex-col">
                    <Breadcrumb name="Contact"></Breadcrumb>
                    <div className="mb-20 px-10 py-10 w-5xl bg-blue-200/30 rounded-md top-20 max-md:w-full">
                        <h1 className="mb-3 font-bold text-2xl">Contact us</h1>
                        <p className="mb-8">Explain us your plans and we talk on a coffe break</p>
                        <div className="w-1/2">
                            <label className="block mb-2 font-bold">Name</label>
                            <input type="text" placeholder="Your Name" className="p-2 border rounded-md w-full mb-4" />
                            <label className="block mb-2 font-bold">Email</label>
                            <input type="email" placeholder="Your Email" className="p-2 border rounded-md w-full mb-4" />
                            <label className="block mb-2 font-bold">Message</label>
                            <textarea placeholder="Your Message" className="p-2 border rounded-md w-full mb-4" rows={5}></textarea>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contact;