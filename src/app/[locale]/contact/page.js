"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from 'react-hook-form';

const Page = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (formData) => {
        window.location.href = `mailto:kaveh.rhanjani@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
        (${formData.email});`
    }
    const t = useTranslations('About_Us')
    const locale = useLocale()
    const isRight = locale === 'fa';

    return (
        <div className={`min-h-screen bg-black flex flex-wrap ${isRight ? '' : mont.className}`}>
            <div className="flex w-full justify-between">
                <div className={`w-full sm:px-8 pt-40 flex items-center lg:px-6 md:px-6 md:py-12 bg-black ${isRight ? 'flex-row-reverse pe-8' : 'ps-32'}`}>
                    <div className={`flex flex-col w-1/2 pr-8 md:w-full ${isRight ? 'text-right' : 'text-left'}`} style={isRight ? { direction: 'rtl' } : {}}>
                        <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">با دوستان خلاق تماس بگیرید:</h2>
                        <p className="text-wrap text-lg text-white leading-6 md:text-2xl sm:text-base">
                            ما از ارتباط با شما خوشحالیم! چه یک پروژه طراحی در ذهن داشته باشید یا صرفاً بخواهید دنیای بی کران خلاقیت را کشف کنید، ما اینجا هستیم تا گوش دهیم، همکاری کنیم و دیدگاه های شما را زنده کنیم.
                        </p>
                        <div className='mt-10'>
                            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">اطلاعات تماس:</h2>
                            <p className="text-wrap text-lg text-white leading-6 md:text-2xl sm:text-base">
                                ایمیل: admin@ccronies.com
                            </p>
                            <p className='className="text-wrap text-lg text-white leading-6 md:text-2xl sm:text-base"'>تلفن: 09308855889</p>
                        </div>
                        <div className='mt-10'>
                            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">ساعات کاری:</h2>
                            <p className="text-wrap text-lg text-white leading-6 md:text-2xl sm:text-base">
                                روزهای هفته: 9:00 صبح تا 6:00 بعد از ظهر
                            </p>
                        </div>
                    </div>
                    <div className={`flex w-1/2 sm:hidden md:hidden ${isRight ? 'justify-start' : 'justify-end'}`}>
                        <Image src="https://s32.picofile.com/file/8479972334/Group.png" alt="contact" width={550} height={550} />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-full justify-between my-20">
                <div className={`w-full px-8 flex ${isRight ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-center md:px-6 md:flex-col lg:px-6 sm:flex-col-reverse`}>
                    <div className="flex flex-col w-1/2 pr-8 md:w-full gap-4" style={isRight ? { direction: 'rtl' } : {}}>
                        <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">ما را دنبال کنید:</h2>
                        <p className="text-wrap text-white leading-6 md:text-2xl sm:text-base">
                            با دنبال کردن ما در رسانه های اجتماعی از آخرین پروژه ها، الهامات طراحی و تفکرات خلاقانه ما به روز باشید.
                        </p>
                        <p className='text-white'>اینستاگرام:</p>
                        <p className='uppercase text-white'>https://www.instagram.com/creative.cronies</p>
                        <p className='text-white'>لینکدین:</p>
                        <p className='uppercase text-white'>www.linkedin.com/in/creativecronies</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-full justify-between">
                <div className={`w-full pr-8 flex ${isRight ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-center md:px-6 md:flex-col lg:px-6 sm:flex-col-reverse`}>
                    <div className="flex flex-col w-1/2 pr-8 md:w-full gap-4" style={isRight ? { direction: 'rtl' } : {}}>
                        <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">پیام بفرستید:</h2>
                        <p className="text-wrap text-white leading-6 md:text-2xl sm:text-base">
                            آیا در خواست خاصی یا خلاصه پروژه ای دارید که می خواهید به اشتراک بگذارید؟ از فرم تماس زیر برای ارسال پیام به ما استفاده کنید و ما به سرعت با شما تماس خواهیم گرفت.
                        </p>
                        <div className="flex flex-wrap w-full justify-between mt-16">
                            <div className={`w-full flex ${isRight ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-center md:px-6 md:flex-col lg:px-6 sm:flex-col-reverse`}>
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 me-auto w-[100%]' style={{ direction: 'rtl' }}>
                                    <input {...register('firstname')} placeholder='نام' className='p-2 rounded-sm' type="text" />
                                    <input {...register('lastname')} placeholder='نام خانوادگی' className='p-2 rounded-sm' type="text" />
                                    <input {...register('email')} placeholder='ایمیل' className='p-2 rounded-sm' type="email" />
                                    <textarea {...register('message')} placeholder='متن پیام' className='p-2 rounded-sm' />
                                    <button type="submit" className='bg-[#9B80BA] py-2 px-10 rounded-sm text-black w-[150px] *:text-sm'>ارسال کنید</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={`flex w-1/2 sm:hidden md:hidden ${isRight ? 'justify-start' : 'justify-end'}`}>
                        <Image src="https://s32.picofile.com/file/8479972968/Layer_1_1_.png" alt="contact" width={290} height={290} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
