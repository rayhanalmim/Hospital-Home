

const Banner = () => {
    return (
        <div className="relative">
            <div className="bg-[url('https://i.ibb.co/q7kthwH/Seek-Png-com-technology-background-png-682869.png')] bg-cover bg-center h-[600px] md:h-[400px] lg:h-[600px] w-full rounded mb-4 ">
                <div className="flex flex-col md:flex-row gap-3 pt-10 lg:pt-24">
                    <div className=" flex justify-center w-full xl:w-1/2 pt-12 md:pt-10 lg:pt-10 xl:pt-16 pl-5 lg:pl-10 xl:pl-32">
                        <div>
                            <div className="bg-cyan-800 flex justify-center items-center w-40 py-1 rounded-sm">
                                <h3  className="text-white text-3xl  tracking-wide pt-0">Experience</h3>
                            </div>

                            <div>
                                <p data-aos="fade-left" className="text-black text-4xl font-bold">Excellence <br /> in HealthCare</p>
                            </div>
                            <div>
                                <p>Experience the latest in healthcare technology at <span className="text-rose-600 font-bold">HealthCare</span> . We offer state-of-the-art treatments and personalized care to meet your unique needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <div className="h-52 w-52 md:h-64 md:w-64 lg:h-96 lg:w-96 flex justify-center items-center ml-0 md:ml-32 relative">
                        <img className="z-10" src="https://i.ibb.co/vPjdrpZ/pngegg-1.png" alt="" />
                        <div className="">
                            <div className="stats shadow absolute top-0 z-0 -right-32">

                                <div className="stat ">
                                    <div className="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                    </div>
                                    <div className="stat-title">New Users</div>
                                    <div className="stat-value">4,200</div>
                                    <div className="stat-desc">↗︎ 400 (22%)</div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="stats shadow absolute bottom-0 -left-28">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                    </div>
                                    <div className="stat-title">New Registers</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;