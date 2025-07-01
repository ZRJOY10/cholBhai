import { FaBicycle, FaMotorcycle, FaUserFriends, FaUtensils } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaMotorcycle className="w-10 h-10 text-[rgb(var(--color-primary-rgb))]" />,
    title: 'Bike Ride Share',
    description: 'Affordable, fast, and flexible bike rides for students across campus. Book instantly and share your journey with fellow students.',
    status: 'available',
  },
  {
    id: 2,
    icon: <FaBicycle className="w-10 h-10 text-[rgb(var(--color-primary-light-rgb))] opacity-60" />,
    title: 'Rickshaw Booking',
    description: 'Book a rickshaw for convenient campus and city rides. Reliable, safe, and easy to use. (Coming Soon)',
    status: 'coming',
  },
  {
    id: 3,
    icon: <FaUtensils className="w-10 h-10 text-[rgb(var(--color-primary-light-rgb))] opacity-60" />,
    title: 'Food Delivery',
    description: 'Order food from your favorite campus spots and get it delivered to your location. Fast and affordable. (Coming Soon)',
    status: 'coming',
  },
  {
    id: 4,
    icon: <FaUserFriends className="w-10 h-10 text-[rgb(var(--color-primary-light-rgb))] opacity-60" />,
    title: 'Find People for Assistance',
    description: 'Need help moving, studying, or finding something on campus? Connect with others for assistance. (Coming Soon)',
    status: 'coming',
  },
];

const CampusServices = () => {
  return (
    <section className="section-padding bg-[rgb(var(--color-bg-dark-rgb))] relative overflow-hidden">
      {/* Amber gradient texture background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.3)] via-[rgba(var(--color-primary-light-rgb),0.1)] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-[rgba(var(--color-primary-dark-rgb),0.2)] via-[rgba(var(--color-primary-rgb),0.1)] to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--color-text-light-rgb))] mb-4">
            Campus Services
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-muted-rgb))] max-w-2xl mx-auto">
            Discover all the ways cholBhai helps you get around, get food, and get help on campus.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-8 flex flex-col items-center bg-[rgb(var(--color-bg-rgb))] shadow-xl border border-[rgba(var(--color-primary-rgb),0.1)] transition-all duration-300 group cursor-pointer ${service.status === 'coming' ? 'opacity-60 grayscale pointer-events-none' : 'hover:scale-105 hover:shadow-[0_0_0_4px_rgba(var(--color-primary-rgb),0.3)] hover:border-[rgba(var(--color-primary-rgb),0.4)]'}`}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-[rgb(var(--color-primary-rgb))] mb-2 text-center group-hover:text-[rgb(var(--color-primary-light-rgb))] transition-colors duration-200">{service.title}</h3>
              <p className="text-[rgb(var(--color-text-light-rgb))] text-center text-base">{service.description}</p>
              {service.status === 'coming' && (
                <span className="mt-4 px-4 py-1 rounded-full bg-[rgba(var(--color-primary-rgb),0.2)] text-[rgb(var(--color-primary-light-rgb))] text-xs font-semibold">Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusServices;
