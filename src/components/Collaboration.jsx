
import { useEffect, useRef, useState } from "react";
import { Sparkles, CheckCircle, Layers, Zap, Clock  } from 'lucide-react';

export const Collaboration = () => {
    
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            }, { threshold: 0.35 }
            );

            if (imageRef.current) {
                observer.observe(imageRef.current);
            }

            return () => observer.disconnect();
    }, []);

    return (
        <section className="common-section bg-white text-slate-800">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-4 sm:gap-12 lg:grid-cols-2">
                    <div>
                        <span className="section-tag bg-cyan-100 text-cyan-700">
                            <Sparkles className="h-4 w-4" />
                            Better collaboration
                        </span>

                        <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl text-slate-700">
                            Great work happens when everyone knows what matters.
                        </h2>

                        <p className="mt-6 mb-10 max-w-xl text-lg">
                            Stop chasing updates, digging through messages, and wondering
                            what happens next. Give your team one clear place to plan,
                            collaborate, and keep momentum moving.
                        </p>

                        <div className="grid gap-5 grid-cols-[35px_1fr] items-first-start">
                            <CheckCircle className="h-8 w-8 text-cyan-500" />
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Keep everyone on the same page
                                </h3>
                                <p className="mt-1">
                                    Make priorities, deadlines, and responsibilities visible
                                    without endless meetings or status updates.
                                </p>
                            </div>
            
                            <Layers className="h-8 w-8 text-fuchsia-400" />
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Turn scattered work into one clear flow
                                </h3>
                                <p className="mt-1">
                                    See what is being worked on, what is blocked, and what
                                    needs attention next.
                                </p>
                            </div>
                
                            <Clock className="h-8 w-8 text-sky-400"/>
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Spend less time coordinating
                                </h3>
                                <p className="mt-1">
                                    Reduce friction between ideas and execution so your team
                                    can focus on actually getting things done.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div ref={imageRef} className="relative">
                            <img src={`${import.meta.env.BASE_URL}collaboration.svg`} alt="AI-powered team collaboration"
                                className={`h-[520px] w-full p-8 object-contain transition-transform duration-[1800ms] ease-out ${
                                isVisible ? "scale-110" : "scale-90"
                            }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default Collaboration;