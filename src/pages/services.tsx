import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import openContactModal from '@/functions/openContactModal'

export default function Services() {
    return (
        <div className={`flex flex-col bg-neutral-200`}>
            <Navbar />
            <div className='flex flex-col items-center overflow-hidden'>
                <div className='hero min-h-[60vh] hover:scale-[103%] hover:shadow-xl transition-all ease-in-out duration-700' style={{ backgroundImage: 'url(/services/email.jpg)' }}>
                    <div className='hero-overlay bg-opacity-80' />
                    <div className='hero-content flex-col lg:flex-row-reverse gap-10 text-neutral-content'>
                        <div className='max-w-4xl'>
                            <h1 className='text-3xl lg:text-5xl font-bold'>Communications</h1>
                            <p className='py-6'>Our tool is designed to communicate with current members and potential prospects, making it easy to keep everyone in the loop. Whether you&apos;re looking to stay connected with customers or cultivate new leads, Titan CRM is the perfect solution.</p>
                            <button onClick={openContactModal} className='btn lg:btn-outline'>Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='hero min-h-[60vh] hover:scale-[103%] hover:shadow-xl transition-all ease-in-out duration-700' style={{ backgroundImage: 'url(/services/calendar.jpg)' }}>
                    <div className='hero-overlay bg-opacity-80' />
                    <div className='hero-content flex-col lg:flex-row-reverse gap-10 text-neutral-content'>
                        <div className='lg:text-right max-w-4xl'>
                            <h1 className='text-3xl lg:text-5xl font-bold'>Scheduling</h1>
                            <p className='py-6'>Our scheduling service is simple to use and easy to integrate. With Titan, you can always be sure that your appointments are up to date and accurate. Schedule a demo today to see how our scheduling service can help you get the most out of your CRM.</p>
                            <button onClick={openContactModal} className='btn lg:btn-outline'>Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='hero min-h-[60vh] hover:scale-[103%] hover:shadow-xl transition-all ease-in-out duration-700' style={{ backgroundImage: 'url(/services/marketing.jpg)' }}>
                    <div className='hero-overlay bg-opacity-80' />
                    <div className='hero-content flex-col lg:flex-row-reverse gap-10 text-neutral-content'>
                        <div className='max-w-4xl'>
                            <h1 className='text-3xl lg:text-5xl font-bold'>Marketing</h1>
                            <p className='py-6'>We offer the most comprehensive and effective marketing service for CRM platforms, including email marketing, social media marketing, and much more. Our team of experts will help you maximize your results and grow your business. Contact us today to learn more!</p>
                            <button onClick={openContactModal} className='btn lg:btn-outline'>Learn More</button>
                        </div>
                    </div>
                </div>

                <div className='hero min-h-[60vh] hover:scale-[103%] hover:shadow-xl transition-all ease-in-out duration-700' style={{ backgroundImage: 'url(/services/reporting.jpg)' }}>
                    <div className='hero-overlay bg-opacity-80' />
                    <div className='hero-content flex-col lg:flex-row-reverse gap-10 text-neutral-content'>
                        <div className='max-w-4xl lg:text-right'>
                            <h1 className='text-3xl lg:text-5xl font-bold'>Reporting</h1>
                            <p className='py-6'>Without data, you can&apos;t know how your customers are interacting with your brand. Titan is a reporting service that gives you the data you need to improve your CRM performance. Titan makes it easy to see what&apos;s working and what needs improvement. With our service, you can make data-driven decisions that improve your customer relationships. </p>
                            <button onClick={openContactModal} className='btn lg:btn-outline'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}