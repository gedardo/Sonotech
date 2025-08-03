import { ImageSlider } from '../components/ImageSlider';
import { ProductGrid } from '../components/ProductGrid';
import { Services } from '../components/Services';
import { Header } from '../components/Header';
import { BrandsSection } from '../components/BrandsSection';

export function HomePage() {
  return (
    <div>
      <div className="relative h-screen w-full">
        <ImageSlider />
        <div className="absolute top-0 left-0 w-full z-50">
          <Header transparent />
        </div>
      </div>
      <BrandsSection />
      <ProductGrid />
      <Services />
    </div>
  );
}