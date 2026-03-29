import dashboardImg from '@/assets/software-dashboard.jpg';

const SoftwareImageSection = () => (
  <section className="bg-secondary py-[70px] px-5 md:px-[60px] border-b border-border text-center">
    <img
      src={dashboardImg}
      alt="TuulApp Dashboard"
      className="max-w-[860px] w-full rounded-xl mx-auto"
      style={{ boxShadow: '0 0 80px rgba(93,187,60,.15), 0 40px 100px rgba(0,0,0,.5)' }}
    />
  </section>
);

export default SoftwareImageSection;
