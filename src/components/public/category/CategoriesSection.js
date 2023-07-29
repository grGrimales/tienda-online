import CategoryCard from './CategoryCard';

import accesorios from '../../../assets/img/charging-phone.jpg';
import perifericos from '../../../assets/img/headphones.jpg';



const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]



const CategoriesSection = () => {
  const categories = [
    { id: 1, title: 'Computer Accessories', imageUrl: perifericos, description: 'Work from home accessories' },
    { id: 2, title: 'Peripherals', imageUrl: accesorios, description: 'Journals and note-taking' },
    { id: 3, title: 'Computer Accessories', imageUrl: perifericos, description: 'Daily commute essentials' },
    { id: 4, title: 'Peripherals', imageUrl: accesorios, description: 'Journals and note-taking' },
  ];

  return (
    <>
     <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
          {categories.map((category) => (
        <CategoryCard key={category.id} title={category.title} description={category.description} imageUrl={category.imageUrl} />
      ))}
            {/* {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
    
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 ">
      {categories.map((category) => (
        <CategoryCard key={category.id} title={category.title} imageUrl={category.imageUrl} />
      ))}
    </div> */}
    </>
  );
};

export default CategoriesSection;
