import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ReviewsForm: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        // Handle navigation from other pages to reviews section
        if (window.localStorage.getItem('scrollToReviews') === 'true') {
            window.localStorage.removeItem('scrollToReviews');
            // Longer delay to ensure Shapo widget is loaded after page refresh
            setTimeout(() => {
                const el = document.getElementById('reviews');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }
    }, []);

    return (
        <>
            <div className="flex justify-center mt-6">
                <button
                    className="bg-orange text-white px-6 py-2 mb-4 rounded-lg shadow hover:bg-mandova-dark transition cursor-pointer"
                    onClick={() => setVisible(true)}
                >
                    {t('reviews.write_review')}
                </button>
            </div>
                    <div
                        className={`fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-10 pt-8 sm:pt-16 transition-all duration-300 ${visible ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
                        id="reviews-form"
                    >
                                <div
                                    className="rounded-lg shadow-lg w-full max-w-[95vw] sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-2 sm:mx-4 flex flex-col items-center px-2 py-2 sm:px-6 sm:py-4"
                                    style={{ minHeight: '120px', maxWidth: '95vw', maxHeight: '80vh', overflowY: 'auto' }}
                                >
                            <div id="shapo-form-142269ad53"></div>
                               <button
                                   className="bg-orange text-black px-4 py-2 rounded-lg shadow cursor-pointer mb-2 mt-2"
                                   onClick={() => setVisible(false)}
                               >
                                   {t('reviews.close')}
                               </button>
                        </div>
                    </div>
        </>
    );
}

export default ReviewsForm