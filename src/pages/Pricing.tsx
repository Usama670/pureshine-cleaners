import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, BadgeCheck, HelpCircle } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Clean',
      price: '89',
      desc: 'Ideal for regular upkeep and general home cleaning.',
      features: [
        'General home cleaning',
        'Kitchen surface cleaning',
        'Bathroom cleaning',
        'Dusting',
        'Vacuuming / floor care'
      ],
      popular: false
    },
    {
      name: 'Deep Clean',
      price: '149',
      desc: 'Best for first-time visits, seasonal refreshes, or high-detail cleaning.',
      features: [
        'Detailed room cleaning',
        'Extra attention to buildup',
        'Better for first-time cleaning',
        'Ideal for seasonal refresh',
        'Window sills and baseboards'
      ],
      popular: true
    },
    {
      name: 'Move-In/Out',
      price: '199',
      desc: 'Perfect for tenants, landlords, property managers, and home transitions.',
      features: [
        'Empty property cleaning',
        'Kitchen and bathroom detail',
        'Inside all appliances',
        'Cabinet and drawer cleaning',
        'Full property reset'
      ],
      popular: false
    }
  ];

  return (
    <Layout title="Cleaning Service Pricing">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-[#263238] mb-6">Simple, Flexible Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-16">
              Our pricing is designed to give clients a clear starting point. Final pricing may depend on square footage, property condition, frequency, and service type.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                <div className={`p-8 rounded-3xl h-full border-2 transition-all relative ${
                  plan.popular ? 'border-[#1E88E5] shadow-2xl scale-105 bg-white z-10' : 'border-gray-100 bg-[#F5F7FA]'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#1E88E5] text-white px-6 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                      <BadgeCheck size={16} /> Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#263238] mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#1E88E5]">Starting at ${plan.price}</span>
                  </div>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">{plan.desc}</p>
                  <ul className="space-y-4 mb-10 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                        <Check size={18} className="text-[#26C6DA] shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/get-a-quote" 
                    className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                      plan.popular ? 'bg-[#1E88E5] text-white shadow-lg hover:bg-[#26C6DA]' : 'bg-white border-2 border-gray-100 text-[#263238] hover:border-[#1E88E5]'
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-16 inline-block p-6 bg-[#F5F7FA] rounded-2xl border border-gray-100 text-left max-w-3xl">
            <div className="flex gap-4 items-start">
              <div className="bg-[#26C6DA]/20 p-2 rounded-lg text-[#1E88E5] shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#263238] mb-1">Custom Office Cleaning</h4>
                <p className="text-gray-600 text-sm">
                  For larger spaces, recurring service plans, or unique requests, please contact us for a customized quote. We offer flexible schedules and small office support.
                </p>
                <Link to="/contact" className="text-[#1E88E5] text-sm font-bold mt-2 inline-block hover:underline">Contact us for office pricing &rarr;</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#1E88E5] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <HelpCircle size={48} className="mx-auto mb-6 opacity-40" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready for a spotless space?</h2>
            <Link to="/get-a-quote" className="bg-white text-[#1E88E5] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#26C6DA] hover:text-white transition-all shadow-xl">
              Request a Custom Quote
            </Link>
          </AnimatedSection>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
      </section>
    </Layout>
  );
};

export default Pricing;
