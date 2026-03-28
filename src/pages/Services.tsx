
import { Link } from 'react-router-dom';
import { CheckCircle2, Home, Sparkles, Move, Building2, LayoutPanelLeft, CalendarDays } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const serviceItems = [
    {
      title: 'Standard House Cleaning',
      desc: 'Routine cleaning designed to keep your home fresh, tidy, and comfortable. This service typically includes surface cleaning, bathroom refresh, kitchen cleaning, dusting, and general room maintenance.',
      icon: <Home size={40} className="text-[#1E88E5]" />,
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
      features: ['Kitchen surface cleaning', 'Bathroom refresh', 'Dusting & Vacuuming', 'Trash removal']
    },
    {
      title: 'Deep Cleaning',
      desc: 'A more detailed cleaning service for homes and apartments that need extra attention. Deep cleaning is ideal for first-time visits, seasonal resets, or spaces that haven\'t been professionally cleaned recently.',
      icon: <Sparkles size={40} className="text-[#1E88E5]" />,
      img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600',
      features: ['Baseboards & Window sills', 'Deep appliance cleaning', 'Tile & Grout scrubbing', 'Inside cabinets (optional)']
    },
    {
      title: 'Move-In / Move-Out Cleaning',
      desc: 'Detailed cleaning for homes, apartments, and rental properties during move-in or move-out transitions. This service helps prepare the space for handover, inspections, or new occupants.',
      icon: <Move size={40} className="text-[#1E88E5]" />,
      img:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
      features: ['Inside all appliances', 'Inside all cabinets/drawers', 'Detailed floor care', 'Wall spot cleaning']
    },
    {
      title: 'Office Cleaning',
      desc: 'Professional cleaning for offices, studios, and workspaces. We help maintain a cleaner, more organized environment for staff, visitors, and clients.',
      icon: <Building2 size={40} className="text-[#1E88E5]" />,
      img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600',
      features: ['Desk & surface sanitizing', 'Kitchenette cleaning', 'Conference room prep', 'Regular scheduling']
    },
    {
      title: 'Apartment Cleaning',
      desc: 'Flexible apartment cleaning for renters, residents, and property managers who need reliable upkeep or one-time support.',
      icon: <LayoutPanelLeft size={40} className="text-[#1E88E5]" />,
      img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600',
      features: ['Compact space efficiency', 'Balcony/Patio cleaning', 'Storage area dusting', 'Quick turnover']
    },
    {
      title: 'Airbnb Turnover Cleaning',
      desc: 'Fast, efficient cleaning between guest stays to help short-term rental hosts maintain a better guest experience and keep their properties ready.',
      icon: <CalendarDays size={40} className="text-[#1E88E5]" />,
      img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=600',
      features: ['Linen change & Laundry', 'Staging & Presentation', 'Restocking supplies', 'Photo verification']
    }
  ];

  return (
    <Layout title="Cleaning Services">
      <section className="bg-[#263238] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Cleaning Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              We offer practical and flexible cleaning solutions for residential and commercial spaces. Whether you need regular maintenance or a more detailed one-time service, PureShine Cleaners is here to help.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#1E88E5]/10 skew-x-12 transform translate-x-20"></div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {serviceItems.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} direction="up" className="flex flex-col h-full">
              <div className="rounded-3xl bg-[#F5F7FA] border border-gray-100 flex-grow hover:shadow-xl transition-all duration-300 overflow-hidden">
                
                {/* IMAGE */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-[#263238] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                  <div className="space-y-3">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <CheckCircle2 size={16} className="text-[#26C6DA]" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6 bg-white p-12 rounded-3xl shadow-xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#263238] mb-6">Not sure which service fits your needs?</h2>
            <p className="text-gray-600 text-lg mb-10">
              Every space is unique. Request a free quote and we'll help you choose the best option based on your property type and cleaning goals.
            </p>
            <Link to="/get-a-quote" className="bg-[#1E88E5] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#26C6DA] transition-all inline-block shadow-lg">
              Request a Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;