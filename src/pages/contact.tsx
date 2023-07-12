import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='min-h-[80vh] hero bg-neutral-200'>
                <div className='hero-content flex-col w-full'>
                    <div className='card rounded-md flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
                        <div className='card-body'>
                            <h1 className='text-center text-neutral-200 font-black uppercase text-3xl'>Contact</h1>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Name</span>
                                </label>
                                <input className='input input-bordered rounded-md' type='text' placeholder='Name' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Company Name</span>
                                </label>
                                <input className='input input-bordered' type='text' placeholder='Company Name' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text text-sm'>Phone Number</span>
                                </label>
                                <input className='input input-bordered' type='text' placeholder='Phone Number' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Email</span>
                                </label>
                                <input className='input input-bordered' type='text' placeholder='Email' />
                            </div>
                            <button className='btn btn-primary normal-case mt-2'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}