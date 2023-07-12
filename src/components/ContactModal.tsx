import { X } from 'lucide-react'

export default function ContactModal() {
    return (
        <dialog id='contact_modal' className='modal modal-bottom sm:modal-middle'>
            <form method='dialog' className='modal-box'>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><X /></button>
                <h3 className='font-bold text-2xl'>Lets meet</h3>
                <p className='py-4'>Fill this out and we will reach out soon!</p>
                <div className='flex flex-col w-full px-8 gap-4'>
                    <input type='text' className='input input-bordered rounded-md' placeholder='Name' />
                    <input type='text' className='input input-bordered rounded-md' placeholder='Company Name' />
                    <input type='text' className='input input-bordered rounded-md' placeholder='Email' />
                    <input className='input input-bordered rounded-md' placeholder='Phone Number' />
                
                    <div className='flex w-full justify-center items-center gap-4'>
                        <div className='form-control'>
                            <label className='label cursor-pointer'>
                                <span className='label-text pr-2'>Call me!</span>
                                <input type='radio' name='preferred-contact' className='radio radio-primary' value='CALL' />
                            </label>
                        </div>

                        <div className='form-control'>
                            <label className='label cursor-pointer'>
                                <span className='label-text pr-2'>Email me!</span>
                                <input type='radio' name='preferred-contact' className='radio radio-primary' value='EMAIL' />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='modal-action'>
                    <button className='btn'>submit</button>
                </div>
            </form>
        </dialog>
    )
}