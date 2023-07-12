import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <Header content='Contact' />
            <div className='h-full hero bg-neutral-200'>
                <div className='hero-content flex-col w-full'>
                    <div className='card rounded-md flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
                        <div className='card-body'>
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
                            <button className='btn btn-primary normal-case'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}