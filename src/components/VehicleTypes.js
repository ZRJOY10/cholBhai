import {
    CarIcon,
    CpuChipIcon,
    SparklesIcon,
    TruckIcon
} from '@heroicons/react/24/outline';

const VehicleTypes = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Car',
      description: 'Comfortable rides for everyday travel',
      icon: CarIcon,
      features: ['Air Conditioning', '4 Seats', 'Safe & Reliable'],
      price: 'From $5',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Bike',
      description: 'Quick and efficient for short distances',
      icon: CpuChipIcon,
      features: ['Fast Delivery', 'Eco-friendly', 'Beat Traffic'],
      price: 'From $2',
      color: 'bg-green-500',
    },
    {
      id: 3,
      name: 'SUV',
      description: 'Spacious rides for groups and families',
      icon: TruckIcon,
      features: ['6+ Seats', 'Extra Space', 'Family Friendly'],
      price: 'From $8',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      name: 'Luxury',
      description: 'Premium experience for special occasions',
      icon: SparklesIcon,
      features: ['Premium Comfort', 'Professional Driver', 'VIP Service'],
      price: 'From $15',
      color: 'bg-yellow-500',
    },
  ];

  const handleVehicleClick = (vehicleName) => {
    alert(`You selected: ${vehicleName}\\nThis would typically open a booking interface.`);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Ride
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our range of vehicles designed to meet your specific travel needs
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => {
            const IconComponent = vehicle.icon;
            return (
              <div
                key={vehicle.id}
                className="card p-6 cursor-pointer group animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleVehicleClick(vehicle.name)}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${vehicle.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {vehicle.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-indigo-600">
                    {vehicle.price}
                  </span>
                  <span className="text-sm text-gray-500">per ride</span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Download our app and get your first ride at a special discount
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-outline">
                Book a Ride Now
              </button>
              <button className="btn-primary">
                Become a Driver
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleTypes;
