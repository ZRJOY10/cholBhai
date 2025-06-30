import ImageVarriables from '../constant/ImageVarriables';

const steps = [
  {
    title: 'Sign Up & Verify',
    desc: 'Create an account as a User or Rider. Complete verification to ensure a safe and trusted community.'
  },
  {
    title: 'Request a Ride',
    desc: 'Users enter their trip details, such as pickup and drop-off points. Nearby Riders get notified of the request.'
  },
  {
    title: 'Accept & Start Ride',
    desc: 'A Rider accepts the request. The User gets notified, and they meet up to begin the ride together.'
  },
  {
    title: 'Payment & Feedback',
    desc: 'Payment is handled securely through the app. Both User and Rider can rate each other to improve trust and service quality.'
  },
];


const HowItWorks = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-12">
        {/* Left: App Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-amber-300/20 blur-2xl z-0 hidden md:block"></div>
          <img
            src={ImageVarriables.Mobile3Img}
            alt="cholBhai App UI"
            className="relative z-10 w-[22rem] md:w-[28rem] rounded-3xl shadow-2xl"
          />
        </div>
        {/* Right: Steps */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">Ride Made Simple</h2>
          <ol className="space-y-8 relative">
            {steps.map((step, idx) => (
              <li key={step.title} className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-100 text-2xl font-bold text-amber-500 border-2 border-amber-300/60 shadow-md">
                    {idx + 1}
                  </span>
                  {idx !== steps.length - 1 && (
                    <span className="h-16 w-1 bg-amber-200/60 mt-1 mb-1"></span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-base md:text-lg max-w-md">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
