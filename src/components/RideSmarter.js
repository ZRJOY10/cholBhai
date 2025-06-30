import { BoltIcon, ClockIcon, CreditCardIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import ImageVarriables from '../constant/ImageVarriables';

const features = [
  {
    icon: <BoltIcon className="w-7 h-7 text-amber-400" />,
    title: 'Quick Ride Requests',
    desc: 'Request a ride in seconds and connect with nearby riders on your campus instantly.'
  },
  {
    icon: <ClockIcon className="w-7 h-7 text-amber-400" />,
    title: 'Live Ride Tracking',
    desc: 'See exactly where your rider is and when they’ll arrive. No more guessing or waiting.'
  },
  {
    icon: <CreditCardIcon className="w-7 h-7 text-amber-400" />,
    title: 'Pay Cash or bKash',
    desc: 'Enjoy simple, hassle-free payments using cash or bKash — your choice every time.'
  },
  {
    icon: <CurrencyDollarIcon className="w-7 h-7 text-amber-400" />,
    title: 'Student-Friendly Fares',
    desc: 'Affordable rides with transparent pricing, perfect for campus budgets.'
  },
];

const RideSmarter = () => {
	return (
		<section className="py-20 bg-neutral-950 relative overflow-hidden">
			{/* Amber gradient texture background */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-gradient-to-br from-amber-400/30 via-amber-500/10 to-transparent rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-600/20 via-amber-400/10 to-transparent rounded-full blur-2xl"></div>
				<svg
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
					width="600"
					height="300"
					viewBox="0 0 600 300"
					fill="none"
				>
					
					<defs>
						<linearGradient
							id="amberGradient"
							x1="0"
							y1="0"
							x2="600"
							y2="300"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#f59e0b" />
							<stop offset="1" stopColor="#fde68a" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="container-custom flex flex-col lg:flex-row items-center gap-16 relative z-10">
				{/* Left: Images */}
				<div className="flex-1 flex flex-col gap-6 items-center lg:items-start">
					<div className="flex gap-6 items-center">
						<div className="rounded-3xl overflow-hidden shadow-xl w-80 h-48 bg-neutral-900 flex items-center justify-center">
							<img
								src={ImageVarriables.Ride1Img}
								alt="Booking a ride"
								className="object-cover w-full h-full"
							/>
						</div>
						<span className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 shadow-lg">
							<svg
								width="36"
								height="36"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									d="M8 12h8m0 0l-3-3m3 3l-3 3"
									stroke="#F59E0B"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</div>
					<div className="flex gap-6">
						<div className="rounded-2xl overflow-hidden shadow-lg w-48 h-36 bg-neutral-900 flex items-center justify-center">
							<img
								src={ImageVarriables.Ride2Img}
								alt="Getting in car"
								className="object-cover w-full h-full"
							/>
						</div>
						<div className="rounded-2xl overflow-hidden shadow-lg w-48 h-36 bg-neutral-900 flex items-center justify-center">
							<img
								src={ImageVarriables.Ride3Img}
								alt="Using app in car"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>
				</div>
				{/* Right: Features */}
				<div className="flex-1">
					<h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
						Ride Smarter,{' '}
						<span className="text-white">Ride Better</span>
					</h2>
					<ul className="space-y-8">
						{features.map((feature) => (
							<li key={feature.title} className="flex items-start gap-5">
								<div className="mt-1">{feature.icon}</div>
								<div>
									<h3 className="text-xl md:text-2xl font-bold text-white mb-1">
										{feature.title}
									</h3>
									<p className="text-gray-300 text-base md:text-lg max-w-lg">
										{feature.desc}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default RideSmarter;
